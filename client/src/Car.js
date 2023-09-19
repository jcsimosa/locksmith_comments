import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

let Car = () => {

    const [carInfo , setCarInfo] = useState([])
    const [carComments, setCarComments] = useState([])
    const [newComment, setNewComment] = useState('')
    const params = useParams()
    const {id} = params

   
    let submitComment = (e) => {
        e.preventDefault()
        const commentData = {
            car_id: id,
            comment: newComment
        }


        fetch('/create_comment',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body : JSON.stringify(commentData)
        })
        .then(r => {
            if (r.ok){
                r.json().then(r => {
                    setCarComments(carComments => ([...carComments, r]))
                })
            }
            e.target.reset()
        })
    }

    const deleteComment = (commentDeleted) => {
        console.log(commentDeleted)
        setCarComments(carComments.filter(comment => comment.id !== id))
    }


    useEffect(()=> {
        fetch(`/cars/${id}`)
        .then(r => r.json())
        .then(carData => {
            setCarInfo(carData)
            setCarComments(carData.comments)
        })
    },[])



    let comments = carComments.map((comment) => {
        return <Comments key={comment.id} comment={comment} deleteComment={deleteComment}/>
    })


    return(

<div>

<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/>
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"/>


<section className="relative pt-12 bg-blueGray-50">
<div className="items-center flex flex-wrap">
  <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
    <img alt="..." className="max-w-full rounded-lg shadow-lg" src={carInfo.img}/>
  </div>
  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
    <div className="md:pr-12">
      <h3 className="text-3xl font-semibold">{carInfo.Make} {carInfo.Model}</h3>
      <p className="font-semibold mt-4 text-lg leading-relaxed text-blueGray-500">
        Year:{carInfo.Year}
      </p>
      <ul className="list-none mt-6">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-600 bg-blue-200 mr-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
</span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                Lishi: {carInfo.lishi}
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-600 bg-blue-200 mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Code: {carInfo.code}</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-black-600 bg-blue-200 mr-3"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
              </span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Test Blade: {carInfo.test_blade}</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<footer className="relative  pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        
        <div className="text-sm text-blueGray-500 font-semibold py-1">
        <div className="">
                            <div className="w-full">
                            <div className="flex justify-center">
                            </div>
                            <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                                Create your Comment:
                            </h1>
                            <div>
                                <form onSubmit={submitComment}>
                                    <label className="block text-sm">
                                    Comment:
                                    </label>
                                    <input 
                                    className="w-full px-4 py-2 text-sm border rounded-md focus:border-black-400 focus:outline-none focus:ring-1 focus:ring-black-600"
                                    placeholder="Comment Here"
                                    required 
                                    onChange={(e) => {setNewComment(e.target.value)}}
                                    name="comment"
                                    />
                                    <button
                                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                                        >
                                        Create
                                    </button> 
                                    </form>     
                                        
                            </div>
                            </div>
                        </div> 
        </div>
      </div>
    </div>
  </div>
</footer>
</section>
        <h1 className="bold">Comments: {comments}</h1>
    </div>
    ) 
}

export default Car


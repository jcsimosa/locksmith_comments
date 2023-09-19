import React from 'react';

let Comments = ({comment, deleteComment}) => {


    let handleDelete = () => {
        fetch("" ,)
    }

    return (

        <div>
            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
                <div className="relative flex gap-4">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{null}</p>
                            <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                        </div>
                        <p className="text-black-900 text-sm"> * {comment.comment}</p>
                    </div>
                </div>
                <p className="-mt-4 text-gray-500">{null}</p>  
                <div className="justify-end mt-4">
                    <button
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    onClick={deleteComment}
                    >
                       delete
                    </button>
                    <button
                    onClick={null}
                    className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    >
                        Edit comment
                    </button> 
                </div> 
                <form onSubmit={null}>
                </form>
            </div> 

        </div>
    )
}

export default Comments
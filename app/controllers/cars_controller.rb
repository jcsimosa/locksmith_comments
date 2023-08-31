class CarsController < ApplicationController
    def all 
        car = Car.all 
        render json: car , status: :ok
    end
    
    def show
        car = Car.find(params[:id])
        render json: car , status: :ok
    end
   
end

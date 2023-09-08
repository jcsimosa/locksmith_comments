class CarsController < ApplicationController
    def all 
        car = Car.all 
        render json: car , status: :ok
    end
    
    def show
        car = Car.find(params[:id])
        render json: car , status: :ok
    end
    def create 
        car = Car.create(car_params)

    end
    
    private
    
    def car_params
        params_permit(:img, :Make,:Model,:Year,:code,:lishi,:test_blade)
    end

end

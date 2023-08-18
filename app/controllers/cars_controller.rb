class CarsController < ApplicationController
    def all 
        car = Car.all 
        render json: car , status: :ok
    end
end

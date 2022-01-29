class Api::SpotsController < ApplicationController
    
    def create
    @spot = Spot.create!(spot_params)
    render :show
    end

    def index 
        @spots = Spot.all 

        render :index 
    end

    def show
    @spot = Spot.find(params[:id])
        if @spot
            render :show
        else
            render json: @spot.errors.full_messages, status: 422
        end
    end

    private 

    def spot_params
        params.require(:spot).permit(:name, :description, :lat, :lng)
    end
end

class Api::ReviewsController < ApplicationController
    # before_action :require_logged_in    

    def create
    @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review, status: :unprocessable_entity
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json @review.errors.full_messages, status: 422
        end
    end

    def index
        @reviews = Review.all.where(spot_id: params[:spot_id])
        render :index
    end

    def destroy 
        @review = current_user.reviews.find(params[:id])
        @review.destroy
        render :show
    end

    private

    def review_params
        params.require(:review).permit(:id, :recommend, :body, :spot_id, :author_id)
    end

end

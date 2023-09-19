class CommentsController < ApplicationController
    def index
        comments = Comment.all 
        render json: comments, status: :ok
    end
    
    def show
        comment = Comment.find(params[:id])
        render json: comment, status: :ok
    end
    def create_comments
        comment = Comment.create(comments_params)
        render json: comment, status: :created
    end
    
    def destroy
        comment=Comment.find params[:id]
        comment.destroy
        head :no_content 
    end

    private

    def comments_params
        params.permit(:comment, :car_id)
    end
end

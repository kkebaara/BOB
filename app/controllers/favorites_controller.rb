class FavoritesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def index 
        user = User.find(session[:user_id])
        render json: user.favorites
    end

    
   def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite, status: :created
    end

    def destroy
        favorite = Favorite.find(params[:id]).destroy
        head :no_content
    end

    private 

    def render_invalid(invalid)
        render json: {"errors": invalid.record.errors.full_messages}
    end
    
    def favorite_params
        params.permit(:business_id, :user_id)
    end
end

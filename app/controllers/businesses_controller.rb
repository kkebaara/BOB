class BusinessesController < ApplicationController
	rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        businesses = Business.all
        render json: businesses
    end

    def show
        business = Business.find(params[:id])
        render json: business
    end

    private

    def render_not_found
        render json: {"error": "Restaurant not found"}, status: :not_found
    end

end

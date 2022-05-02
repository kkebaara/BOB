class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    before_action :authorize, only: [:show]
    
  def index
    users = User.all
    render json: users, status: :ok
  end

  def create
    user = User.create(user_params)
    if user.valid?
      user.create_journal(wishlist: "", itenerary: "", other: "")
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: user.errors.full_messages }, status: :unprocessable_entity
    end
  end


  def update
      user = User.find_by(id: session[:user_id])
      if user
          user.update(user_params)
          render json: user, status: :accepted
      else
          render json: { error: "Journal not found" }, status: :not_found
      end
  end


  def show
    user = User.find_by(id: session[:user_id])
    render json: user
  end

  private

  def authorize
    render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
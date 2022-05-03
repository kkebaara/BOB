class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    User.find_by(id:session[:user_id])
  end 

  def authorize
    return render json: {error: "Not Authorized"}, status
  end

  private 

  def render_unporece
  end 
  
  def render_not_found(error)
  end 



  # def current_user
  #   @current_user ||= User.find_by(id: session[:user_id])
  # end

end
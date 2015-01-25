class SessionsController < ApplicationController
  respond_to :json
  def show_current_user
    if current_user
      render json: {currentuser: current_user}
    else
      head :unauthorized
    end
  end
end
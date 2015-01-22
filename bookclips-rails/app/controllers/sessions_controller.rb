class SessionsController < ApplicationController
  def show_current_user
    if current_user
      render json: {session: current_user}
    else
      head :unauthorized
    end
  end
end
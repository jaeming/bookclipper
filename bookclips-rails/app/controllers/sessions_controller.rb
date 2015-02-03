class SessionsController < ApplicationController
  respond_to :json

  def show_current_user
    if current_user
      render json: {session: {id: 'current', user_name: current_user.name, user_id: current_user.id, user_email: current_user.email, authenticated: true}}
    else
      render json: {session: {id: 'current', authenticated: nil}}
    end
  end

end
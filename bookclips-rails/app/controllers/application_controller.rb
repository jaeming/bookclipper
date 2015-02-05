class ApplicationController < ActionController::Base
  respond_to :html, :json
  skip_before_action :verify_authenticity_token
  # protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :name
  end
end

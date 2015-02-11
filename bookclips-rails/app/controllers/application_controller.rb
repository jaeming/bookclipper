class ApplicationController < ActionController::Base
  include ActionController::Serialization
  respond_to :html, :json
  skip_before_action :verify_authenticity_token
  # protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?
  serialization_scope :view_context

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) << :name
    end
end
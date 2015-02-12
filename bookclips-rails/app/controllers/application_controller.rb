class ApplicationController < ActionController::Base
  include ActionController::Serialization
  respond_to :html, :json
  protect_from_forgery with: :null_session
  before_action :configure_permitted_parameters, if: :devise_controller?
  serialization_scope :view_context

  def index
    render :index
  end

  protected
    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) << :name
    end
end
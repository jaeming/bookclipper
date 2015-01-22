class UsersController < ApplicationController
  respond_to :json
  before_action :authenticate_user!, except: [:show, :create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render json: @user, status: :created
    else
      respond_with @user
    end
  end

  def update
    if current_user.update_attributes(user_params)
      render json: current_user
    else
      render json: {success: "false", message: "Sign in first"}
    end
  end

 private

 def user_params
  params.require(:user).permit(:email, :password, :password_conformation, :name)
 end


end
class HashtagsController < ApplicationController
  respond_to :json

  def index
    @hashtags = Hashtag.includes(:bookmarks).all
    render json: @hashtags
  end

  def show
    @hashtag = Hashtag.includes(:bookmarks).find_by id: params[:id]
    render json: @hashtag
  end

  def create
    @hashtag = Hashtag.create(hashtag_params)
    @hashtag.save!
    respond_with @hashtag
  end

  private
    def hashtag_params
      params.require(:hashtag).permit(:topic)
    end
end

class HashtagsController < ApplicationController
  respond_to :json

  def index
    @hashtags = Hashtag.all
    render json: @hashtags
  end

  def show
    @hashtag = Hashtag.find(params[:id])
    render json: @hashtag, serializer: HashtagShowBookmarksSerializer, root: false
  end
end

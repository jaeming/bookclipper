class BookmarksController < ApplicationController
  respond_to :json

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end

  def show
    @bookmark = Bookmark.find(params[:id])
    render json: @bookmark
  end

  def new
    @bookmark = Bookmark.new
    @hashtag = Hashtag.new
  end

  def create
    if current_user
      @bookmark = Bookmark.create(bookmark_params)
      tag_topics.each { |tag| @bookmark.hashtags.find_or_create_by!(topic: tag) }
      @bookmark.users << current_user
      @bookmark.save!
      respond_with @bookmark
    else
      head :unauthorized
    end
  end


  def favorite

  end

  # private

    def bookmark_params
      params.require(:bookmark).permit(:url, :title, :description, :tags)
    end

    def tag_topics
      if params[:tags] && params[:tags] != ""
        params[:tags].downcase.split(/[\s,]+/)
      else
        ["general"]
      end
    end

end
class BookmarksController < ApplicationController
  respond_to :json

  def index
    @bookmarks = Bookmark.includes(:hashtags, :users).all
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
      @bookmark.users << current_user
      @bookmark.save!
      respond_with @bookmark
    else
      head :unauthorized
    end
  end

  def update
    if current_user
      @bookmark = Bookmark.find(params[:id])
      @bookmark.update_attributes(bookmark_params)
      @bookmark.save!
      head :no_content
    else
      head :unauthorized
    end
  end

  private

    def bookmark_params
      params.require(:bookmark).permit(:url, :title, :description, :tags)
    end

end
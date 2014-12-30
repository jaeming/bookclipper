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

end

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

  def create
    return head :unauthorized unless current_user
    @bookmark = current_user.bookmarks.create(bookmark_params)
    respond_with @bookmark
  end

  def update
    return head :unauthorized unless current_user
    @bookmark = Bookmark.find(params[:id])
    @bookmark.update_attributes(bookmark_params)
    head :no_content
  end

  private

    def bookmark_params
      params.require(:bookmark).permit(:url, :title, :description, :tags)
    end

end
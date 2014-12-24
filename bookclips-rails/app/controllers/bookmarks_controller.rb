class BookmarksController < ApplicationController
  respond_to :json

  def index
    @bookmarks = Bookmark.all
    render json: @bookmarks
  end
end

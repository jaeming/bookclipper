class FavoritesController < ApplicationController
  respond_to :json

  def create
    @bookmark = Bookmark.find(params[:bookmark_id])
    @bookmark.users |= [current_user]
    @bookmark.save!
    head :no_content
  end

end

class FavoritesController < ApplicationController
  respond_to :json

  def create
    @bookmark = Bookmark.find(params[:bookmark_id])
    @favorite = current_user.favorites.create! bookmark: @bookmark
    head :no_content
  end

  def destroy
    @bookmark = Bookmark.find(params[:bookmark_id])
    @favorite = Favorite.find(@bookmark.favorites.where(user_id: current_user.id))
    @hashtags = @bookmark.hashtags.to_a
    @favorite.destroy!
    @bookmark.destroy! unless @bookmark.users.any?
    @hashtags.each { |tag| tag.destroy! unless tag.bookmarks.any? }
    head :no_content
  end

end

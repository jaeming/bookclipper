class FavoritesController < ApplicationController
  respond_to :json

  def create
    @bookmark = Bookmark.find(params[:bookmark_id])
    @bookmark.users |= [current_user]
    @bookmark.save!
    head :no_content
  end

  def destroy
    @bookmark = Bookmark.find(params[:id])
    @bookmark.users.delete(current_user)
    @bookmark.save!
    hashtags = []
    hashtags |= @bookmark.hashtags
    @bookmark.destroy! unless @bookmark.users.any?
    hashtags.each { |tag| tag.destroy! unless tag.bookmarks.any? }
    head :no_content
  end

end

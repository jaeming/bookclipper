require 'rails_helper'

RSpec.describe FavoritesController, :type => :controller do
  include Devise::TestHelpers

  it "Adds a bookmark to a user's collection" do
    favorited_bookmark = create(:bookmark)
    not_my_bookmark = create(:bookmark)
    user = create(:user)
    sign_in user

    post :create, bookmark_id: favorited_bookmark.id

    expect(favorited_bookmark.users).to eq([user])
    expect(not_my_bookmark.users).not_to eq([user])
  end

  it "removes a bookmark from a user's collection" do
    user = create(:user)
    sign_in user
    bookmark1 = create(:bookmark, users: [user])
    bookmark2 = create(:bookmark, users: [user])

    delete :destroy, {id: bookmark2.id}

    expect(user.bookmarks).to eq([bookmark1])
  end
end

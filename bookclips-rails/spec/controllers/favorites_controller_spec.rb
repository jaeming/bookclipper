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
    bookmark1 = create(:bookmark)
    bookmark2 = create(:bookmark)
    user = create(:user)
    bookmark1.users |= [user]
    bookmark2.users |= [user]

    sign_in user

    delete :destroy, {id: bookmark2.id}

    expect(user.bookmarks).to include(bookmark1)
    expect(user.bookmarks).not_to include(bookmark2)
  end
end

require 'rails_helper'

RSpec.describe BookmarksController, :type => :controller do
  include Devise::TestHelpers

  before do
    @user = create(:user)
    sign_in @user
  end

  it "returns index of Bookmarks in JSON" do
    10.times { bookmarks = create(:bookmark) }

    get :index

    json = JSON.parse(response.body)
    bookmark_number = json['bookmarks'].length

    expect(response).to have_http_status(:success)
    expect(bookmark_number).to eq(10)
  end

  it "returns a specific Bookmark in JSON" do
    bookmark1 = create(:bookmark, url: "http://www.specific-url.com")

    get :show, id: bookmark1.id

    json = JSON.parse(response.body)
    url = JsonPath.on(json, '$..url')

    expect(response).to have_http_status(:success)
    expect(url).to eq(["http://www.specific-url.com"])
  end

  it "assoiciates a default hashtag with a new bookmark when none are supplied" do
    bookmark_params = {"bookmark" => {"url"=>"http://benjidalton.com"}, "format" => "json"}

    post :create, bookmark_params
    bookmark = Bookmark.last
    hashtag = bookmark.hashtags[0]

    expect(hashtag.topic).to eq("general")

  end

end




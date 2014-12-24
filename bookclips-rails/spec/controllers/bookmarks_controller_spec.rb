require 'rails_helper'

RSpec.describe BookmarksController, :type => :controller do

  describe "GET index" do

    it "returns index of Bookmarks in JSON" do
      10.times { bookmarks = create(:bookmark) }

      get :index

      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json['bookmarks'].length).to eq(10)
    end

    it "returns a specific Bookmark in JSON" do
      bookmark1 = create(:bookmark, title: "this is a specific bookmark")

      get :show, id: bookmark1.id

      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json['title']).to eq("this is a specific bookmark")
    end

  end
end




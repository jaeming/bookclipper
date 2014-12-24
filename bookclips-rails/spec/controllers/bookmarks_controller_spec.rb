require 'rails_helper'

RSpec.describe BookmarksController, :type => :controller do

  describe "GET index" do

    it "returns HTTP Success in JSON format" do
      10.times { bookmarks = create(:bookmark) }

      get :index

      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json['bookmarks'].length).to eq(10)
    end
  end
end




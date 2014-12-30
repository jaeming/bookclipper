require 'rails_helper'

RSpec.describe HashtagsController, :type => :controller do
  it "returns index of hashtags in JSON" do
    10.times { hashtags = create(:hashtag) }

    get :index

    expect(response).to have_http_status(:success)
    json = JSON.parse(response.body)
    expect(json['hashtags'].length).to eq(10)
  end

  it "returns a specific hashtag in JSON" do
    hashtag1 = create(:hashtag, topic: "Tech")

    get :show, id: hashtag1.id

    expect(response).to have_http_status(:success)
    json = JSON.parse(response.body)
    expect(JsonPath.on(json, '$..topic')).to eq(["Tech"])
  end
end

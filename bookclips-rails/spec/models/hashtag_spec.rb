require 'rails_helper'

RSpec.describe Hashtag, :type => :model do
  it "creates a bookmark with multiple hashtags" do
    hashtag1 = create(:hashtag)
    hashtag2 = create(:hashtag, topic: "lolcats")
    bookmark = create(:bookmark, hashtags: [hashtag1, hashtag2])

    expect(bookmark.hashtags).to eq([hashtag1, hashtag2])
    expect(hashtag1.bookmarks).to eq([bookmark])
  end
end

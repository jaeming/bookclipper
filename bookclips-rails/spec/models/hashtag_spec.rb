require 'rails_helper'

RSpec.describe Hashtag, :type => :model do
  it "creates a bookmark with multiple hashtags" do
    hashtags = "memes News, media"
    bookmark = create(:bookmark, tags: hashtags)
    hashtag_topics = []
    bookmark.hashtags.each { |i| hashtag_topics << i.topic }

    expect(hashtag_topics).to eq(["memes", "news", "media"])
  end
end

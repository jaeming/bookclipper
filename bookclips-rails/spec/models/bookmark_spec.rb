require 'rails_helper'

RSpec.describe Bookmark, :type => :model do

  it "checks for a valid url" do
    bookmark1 = build(:bookmark, url: "http://www.valid-url.com")
    bookmark2 = build(:bookmark, url: "www.junk-url")
    expect(bookmark1).to be_valid
    expect(bookmark2).to be_invalid
  end

  it { is_expected.to callback(:set_bookmark_meta).after(:create) }
  it { is_expected.to callback(:set_hashtags).after(:create) }
  it { is_expected.to callback(:set_hashtags).after(:update) }

  before do
    @bookmark = create(:bookmark, url: "http://apple.com", tags: 'love, hate mojo')
  end

  it "#set_bookmark_meta should generate a title and description for bookmarks" do
    expect(@bookmark.title).not_to be_nil
    expect(@bookmark.description).not_to be_nil
  end

  it "#tag_topics should return a General tag if tags string is empty" do
    bookmark = create(:bookmark, url: "http://apple.com")
    expect(bookmark.tag_topics).to eq(['general'])
  end

  it "#tag_topics should split a string into seperate tags" do
    expect(@bookmark.tag_topics).to eq(['love', 'hate', 'mojo'])
  end

  it "#set_hashtags should generate hashtags for a bookmark" do
    expect(@bookmark.hashtags.size).to eq(3)
    expect(@bookmark.hashtags.pluck(:topic)).to eq(['love', 'hate', 'mojo'])
  end

  it "#set_hashtags should find a hashtag if it already exists instead of generating a new one" do
    hashtag = Hashtag.create!(topic: "yolo")
    bookmark = create(:bookmark, url: "http://apple.com", tags: 'yolo')
    expect(bookmark.hashtags).to include(hashtag)
    expect(bookmark.hashtags.first).to eq(hashtag)
  end

  it "#set_hashtags associate a General hashtag for bookmarks with no tags" do
    bookmark = create(:bookmark, url: "http://apple.com")
    expect(bookmark.hashtags.size).to eq(1)
    expect(bookmark.hashtags.pluck(:topic)).to eq(['general'])
  end

end

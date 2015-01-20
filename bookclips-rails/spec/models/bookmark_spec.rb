require 'rails_helper'

RSpec.describe Bookmark, :type => :model do

  it "checks for a valid url" do
    bookmark1 = build(:bookmark, url: "http://www.valid-url.com")
    bookmark2 = build(:bookmark, url: "www.junk-url")

    expect(bookmark1).to be_valid
    expect(bookmark2).to be_invalid
  end

  it "generates a title and description for bookmarks" do
    bookmark = create(:bookmark, url: "http://apple.com")

    expect(bookmark.title).not_to be_nil
    expect(bookmark.description).not_to be_nil
  end

end

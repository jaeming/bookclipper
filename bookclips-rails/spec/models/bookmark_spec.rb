require 'rails_helper'

RSpec.describe Bookmark, :type => :model do

  it "checks for a valid url" do
    bookmark1 = build(:bookmark, url: "http://www.valid-url.com")
    bookmark2 = build(:bookmark, url: "www.junk-url")

    expect(bookmark1).to be_valid
    expect(bookmark2).to be_invalid
  end

end

class Bookmark < ActiveRecord::Base
  belongs_to :hashtag
  validates :url, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https))
end

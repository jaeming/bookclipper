class Bookmark < ActiveRecord::Base
  belongs_to :hashtag
  belongs_to :user
  validates :url, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https))
end

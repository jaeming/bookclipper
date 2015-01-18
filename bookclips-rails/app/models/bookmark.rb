class Bookmark < ActiveRecord::Base
  has_and_belongs_to_many :hashtags
  belongs_to :user
  validates :url, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https))


end

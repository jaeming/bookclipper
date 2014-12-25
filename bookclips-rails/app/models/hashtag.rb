class Hashtag < ActiveRecord::Base
  has_many :bookmarks
  validates :topic, presence: true, length: { minimum: 3 }
end

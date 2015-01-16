class Hashtag < ActiveRecord::Base
  has_and_belongs_to_many :bookmarks
  validates :topic, presence: true, length: { minimum: 3 }
end

class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :hashtag_topic, :hashtag_id

  def hashtag_topic
    object.hashtag.topic
  end

end

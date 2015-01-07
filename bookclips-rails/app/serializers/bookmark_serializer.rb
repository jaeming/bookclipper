class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :hashtag_id, :user_id
  # , :user_name

  # def user_name
  # 	object.user.name
  # end
end

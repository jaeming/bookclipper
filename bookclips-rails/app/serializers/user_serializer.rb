class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :bookmarks

  def bookmarks
    object.bookmark_ids
  end

end

class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :description, :tags, :hashtags, :users, :authenticated
  delegate :current_user, to: :scope

  def hashtags
    object.hashtag_ids
  end

  def users
    object.user_ids
  end

  def favorites
    object.favorite_ids
  end

  def attributes
    data = super
    data[:editable] = object.users.include?(current_user)
    data
  end

  def authenticated
    true if current_user
  end

end

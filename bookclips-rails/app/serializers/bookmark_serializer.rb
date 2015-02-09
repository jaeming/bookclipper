class BookmarkSerializer < ActiveModel::Serializer
  attributes :id, :url, :title, :description, :tags, :hashtags, :users, :authenticated
  # has_many :hashtags, embed: :ids, include: true
  # has_many :users, embed: :ids, include: true
  delegate :current_user, to: :scope

  def hashtags
    object.hashtag_ids
  end

  def users
    object.user_ids
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

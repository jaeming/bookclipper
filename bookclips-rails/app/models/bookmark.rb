class Bookmark < ActiveRecord::Base
  require 'embedly'
  require 'json'
  require 'jsonpath'
  has_and_belongs_to_many :hashtags
  has_many :favorites
  has_many :users, through: :favorites
  validates :url, presence: true
  validates_format_of :url, :with => URI::regexp(%w(http https))
  after_create :set_bookmark_meta

  def set_bookmark_meta
    embedly_key = ENV['embedly_key'];
    embedly_api = Embedly::API.new :key => embedly_key,
        :user_agent => 'Mozilla/5.0 (compatible; mytestapp/1.0; my@email.com)'
    obj = embedly_api.extract :url => self.url
    json = JSON.pretty_generate(obj[0].marshal_dump)
    self.title = JsonPath.on(json, '$..title')[0]
    self.description = JsonPath.on(json, '$..description')[0]
    self.save!
  end

end

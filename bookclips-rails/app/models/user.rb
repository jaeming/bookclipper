class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :confirmable
  has_many :authorizations, :dependent => :destroy
  has_many :favorites
  has_many :bookmarks, through: :favorites
end

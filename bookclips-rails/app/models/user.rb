class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable, :confirmable
  has_many :authorizations, :dependent => :destroy
  has_many :bookmarks
  # after_create :add_name_if_null

  # def add_name_if_null
  #   if self.name = null
  #     self.name = self.email[/[^@]+/]
  #   end
  # end

end

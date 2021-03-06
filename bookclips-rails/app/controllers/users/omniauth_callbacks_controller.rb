class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def twitter
    auth_hash = request.env["omniauth.auth"]
    uid = auth_hash['uid']
    name = auth_hash['info']['name']
    auth = Authorization.find_by_provider_and_uid("twitter", uid)

    user = auth.try(:user) || find_or_create_user(name)
    auth ||= user.authorizations.build(provider: "twitter", uid: uid)
    auth.update_attributes(auth_attributes(auth_hash))

    if user
      sign_in_and_redirect user, :event => :authentication
    else
      redirect_to :new_user_registration
    end
  end

  private

    def find_or_create_user(name)
      user = User.find_or_create_by(name: name)
      user.password = Devise.friendly_token[0,8]
      user.email = "#{UUIDTools::UUID.random_create}@shufflebox.org"
      user.skip_confirmation!
      user.save!
      user
    end

    def auth_attributes(auth_hash)
      { uid: auth_hash['uid'],
        token: auth_hash['credentials']['token'],
        secret: auth_hash['credentials']['secret'],
        name: auth_hash['info']['name'],
        url: "http://twitter.com/#{auth_hash['name']}" }
    end

end

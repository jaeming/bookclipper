require 'rails_helper'

RSpec.describe Users::OmniauthCallbacksController, :type => :controller do


  it "uses oauth callback to sign up" do
    @request.env["devise.mapping"] = Devise.mappings[:user]
    @request.env["omniauth.auth"] = {"uid" => "1", "info" => {"name" => "TheTester"}, "credentials" => { "token" => "123", "secret" => "123" }}

    get :twitter

    expect(response).to have_http_status(302)

    expect(Authorization.find_by(uid: "1", name: "TheTester")).not_to be_nil
    expect(User.find_by(name: "TheTester")).not_to be_nil
  end
end

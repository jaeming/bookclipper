Rails.application.routes.draw do

  devise_for :users,
    :controllers => {
      :omniauth_callbacks => "users/omniauth_callbacks"
    }
  resources :hashtags
  resources :bookmarks
  resources :users, except: [:destroy]
  get '/sessions/current' => 'sessions#show_current_user'
  get :csrf, to: 'csrf#index'

  # scope :users do
  #   get '/current_user' => 'users#show_current_user'
  # end

  root 'bookmarks#index'
end

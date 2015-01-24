Rails.application.routes.draw do

  devise_for :users,
    :controllers => {
      :omniauth_callbacks => "users/omniauth_callbacks"
    }
  resources :hashtags
  resources :bookmarks
  resources :users, except: [:destroy]
  get '/currentuser' => 'sessions#show_current_user'
  get :csrf, to: 'csrf#index'

  root 'bookmarks#index'
end

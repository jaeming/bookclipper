Rails.application.routes.draw do

  devise_for :users,
    :controllers => {
      :omniauth_callbacks => "users/omniauth_callbacks"
    }

  get 'sessions/current' => 'sessions#show_current_user'
  get 'users/bookmarks' => 'users#user_bookmarks'
  get :csrf, to: 'csrf#index'
  post '/favorite' => 'bookmarks#favorite'

  resources :hashtags
  resources :bookmarks
  resources :users, except: [:destroy]
  resources :favorites, only: [:create]

  root 'bookmarks#index'
end

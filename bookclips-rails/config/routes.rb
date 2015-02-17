Rails.application.routes.draw do
  get :csrf, to: 'csrf#index'

  scope '/api' do

    devise_for :users,
      :controllers => {
        :omniauth_callbacks => "users/omniauth_callbacks"
      }

    get 'sessions/current' => 'sessions#show_current_user'
    get 'users/bookmarks' => 'users#user_bookmarks'
    post '/favorite' => 'bookmarks#favorite'
    delete '/favorites/:bookmark_id' => 'favorites#destroy'

    resources :hashtags
    resources :bookmarks
    resources :users, except: [:destroy]
    resources :favorites, only: [:create]


  end

  root 'application#index'
  get '/*path' => 'application#index'
end

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

    resources :hashtags
    resources :bookmarks
    resources :users, except: [:destroy]
    resources :favorites, only: [:create, :destroy]
  end

  root 'bookmarks#index'
end

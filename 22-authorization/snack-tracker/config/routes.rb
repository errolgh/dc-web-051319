Rails.application.routes.draw do
  # get 'snacks/index'
  # get "my_snacks", to: "snacks#index"
  get "favorite_foods", to: "snacks#favorite_snacks", as: "favorite"
  # post "favorite_foods", to: "snacks#favorite_snacks", as: "post_favorite"
  get "/login", to: "sessions#new", as: "login"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get 'users/new', to: "users#new", as: "new_user"
  post 'users', to: "users#create", as: "create_user"
  resources :snacks
  resources :retailers do 
    resources :snacks, {only: [:index, :show]}
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

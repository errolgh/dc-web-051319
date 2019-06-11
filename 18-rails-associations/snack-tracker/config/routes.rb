Rails.application.routes.draw do
  # get 'snacks/index'
  # get "my_snacks", to: "snacks#index"
  get "favorite_foods", to: "snacks#favorite_snacks", as: "favorite"
  # post "favorite_foods", to: "snacks#favorite_snacks", as: "post_favorite"

  resources :snacks
  resources :retailers do 
    resources :snacks, {only: [:index, :show]}
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

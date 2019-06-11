Rails.application.routes.draw do
  # get 'snacks/index'
  # get "my_snacks", to: "snacks#index"
  resources :snacks
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

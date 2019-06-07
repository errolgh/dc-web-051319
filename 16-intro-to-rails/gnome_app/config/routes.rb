Rails.application.routes.draw do
  get 'gnomes', to: 'gnomes#index'
  get 'gnomes/:id', to: 'gnomes#show'
 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

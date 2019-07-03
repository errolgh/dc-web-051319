Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/cats' => 'cats#index'
  get '/cats/:id' => 'cats#show'
  get '/hobbies' => 'hobbies#index'
  get '/hobbies/:id' => 'hobbies#show'
  post '/cats' => 'cats#create'
  delete '/cats/:id' => 'cats#destroy'
  patch '/cats/:id' => 'cats#update'
end

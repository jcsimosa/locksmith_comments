Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :cars
  resources :comments

  get '/all', to: "cars#all"

  get '/comments', to: 'comments#show'
  post '/create_comment', to: 'comments#create_comments'
  # Defines the root path route ("/")
  # root "articles#index"
end

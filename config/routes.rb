Rails.application.routes.draw do

  resources :favorites

  resources :businesses

  resources :users

  resources :sessions, only: [:create]

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"

  get "/auth", to: "users#show"

  #get "/me", to: "users#me"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
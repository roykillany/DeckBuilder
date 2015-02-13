Rails.application.routes.draw do
  root to: "site#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create]
    resource :session, only: [:show, :create, :destroy]
  end
end

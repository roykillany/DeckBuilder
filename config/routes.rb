Rails.application.routes.draw do
  root to: "site#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :show, :create] do
      resources :decks, only: [:index, :show, :create, :update, :destroy] do
        resources :cards, only: [:create, :show, :destroy]
      end
    end
    resource :session, only: [:show, :create, :destroy]
  end
end

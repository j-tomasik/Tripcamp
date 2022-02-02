Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    
    resources :users, only: [:create, :show, :index] do 
      resources :bookings, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :spots, only: [:index, :show, :create] do
        resources :reviews, only: [:create, :show, :index, :update, :destroy]
      end

      resources :reviews, only: [:index, :create, :update, :destroy]
      resources :bookings, only:[:index, :show, :create, :destroy]
  end

  root to: "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

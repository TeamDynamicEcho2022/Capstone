Rails.application.routes.draw do
 

  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){request.format.html?}
  root 'home#index'

  resources :users do
    resources :medications
  end

end


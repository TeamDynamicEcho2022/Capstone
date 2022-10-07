Rails.application.routes.draw do
  resources :users do
    resources :medications
  end

  devise_for :users
  get '*path', to: 'home#index', constraints: ->(request){request.format.html?}
  root 'home#index'
end


# Controller#Action
# user_medications GET    /users/:user_id/medications(.:format)                                                             medications#index
#                  POST   /users/:user_id/medications(.:format)                                                             medications#create
# new_user_medication GET    /users/:user_id/medications/new(.:format)                                                         medications#new
# edit_user_medication GET    /users/:user_id/medications/:id/edit(.:format)                                                    medications#edit
#  user_medication GET    /users/:user_id/medications/:id(.:format)                                                         medications#show
#                  PATCH  /users/:user_id/medications/:id(.:format)                                                         medications#update
#                  PUT    /users/:user_id/medications/:id(.:format)                                                         medications#update
#                  DELETE /users/:user_id/medications/:id(.:format)                                                         medications#destroy
#            users GET    /users(.:format)                                                                                  users#index
#                  POST   /users(.:format)                                                                                  users#create
#         new_user GET    /users/new(.:format)                                                                              users#new
#        edit_user GET    /users/:id/edit(.:format)                                                                         users#edit
#             user GET    /users/:id(.:format)                                                                              users#show
#                  PATCH  /users/:id(.:format)                                                                              users#update
#                  PUT    /users/:id(.:format)                                                                              users#update
#                  DELETE /users/:id(.:format)                                                                              users#destroy
# new_user_session GET    /users/sign_in(.:format)                                                                          devise/sessions#new
#     user_session POST   /users/sign_in(.:format)                                                                          devise/sessions#create
# destroy_user_session GET    /users/sign_out(.:format)                                                                         devise/sessions#destroy
# new_user_password GET    /users/password/new(.:format)                                                                     devise/passwords#new
# edit_user_password GET    /users/password/edit(.:format)                                                                    devise/passwords#edit
#    user_password PATCH  /users/password(.:format)                                                                         devise/passwords#update
#                  PUT    /users/password(.:format)                                                                         devise/passwords#update
#                  POST   /users/password(.:format)                                                                         devise/passwords#create
# cancel_user_registration GET    /users/cancel(.:format)                                                                           devise/registrations#cancel
# new_user_registration GET    /users/sign_up(.:format)                                                                          devise/registrations#new
# edit_user_registration GET    /users/edit(.:format)                                                                             devise/registrations#edit
# user_registration PATCH  /users(.:format)                                                                                  devise/registrations#update
#                  PUT    /users(.:format)                                                                                  devise/registrations#update
#                  DELETE /users(.:format)                                                                                  devise/registrations#destroy
#                  POST   /users(.:format)                                                                                  devise/registrations#create
#                  GET    /*path(.:format)                                                                                  home#index
#             root GET    /                                                                                                 home#index

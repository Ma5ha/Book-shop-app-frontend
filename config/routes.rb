Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :books
  resources :cart , :list
  get 'book', action: :show, controller: 'books'
  get 'mycart', action: :show , controller:'cart'
get 'profile', action: :show, controller: 'users'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

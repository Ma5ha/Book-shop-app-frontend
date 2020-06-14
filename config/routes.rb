Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  resources :books
  resources :cart 
  resources :list
  get 'book', action: :show, controller: 'books'
  get 'mycart', action: :show , controller:'cart'
get 'profile', action: :show, controller: 'users'
get 'myLists', action: :show, controller: 'list'
get 'top5Books', action: :top5Books, controller: 'books'
#delete 'delete', action: :destroy, controller: 'list'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

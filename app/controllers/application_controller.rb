class ApplicationController < ActionController::API
    include DeviseTokenAuth::Concerns::SetUserByToken
   #include  Devise::SessionsController#create

end

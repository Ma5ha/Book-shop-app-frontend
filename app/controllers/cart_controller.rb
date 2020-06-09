class CartController < ApplicationController
 before_action :authenticate_user!
    def index
      
        
    end
    def create
         @user= current_user
         @cart= @user.carts.create(book_params)

         render json: @cart
        
    end
    def show
        @user= current_user
        @cart= @user.books

        render json: @cart
        
    end
    private

    def book_params
        params.permit(cart:[:book_id])
        .require(:cart)
    end

end

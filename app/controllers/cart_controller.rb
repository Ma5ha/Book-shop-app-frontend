class CartController < ApplicationController
 before_action :authenticate_user!
    def index
      
        
    end
    def create
         @user= current_user
          @user.carts.create(book_id:params[:book_id])
           
    end
    def show
        @user= current_user
        @cart= @user.books

        render json: @cart
        
    end

end

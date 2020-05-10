class CartController < ApplicationController
    def index
        
    end
    def create
        
       Cart.create(book_id:params[:book_id],user_id:params[:user_id])
    end
    
    def show
        @user =User.find(params[:id])
        @book= @user.books
        render json: @book
    end

end

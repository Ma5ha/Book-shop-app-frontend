class BooksController < ApplicationController
    def index
        @books = Book.all
        
      
            render json: @books 
            
            
        
    
        
    end
    def show
        @book = Book.find_by(id:params[:id])

        render json: @book
    end
    def top5Books
        @book = Book.find([1,5,12,7])
        render json: @book
    end
end

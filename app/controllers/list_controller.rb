class ListController < ApplicationController
    before_action :authenticate_user!
    def index
        @list= current_user.lists
      #@list= User.first.lists
        render json: @list
    end
    def show

        
       

    end

    def create
        
       @list= current_user.lists.create(name:params[:list][:name])
        


        render json: @list
    end
    def destroy
        @list=List.find(id:params[:id])
        @list.destroy

    end
end

class ListController < ApplicationController
   before_action :authenticate_user!
    def index
        
        @list= current_user.lists
      #@list= User.first.lists
       # @myLists=[{name: 'Brought books', id:'mycart'}].concat(@list)
        render json: @list
    end
    def show

        
       

    end

    def create
        
       @list= current_user.lists.create(name:params[:list][:name])
        


        render json: @list
    end
    def destroy
        @list=current_user.lists.find(params[:id])
        @list.destroy

    end
end

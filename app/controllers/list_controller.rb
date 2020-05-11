class ListController < ApplicationController
    def show

        @user= User.find(params[:id])
        @list=@user.lists
        render json: @list

    end

    def create
        @user=User.find(params[:id])
       @list=@user.lists.create(name:params[:name])
        


        render json: @list
    end
end

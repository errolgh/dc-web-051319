class FavoritesController < ApplicationController

  def new
    if get_current_user
        redirect_to login_path
    end
    @snacks = Snack.all
  end

  def create
    snack_ids = params[:snack_ids] # [1, 4, 5,]
    snack_ids.each do |id|
        snack = Snack.find(id)
        if !get_current_user.snacks.include?(snack)
            get_current_user.snacks << snack
        end
    end
    redirect_to snacks_path
  end
end

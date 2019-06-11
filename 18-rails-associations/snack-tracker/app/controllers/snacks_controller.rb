class SnacksController < ApplicationController
  
  before_action :find_snack, only: [:show, :edit, :update, :destroy]

  def favorite_snacks

    render :favorite
  end

  def index
    if params[:retailer_id]
      retailer = Retailer.find(params[:retailer_id])
      @snacks = retailer.snacks
    else
      @snacks = Snack.all
    end
    # render :index
  end

  def show
  end

  def new
    @snack = Snack.new
    @submit_text = "Make a new snack"
  end

  def create
    snack = Snack.create(snack_params)
    redirect_to snack
  end

  def edit # get request
    @submit_text = "Fix This Snack"
  end

  def update # put/patch request
    @snack.update(snack_params)
    redirect_to @snack
  end

  def destroy
    @snack.destroy
    redirect_to snacks_path
  end

  private

  def find_snack
    @snack = Snack.find(params[:id])
  end

  def snack_params
    params.require(:snack).permit(:name, :calories, :deliciousness, :retailer_id)

  end
end

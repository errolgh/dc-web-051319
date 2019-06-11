class SnacksController < ApplicationController
  
  before_action :find_snack, only: [:show, :edit, :update, :destroy]

  def index
    @snacks = Snack.all
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
    params.require(:snack).permit(:name, :calories, :deliciousness)

  end
end

class SnacksController < ApplicationController
  
  before_action :find_snack, only: [:show, :edit, :update, :destroy]
  before_action :authorized, except: [:index, :show]

  def favorite_snacks
    render :favorite
  end

  def index
    if session[:user_id]
      @user = User.find(session[:user_id])
      @snacks = @user.snacks
    else
      @snacks = Snack.all
    end
  end

  def show
  end

  def new
    @snack = Snack.new
    @submit_text = "Make a new snack"
  end

  def create
    @snack = Snack.new(snack_params)
    if @snack.valid?
      @snack.save
      redirect_to snack_path(@snack)
    else
      render :new
    end
  end

  def edit # get request
    @submit_text = "Fix This Snack"
  end

  def update # put/patch request
    if @snack.valid?
      @snack.update(snack_params)
      redirect_to @snack
    else
      render :edit
    end
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

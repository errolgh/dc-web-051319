class CatsController < ApplicationController
  def index
    render json: CatSerializer.new(Cat.all)
  end

  def show
    render json: Cat.find(params[:id]).to_json(
      except: [:created_at, :updated_at]
    )
  end

  def create
    #want to create new cat and return that cat back to client
    #TODO: check to make sure name doesn't already exist
    new_cat = Cat.create(cat_params)
    render json: new_cat.to_json(default_format)
  end

  def destroy
    #want to remove the cat with id, and send back cat
    Cat.find(params[:id]).destroy
  end

  def update
    #want to update the cat with id, and send back cat
    Cat.find(params[:id]).update(cat_params)
    render json: Cat.find(params[:id]).to_json(default_format)
  end

  private
  def cat_params
    params.require(:cat).permit(:name, :breed, :image)
  end

  def default_format
    {
      :include => {
        :hobbies => {
          except: [:created_at, :updated_at]
        }},
      :except => [:created_at, :updated_at]
      }
  end
end

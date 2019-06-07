class GnomesController < ApplicationController
  def index
    @gnomes = Gnome.all
  end

  def show
    render 'dinosaur'
  end


end

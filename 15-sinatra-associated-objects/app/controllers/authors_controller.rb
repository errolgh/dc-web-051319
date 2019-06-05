class AuthorsController < Sinatra::Base

    set :views, "app/views/authors"

    get "/authors" do 
        @authors = Author.all.sort_by {|author| author.name}
        erb :index
    end

    get "/authors/:id" do 
        @author = Author.find(params[:id])
        erb :show
    end

end
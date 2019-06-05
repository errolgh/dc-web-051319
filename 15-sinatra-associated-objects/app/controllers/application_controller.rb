require 'date'

class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    get "/" do 
        @dayname = Date.today.strftime('%A')
        @count = 27
        erb :home
    end

    get "/books" do
        @books = Book.all
        erb :index
    end

    post "/books" do
        author = params["author"]
        title = params["title"]
        snippet = params["snippet"]
        book = Book.create(author: author, title: title, snippet: snippet)
        redirect "books/#{book.id}"
    end

    get "/books/new" do 
        # return empty form for creating book
        erb :new
    end

    get "/books/:id" do
        id = params[:id]
        @book = Book.find(id)
        erb :show
    end

    get "/books/:id/edit" do
        id = params[:id]
        @book = Book.find(id)
        erb :edit
    end

    put "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        @book.update(title: params[:title],
                     author: params[:author],
                     snippet: params[:snippet])
        redirect "books/#{@book.id}"
    end

    delete "/books/:id" do 
        id = params[:id]
        @book = Book.find(id)
        @book.destroy
        redirect "/books"
    end

end

class BooksController < Sinatra::Base

    set :views, "app/views/books"
    set :method_override, true

    get "/books" do
        @books = Book.all
        erb :index
    end

    post "/books" do
        # creates a new book
        author_id = params["author"]
        author = Author.find(author_id)
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
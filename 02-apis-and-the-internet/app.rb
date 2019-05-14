require 'rest-client'
require 'json'
require 'pry'

GOOGLE_BOOKS_API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?q="

def welcome_user
    # welcome user
    puts "Welcome to our Book Searcher!"
end

def get_search_terms
    # ask user for input about search terms
    puts "What would you like to search for?"
    search_terms = gets.chomp
    puts "You searched for #{search_terms}"
    return search_terms
end

def build_url(search_terms)
    return GOOGLE_BOOKS_API_BASE_URL + search_terms
end

def get_response_from_google(url)
    # make a request to the Google Books API
    response = RestClient.get(url)
    return JSON.parse(response.body)
end

def parse_book_info(response)
    # get authors and titles for first 10 books on that subject
    first_ten = response["items"][0..10]
    first_ten.map do |book_info|
        {title: book_info["volumeInfo"]["title"],
         authors: parse_authors(book_info["volumeInfo"]["authors"])}
    end
end

def display_book_info(book)
    # prints authors and title of book
    puts "****************"
    puts "#{book[:title]} by #{book[:authors]}"
end


def parse_authors(author_array)
    author_array ||= ["Unknown"]
    return author_array.join(" & ")
end

def main
    welcome_user
    search_terms = get_search_terms
    url = build_url(search_terms)
    response = get_response_from_google(url)
    book_hashes = parse_book_info(response)
    book_hashes.each do |book|
        display_book_info(book)
    end
end

main

# display author and title of those books

class Author < ActiveRecord::Base
    
    def write_a_book
        puts "I am writing another novel!"
    end
end
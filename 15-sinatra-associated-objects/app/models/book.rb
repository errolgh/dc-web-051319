class Book < ActiveRecord::Base

    belongs_to :author
    # def get_author_first_name
    #     return author.first_name
    # end
    
end

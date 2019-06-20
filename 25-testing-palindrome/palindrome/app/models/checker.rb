class Checker < ApplicationRecord

    def is_palindrome?
        return self.word.reverse == self.word 
    end
    
end

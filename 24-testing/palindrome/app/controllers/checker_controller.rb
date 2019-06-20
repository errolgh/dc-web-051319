class CheckerController < ApplicationController

    def welcome

    end

    def check
        checker = Checker.new(word: params[:word])
        @word = checker.word
        @is_palindrome = checker.is_palindrome?
        render :results
    end
end

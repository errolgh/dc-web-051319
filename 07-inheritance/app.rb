require 'pry'

# puts "hi".methods

class Object

    def frozen?
        puts "let it go"
    end

    def trust

    end


end
class Thing


    def my_method
    end
end

x = Thing.new

puts x.methods
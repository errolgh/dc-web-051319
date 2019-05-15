# ella = {name: "Ella", color: "black", floofiness: 10}

# # puts ella[:name]

# # lexi = {name: "Lexi", colur: "orange", floofiness: 3}

# # puts lexi["color"]

# ella[:age] = 17

# print ella

class Cat

    # attr_reader :color, :name, :number_of_legs
    # attr_writer :color, :name, :number_of_legs
    attr_accessor :color, :name, :number_of_legs
    attr_writer :floofiness
    attr_reader :species

    def initialize(name, floofiness, number_of_legs=4)
        @name = name 
        @floofiness = floofiness
        @number_of_legs = number_of_legs
        @species = "feline"
    end

    # def color=(color)
    #     @color = color
    # end

    # def color 
    #     @color
    # end

    # def name=(new_name)
    #     # setter
    #     @name = new_name # instance variable
    # end

    # def name
    #     # getter
    #     return @name
    # end

    # def floofiness=(floofiness)
    #     @floofiness = floofiness
    # end

    def floofiness
        if @floofiness > 6
            return "I am a very floofy kitty"
        else
            return "I am not so floofy, but still better than a dog."
        end
    end

    # def number_of_legs=(num)
    #     @number_of_legs = num 
    # end

    # def number_of_legs
    #     @number_of_legs
    # end

    def meow
        "Meow, I am a beautiful kitty"
    end

    def is_beautiful?
        return true
    end

    def introduce
        "Hi I am a beautiful kitty named #{@name}"
    end

end

ella = Cat.new("Ella", 10)

puts ella.name
# puts ella.floofiness
# puts ella.number_of_legs
puts ella.introduce
# lexi = Cat.new("Lexi", 3, 3)

# puts lexi.name
# puts lexi.number_of_legs

# socks = Cat.new

# ella.color = "black"
# puts ella.color

puts ella.species
# ella.species=("canine")
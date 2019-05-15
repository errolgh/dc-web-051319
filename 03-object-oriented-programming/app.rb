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
    attr_writer :floofiness # ella.floofiness=100
    # attr_reader :species # ella.species >> "feline"

    @@all = [] # class variable 
    @@species = "feline"

    def initialize(name, floofiness, number_of_legs=4)
        @name = name 
        @floofiness = floofiness
        @number_of_legs = number_of_legs
        @@all << self
        # send an email to my mom
        # set up my DVR to record the new 90210
    end

    def self.species 
        @@species
    end

    def self.all
        @@all 
    end

    def self.introduce_all_cats
        # iterate over all cats
        Cat.all.each do |kitty|
            # call their introduce method
            puts kitty.introduce 
        end
    end

    def say_species
        "I am a #{Cat.species}"
    end

    def self.cuteness
        "All cats are adorable"
    end

    def floofiness
        if @floofiness > 6
            return "I am a very floofy kitty"
        else
            return "I am not so floofy, but still better than a dog."
        end
    end

    # attr_reader :name
    # def name
    #     @name
    # end

    def meow
        "Meow, I am a beautiful kitty"
    end

    def is_beautiful?
        return true
    end

    def introduce
        "Hi I am a beautiful kitty named #{self.name} & #{self.floofiness}"
    end


end
puts "No cats :("
print Cat.all
puts "\n\n"

ella = Cat.new("Ella", 10)
puts "Just Ella"
print Cat.all
puts "\n\n"
puts "Ella and Lexi"
lexi = Cat.new("Lexi", 3, 3)
print Cat.all
puts "\n\n"

# puts ella.name
# puts ella.floofiness
# puts ella.number_of_legs
# puts ella.introduce

# puts lexi.name
# puts lexi.number_of_legs

socks = Cat.new("Socks", 7)

# ella.color = "black"
# puts ella.color

# puts ella.say_species
# ella.species=("canine")

# [<Cat Ella>, <Cat Lexi>]

Cat.introduce_all_cats

puts ella.test_outside_variable
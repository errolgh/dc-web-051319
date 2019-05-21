class Animal

    attr_reader :name

    def initialize(name)
        @name = name
    end

    def walk
        puts "I am going for a walk (Animal class method)"
    end

    def speak
        puts "Hello I am an adorable animal (Animal-class instance method)"
    end

    def is_carbon_based?
        return true
    end

end

module Swimmable

    def can_swim?
        return true
    end

    def swim
        puts "Rub a dub dub"
    end
end

class Mammal < Animal

    def speak
        puts "I am a mammal"
        super()
    end

    def is_warm_blooded?
        return true
    end
end

class Dog < Mammal

    attr_reader :species
    include Swimmable 

    DOG_YEARS = 7

    def initialize(name, age)
        super(name)
        @age = age
        @species = "canine"
    end

    def age
        puts "I am #{@age} in dog years"
        puts "I am #{self.human_years} in human_years"
    end

    def walk
        puts "I need to go for a walk (Dog-class instance method)"
    end

    def is_carbon_based?
        return "I'm not telling"
    end

    def speak
        puts "I am an adorable puppy"
        super()
    end

    private

    def human_years
        @age * DOG_YEARS
    end

end

class Fish < Animal 
    include Swimmable 


end

class Hippo < Mammal

end

class Puppy < Dog 

end
frankie = Puppy.new("Frankie", 6)

# harvey.swim

# phelps = Swimmable.new
puts frankie.age


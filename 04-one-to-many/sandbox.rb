class School

    attr_reader :name, :instructors

    def initialize(name)
        @name = name
        @instructors = []
    end

    def add_instructor(instructor)
        @instructors << instructor
    end

    def print_favorite_foods
        foods = self.instructors.map {|instructor| instructor.favorite_food}
        puts foods.join(" & ")
    end

    # def edit_instructor(original_instructor, new_name)
    #     # get the specific instructor
    #     index = self.instructors.index(original_instructor)
    #     self.instructors[index] = new_name
    # end
end

class Instructor

    attr_accessor :name, :favorite_food

    def initialize(name, favorite_food)
        @name = name
        @favorite_food = favorite_food
    end


end

flatiron = School.new("Flatiron")

puts flatiron.name == "Flatiron"
paul = Instructor.new("Paul", "pizza")
joseph = Instructor.new("Joseph", "broccoli")

flatiron.add_instructor(paul)
flatiron.add_instructor(joseph)

flatiron.print_favorite_foods

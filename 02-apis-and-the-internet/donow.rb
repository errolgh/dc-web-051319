###################################################################
# If you haven't already, clone down the lecture repo             #
# git clone https://github.com/learn-co-students/dc-web-051319    #
# (this will be the repo for your entire time at Flatiron)        #  
###################################################################


# For each of the following examples, write two methods that solve the 
# problem:  One that uses `.each` and one that uses one of the higher level 
# iterator methods

# Remember:

# map/collect:  Returns an array where each value of the original array 
# corresponds to an element in the new array

# find/detect:  Returns the first element for which the statement in the block
# evaluates as True

# select/find_all:  Returns an array of _all_ elements for which the statement in
# the block evaluates as True

nums = (1..20).to_a #creates an array of all numbers from 1-20

# 1.  Create an array of numbers where each new number is three times as big as
# its original number (e.g., [3, 6, 9])

def triple(nums)
    nums.map {|num| num * 3}
end 

# print triple(nums)

# 2.  Find the first number that is divisible by 7

def each_divisible(nums)
    nums.each do |entry|
        if entry % 7 == 0
            return entry
        end
    end
end

def find_divisible(nums)
    return nums.find {|i| i % 7 == 0}
end


# 3.  Find all numbers that are divisible by 7

def find_all_divisible(nums)
    return nums.select {|i| i % 7 == 0}
end

# puts find_all_divisible(nums)

# 4.  Find the first number that is divisible by 7 AND greater than 10

fun_number = nums.find {|x| x % 7 == 0 && x > 10}

# print fun_number * 2

# Bonus:

# 5.  Create an array of the squares (the number times itself) of all numbers
# that are divisible by 7

squares = nums.select do |i| 
    i % 7 == 0
    end.map do |i|
     i * i
 end

print squares
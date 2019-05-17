require "pry"
require_relative "./tweet.rb"
require_relative "./user.rb"
require_relative "./like.rb"

coffee_dad = User.new("Coffee Dad")
tea_uncle = User.new("Tea Uncle")

tweet1 = Tweet.new("I love coffee", coffee_dad)
tweet2 = Tweet.new("Making coffee", coffee_dad)
tweet3 = Tweet.new("I need coffee", coffee_dad)
tweet4 = Tweet.new("Life is a meaningless void", coffee_dad)
tweet5 = Tweet.new("I need tea", tea_uncle)
tweet6 = Tweet.new("I like tea", tea_uncle)
tweet7 = Tweet.new("Life is a wonderous place", tea_uncle)

like1 = coffee_dad.like_tweet(tweet5)
like2 = coffee_dad.like_tweet(tweet6)
like3 = tea_uncle.like_tweet(tweet1)

puts "Can create a like and add to .all"
puts Like.all.include?(like1)

puts "liked_tweets returns all tweets this user has liked"
puts coffee_dad.liked_tweets.include?(tweet5)

# binding.pry
0
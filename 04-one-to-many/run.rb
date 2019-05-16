require_relative "tweet.rb"
require_relative "user.rb"



coffee_dad = User.new("Coffee Dad")

tweet1 = Tweet.new("I need coffee", coffee_dad)

puts "User knows their name"
puts coffee_dad.username == "Coffee Dad"
puts "Tweet knows its body"
puts tweet1.body == "I need coffee"
puts "Tweet knows its user"
puts tweet1.user == coffee_dad
puts "Tweet knows its user's username"
puts tweet1.user.username == "Coffee Dad"
puts "User can post a tweet"
tweet2 = coffee_dad.post_tweet("I need more coffee")
puts tweet2.user == coffee_dad
puts "Tweet.all gets all tweets"
puts Tweet.all.include?(tweet1)

tea_uncle = User.new("Tea Uncle")
tweet3 = tea_uncle.post_tweet("Sipping some tea")
puts "User knows all their tweets"
puts coffee_dad.tweets.include?(tweet1)
puts !coffee_dad.tweets.include?(tweet3)
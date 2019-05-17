class User

    attr_reader :username

    def initialize(username)
        @username = username
    end

    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end

    def post_tweet(text)
        Tweet.new(text, self)
    end

    def like_tweet(tweet)
        # likes tweets
        Like.new(self, tweet)
    end

    def unlike_tweet(tweet)
        # check if the like exists
        like_to_delete = Like.all.find do |like|
            like.tweet == tweet && like.user == self
        end
        # if it does, find the tweet in the like array
        # remove it
        if like_to_delete
            Like.all.delete(like_to_delete)
        # if it doesn't
        else
            puts "You never liked that tweet, dummy."
        end
    end

    def liked_tweets
        # returns all tweets a user has liked

        # first get all the user's likes
        my_likes = Like.all.select do |like|
            like.user == self 
        end

        my_likes.collect do |like|
            like.tweet
        end

    end
end


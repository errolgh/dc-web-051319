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
        Like.new(self, tweet)
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


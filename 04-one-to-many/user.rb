class User

    attr_accessor :username

    def initialize(username)
        @username = username
    end

    # coffee_dad.post_tweet
    def post_tweet(body)
        Tweet.new(body, self)
    end

    def tweets
        # Tweet.all 
    end
end


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
        # returns array of all tweets belonging to user
        Tweet.all.find_all do |tweet|
            tweet.user == self
        end
    end
end


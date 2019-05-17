class Like

    attr_reader :user, :tweet

    @@all = []

    def initialize(user, tweet)
        existing_like = Like.all.find do |like|
            like.tweet == tweet && like.user == user
        end
        if existing_like
            puts "You can't like a tweet more than once"
        else
            @user, @tweet = user, tweet
            @@all << self
        end
    end

    def self.all 
        @@all 
    end

    # def format_date
    #     self.date.format(fake)
    # end
end


class Tweet

    attr_reader :message, :user

    @@all = []

    def initialize(message, user)
        @message, @user = message, user
        @@all << self
    end

    def username
        self.user.username
    end

    def self.all
        @@all
    end

    def likers
        # tweet1.likers returns all users 
        # who have liked tweet1
        my_likers = Like.all.select do |like|
            like.tweet == self
        end
        my_likers.collect do |like|
            like.user 
        end
    end

    def count_likers
        # tweet1.count_likers
        self.likers.uniq.count

    end

end
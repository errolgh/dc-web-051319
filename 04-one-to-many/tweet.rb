class Tweet

    attr_reader :body, :user

    @@all = []

    def initialize(body, user)
        @body = body
        @user = user
        @@all.push(self)
    end

    def self.all 
        @@all 
    end

end
class Tweet

    attr_reader :body, :user

    def initialize(body, user)
        @body = body
        @user = user
    end

end
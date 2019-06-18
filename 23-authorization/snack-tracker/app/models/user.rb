class User < ApplicationRecord
    has_secure_password
    validates :username, presence: :true, uniqueness: true
    has_many :favorites
    has_many :snacks, through: :favorites
end

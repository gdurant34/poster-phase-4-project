class Group < ApplicationRecord
    belongs_to :user
    has_many :posts, dependent: :destroy
    has_many :user_groups, dependent: :destroy
    has_many :users, through: :user_groups, dependent: :destroy
end

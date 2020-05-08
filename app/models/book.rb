class Book < ApplicationRecord
    has_many :cart
    has_many :user, through: :cart

end

class List < ApplicationRecord
  belongs_to :user
  has_many  :containers
  has_many :books, through: :containers
end

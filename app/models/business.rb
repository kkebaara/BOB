class Business < ApplicationRecord
	has_many :favorites, dependent: :destroy
	has_many :users, through: :favorites
	
	validates :name, presence: true
end

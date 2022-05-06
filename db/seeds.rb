# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Business.destroy_all
Favorite.destroy_all

puts "🌱 Seeding spices..."


User.create!([
  {
    "username": "kenneth",
    "password": "12345"
  },
    {
    "username": "john",
    "password": "12345"
  }
])

50.times do
  Business.create(image: Faker::LoremFlickr.image, name: Faker::Company.name, industry: Faker::Company.industry, description: Faker::Lorem.paragraph) 
end

20.times do 
  Favorite.create({ "business_id": Business.all.sample.id, "user_id": User.all.sample.id})
end



puts "✅ Done seeding!"


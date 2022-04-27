# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


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


Business.create([
{
  "name": "Extravagant Services",
  "image": "https://isteam.wsimg.com/ip/d2c79dee-7c56-43af-9a3d-438e010bcb99/IMG_20200919_155412.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1160,h:1547",
  "type": "",
  "description": "they have the best car washes in the world"
  },
  {
  "name": "Nola Voodoo Tavern",
  "image": "https://static.spotapps.co/spots/5d/cd6995fc5c4336adddadfc1d69e8d6/full",
  "type": "",
  "description": "New Orleans-inspired bar located in the historic Cole neighborhood near downtown Denver."
  },
  {
  "name": "Smith+Canon Ice Cream",
  "image": "https://lh3.googleusercontent.com/p/AF1QipPlHi8k2-kCLR7Q_eQmReg8V8LaYDXQWd1xgbyC=w1080-h608-p-no-v0",
  "type": "",
  "description": "Come to Smith + Canon try the new roasted coffee whole beans that are now available at our ice cream shop in Denver!"
  }
])


Favorite.create({
    "business_id": Business.all.sample.id,
    "user_id": User.all.sample.id
  })


puts "✅ Done seeding!"



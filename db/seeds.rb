# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.


User.create({name: 'masha',
email: 'blagmash@gmail.com',
password: 'jelena99',
}
)

 Book.create([{
    title: "Programming TypeScript: Making Your JavaScript Applications Scale",
    author:"Boris Cherny",
    cover: 'https://images-na.ssl-images-amazon.com/images/I/511YUCKEYrL._SX379_BO1,204,203,200_.jpg',
    price:23,
},
{
    title:"Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
    author:"Marijn Haverbeke",
    cover:"https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
    price:21,
},
{
    title:"JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)",
    author:"David Flanagan",
    cover:"https://m.media-amazon.com/images/I/51CxDZt9xWL._SX260_.jpg",
    price:22,
},
{
    title:"CSS: The Definitive Guide: Visual Presentation for the Web",
    author:"Eric A. Meyer",
    cover:"https://images-na.ssl-images-amazon.com/images/I/515X%2BRDM1LL._SX379_BO1,204,203,200_.jpg",
    price:13,
},
{
    title: "Ruby on Rails Tutorial: Learn Web Development with Rails ",
    author: "Michael Hartl",
    cover: "https://images-na.ssl-images-amazon.com/images/I/51YYA-DS3dL._SX379_BO1,204,203,200_.jpg",
    price: 34
  },
  {
    title: "The Self-Taught Programmer: The Definitive Guide to Programming Professionally",
    author: "Cory Althoff",
    cover: "https://m.media-amazon.com/images/I/41HII-0nFEL.jpg",
    price: 45
  },
  {
    title: "Coders at Work: Reflections on the Craft of Programming",
    author: "Peter Seibel",
    cover: "https://images-na.ssl-images-amazon.com/images/I/41y3cY7djoL._SX331_BO1,204,203,200_.jpg",
    price: 23
  },

  {
    title: "Soft Skills: The Software Developer's Life Manual ",
    author: "John Sonmez",
    cover: "https://m.media-amazon.com/images/I/51RYWlY9LrL.jpg",
    price: 0
  },
  {
    title: "Founders at Work: Stories of Startups' Early Days",
    author: "Jessica Livingston",
    cover: "https://m.media-amazon.com/images/I/51nsm1+Ff0L.jpg",
    price: 15
  },
  {
    title: "Hackers & Painters: Big Ideas from the Computer Age",
    author: "Paul Graham ",
    cover: "https://images-na.ssl-images-amazon.com/images/I/510MQ9%2BtuRL._SX321_BO1,204,203,200_.jpg",
    price: 5
  },
  {
    title: "Dealing with Darwin: How Great Companies Innovate at Every Phase of Their Evolution",
    author: "Geoffrey A. Moore",
    cover: 'https://m.media-amazon.com/images/I/514n3k970TL.jpg',
    price: 10

  },
  {
    title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
    author: "Eric Ries",
    cover: "https://m.media-amazon.com/images/I/51N-u8AsmdL.jpg",
    price: 14
  },]
)

Cart.create(
  [{user_id:1,
book_id:2},
])
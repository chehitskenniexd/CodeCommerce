'use strict'

const Promise = require('bluebird');
const db = require('APP/db')
const pUrl = 'http://placehold.it/800x500';

var data = {
  users: [
    { name: 'Swag Master', email: 'Swag@Master.com', addresses: ['5 Hanover Square, New York, NY, 10004'], isAdmin: true, password: 'abcd' },
    { name: 'Sag Mistress', email: 'Sag@Mistress.com', addresses: ['5 Hanover Square, New York, NY, 10004'], isAdmin: false, password: 'efgh' },
    { name: 'Random Man', email: 'Man@Random.com', addresses: ['10 SandOver Pear, New York, NY, 11111'], isAdmin: false, password: 'ijkl' }
  ],

  categories: [
    { name: 'Swag Apparel' },
    { name: 'Swag Kitchenware' },
    { name: 'Swag Code' },
    { name: 'Swag Furniture' },
    { name: 'Station Swagon' },
  ],

  products: [
    { title: 'Swag Shirt', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: 4.20, inventoryQty: 420, photoUrl: 'http://i3.cpcache.com/product/576437440/swag_t.jpg?width=750&height=750&Filters=%5B%7B%22name%22%3A%22crop%22%2C%22value%22%3A%7B%22x%22%3A62.5%2C%22y%22%3A0%2C%22w%22%3A625%2C%22h%22%3A750%7D%2C%22sequence%22%3A1%7D%2C%7B%22name%22%3A%22background%22%2C%22value%22%3A%22F2F2F2%22%2C%22sequence%22%3A2%7D%5D', isDigitalShip: false, user_id: 1, category_id: 1 },
    { title: 'Swag Rice Cooker', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: 42.00, inventoryQty: 1, photoUrl: 'http://4.bp.blogspot.com/-HipZfjtMpp4/V7yq3Z0UDzI/AAAAAAAA6yQ/9p_zeGzS22whqTm8Z3kk5ELVe3j-lQdZgCK4B/s1600/217a380c-0cf1-4755-8b7a-03a20752abe2.jpeg', isDigitalShip: false, user_id: 2, category_id: 2 },
    { title: 'Swag List', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: 0.42, inventoryQty: 10, photoUrl: 'http://faculty.ycp.edu/~dhovemey/spring2011/cs350/lecture/figures/sll.png', isDigitalShip: true, user_id: 3, category_id: 3 },
    { title: 'Swag Couch', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: 4200.00, inventoryQty: 4, photoUrl: 'https://s-media-cache-ak0.pinimg.com/564x/f2/41/f9/f241f97ca3621545b9f2a5211b40a640.jpg', isDigitalShip: false, user_id: 3, category_id: 4 },
    { title: 'THE Swagon', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: 42000.00, inventoryQty: 1, photoUrl: 'http://www.barrett-jackson.com/staging/carlist/items/FullSize/Cars/44141/44141_Side_Profile.jpg', isDigitalShip: false, user_id: 3, category_id: 5 },
    { title: 'Binary Swag Tree', description: 'BST', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', price: 42000000.00, inventoryQty: 84, photoUrl: 'http://www.bonsaiempire.com/great-bonsai-album/acer-bonsai-pall.jpg', isDigitalShip: true, user_id: 3, category_id: 3 },
  ],

  productReviews: [
    { title: 'The swagon is LIT!', description: 'I bought the swagon for my family of four and it did NOT disappoint!', numStars: 4, user_id: 3, product_id: 5 },
    { title: 'The swag shirt is not it!', description: 'This shirt does not run true to size, mine was three sizes too large!', numStars: 2, user_id: 1, product_id: 1 },
    { title: 'The name says it all.', description: 'The swag shirt is just that.', numStars: 4, user_id: 3, product_id: 1 },
    { title: 'Binary swag tree unbalanced.', description: 'There were way too many leaves on the left side of this tree!', numStars: 2, user_id: 2, product_id: 6 },
    { title: 'THAT IS WHAT I AM TALKING ABOUT', description: 'I need a bag for all this swag -- I love the swagon!', numStars: 5, user_id: 1, product_id: 5 },
    { title: 'This code is far from swag.', description: 'Whoever wrote this code has limited sense in their head!', numStars: 1, user_id: 2, product_id: 3 }
  ],

  orders: [
    { status: 'complete', address: '5 Hanover Square, New York, NY, 10004', user_id: 1 }
  ],

  order_Product: [
    {quantity: 5, subTotal: 21.00, order_id: 1, product_id: 1},
    {quantity: 3, subTotal: 1.26, order_id: 1, product_id: 3},
    {quantity: 1, subTotal: 42000.00, order_id: 1, product_id: 5},
  ]
}

const seedUsers = () => db.Promise.map(data.users, user => db.model('users').create(user));
const seedProducts = () => db.Promise.map(data.products, product => db.model('product').create(product));
const seedProductReviews = () => db.Promise.map(data.productReviews, productReview => db.model('productReview').create(productReview));
const seedCategories = () => db.Promise.map(data.categories, category => db.model('category').create(category));
const seedOrders = () => db.Promise.map(data.orders, order => db.model('order').create(order));
const seedOrder_Product = () => db.Promise.map(data.order_Product, order_Product => db.model('order_product').create(order_Product));
//const seedCart = () => {}

db.didSync
  .then(() => db.sync({ force: true }))
  .then(seedUsers)
  .then(seedCategories)
  .then(seedProducts)
  .then(seedProductReviews)
  .then(seedOrders)
  .then(seedOrder_Product)
  .then(info => console.log(`Seeding has been completed!`))
  .catch(error => console.error(error))
  .finally(() => db.close())

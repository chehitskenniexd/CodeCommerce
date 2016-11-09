'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')
const Category = db.model('category');

const customCategoryRoutes = require('express').Router()

// Custom routes go here.
customCategoryRoutes.get('/:id', (req, res, next) => {
  Category.findById(req.params.id, {
    include: [
      {all: true}
    ]
  })
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => console.log('Error getting category!', err));
})

module.exports = customCategoryRoutes

// Epilogue will automatically create standard RESTful routes
const category = epilogue.resource({
  model: db.model('category'),
  endpoints: ['/category', '/category/:id'],
  actions: ['list', 'delete']
})

// find all users
category.list = (req, res, context) => {
  res.status(201).json(context)
}

// get details about one user
// category.read = (req, res, context) => {
//   const categoryId = req.params.id;
//   aCategory = context.find(category => category.id === categoryId);
//   res.status(201).json(aCategory);
// }

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
category.delete.auth(mustBeLoggedIn)
category.delete.auth(selfOnly)
//category.list.auth(forbidden)
//category.read.auth(mustBeLoggedIn)

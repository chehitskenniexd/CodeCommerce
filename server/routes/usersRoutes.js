'use strict'

const epilogue = require('../epilogue')
const db = require('APP/db')

const customUserRoutes = require('express').Router()

const Users = db.model('users');
// Custom routes go here.
customUserRoutes.post('/', (req, res, next) => {
  Users.create(req.body)
    .then(resp => {
      res.json(resp);
    })
    .catch(err => console.error(err));
});

customUserRoutes.get('/:id', (req, res, next) => {
  Users.findById(req.params.id, {
    include: { all: true }
  })
    .then(users => res.json(users))
    .catch(err => console.log('Failed to get user info', err));
})

module.exports = customUserRoutes

// Epilogue will automatically create standard RESTful routes
const users = epilogue.resource({
  model: db.model('users'),
  endpoints: ['/users', '/users/:id'],
  actions: ['list', 'delete']
})

// get details about one user
// users.read = (req, res, context) => {
//   const userId = req.params.id;
//   const user = context.find(user => user.id === userId);
//   res.status(201).json(user);
// }

users.update = (req, res, context) => {
  res.json(context)
}

users.create = (req, res, context) => {
  res.json(context);
}

const {mustBeLoggedIn, selfOnly, forbidden} = epilogue.filters
users.delete.auth(mustBeLoggedIn)
users.delete.auth(selfOnly)
//users.list.auth(forbidden)
//users.read.auth(mustBeLoggedIn)

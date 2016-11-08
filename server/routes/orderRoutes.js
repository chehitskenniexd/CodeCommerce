'use strict'

const epilogue = require('../epilogue');
const db = require('APP/db');

const customOrderRoutes = require('express').Router();

customOrderRoutes.post('/sendConfirmEmail', (req, res, next) => {

  var helper = require('sendgrid').mail
  var from_email = new helper.Email('swagStore15@gmail.com');
  var to_email = new helper.Email('blong8334@gmail.com');
  var subject = 'Your Order Confirmation!!!!!!';
  var content = new helper.Content('text/plain', JSON.stringify(req.body));
  var mail = new helper.Mail(from_email, subject, to_email, content);
  var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON(),
  });

  sg.API(request, function(error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    res.end();
  });
});
customOrderRoutes.post('/', (req, res, next) => {
  db.model('order').create(req.body)
    .then(resp => {
      res.json(resp)
    })
    .catch(err => console.log(err))
});
customOrderRoutes.post('/orderProduct', (req, res, next) => {
  db.model('order_product').bulkCreate(req.body)
    .then(resp => {
      res.json(resp)
    })
    .catch(err => console.log(err))
});
// Insert custom routes here if needed
customOrderRoutes.get('/', (req, res, next) => {
    db.model('order').findAll({
        include: [
            {all: true}
        ]
    })
    .then(orders => res.status(201).json(orders))
    .catch(err => console.log('Invalid db search for orders!', err));
})

customOrderRoutes.get('/:id', (req, res, next) => {
    db.model('order').findAll({
        where: {
            id: req.params.id
        },
        include: [
            {all: true}
        ]
    })
    .then(orders => res.status(201).json(orders))
    .catch(err => console.log('Invalid db search for orders!', err));
})

module.exports = customOrderRoutes;

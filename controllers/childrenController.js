const db = require('../models');

module.exports = {

  findAll: function (req, res) {
    console.log('fetching data...')
      db.children
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },

  findById: function (req, res) {
      db.children
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },

  create: function (req, res) {
      db.children
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },

  update: function (req, res) {
      db.children
          .findOneAndUpdate({ _id: req.params.id },
              {
                  "name": req.body.name
              },
          )
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  },

  remove: function (req, res) {
      db.children
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
  }
}

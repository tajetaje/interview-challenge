const express = require('express');
const router = express.Router();
const { State } = require('../models');

// TODO: Create a GET '/states' route that returns data from your State model
// Note: The functions to retrieve data from the database using sequelize is asyncronous, so it will look something like this:
// var people = await Person.doSomething();

router.get('/states', async (req, res) => {
    res.send(await State.findAll())
  });

module.exports = router;

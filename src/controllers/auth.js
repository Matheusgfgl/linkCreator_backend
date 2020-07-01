const express = require('express');
const {Account} = require('../models')

const bcypt = require('bcypt');

const router = express.Router();

router.get('/sign-in', (req, res) => {

  return res.json('Sign in');
});

router.get('/sign-up', async (req, res) => {

  const email = 'matheusgfgl@gmail.com';
  const password = '123'

  const hash = bcypt.hashSync(password, 8)

   const result = await Account.create({email, hash})
  console.log(result);
   return res.json('sign-in');

});

module.exports = router;

const express = require('express');
const {Account} = require('../models')

const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/sign-in', (req, res) => {

  return res.json('Sign in');
});

router.post('/sign-up', async (req, res) => {

  const { email, password } = req.body;

  const account= await Account.findOne({where: { email}});

  if(account) return res.json('Acount Alredy exists')

  
  const hash = bcrypt.hashSync(password, 8)
  const newAccount = await Account.create({email, password: hash})
  
   return res.json(newAccount);
});

module.exports = router;

const express = require('express');
const {Account} = require('../models')
const {accountSignUp, accountSignIn} = require('../validators/acount')
const bcrypt = require('bcrypt');
const {generateJwt, generateRefreshJwt} = require('../helper/jwt')

const router = express.Router();
const saltRounds = 8;

router.post('/sign-in', accountSignIn, async (req, res) => {

  const { email, password } = req.body;

  const account = await Account.findOne({where: { email}});
  if(!account) res.json('Email invalido, por favor digite o email correto')

  const match = account ? bcrypt.compareSync(password, account.password) : null;
  if(!match) return res.json('Senha invalida, por favor digite a senha correta')

  const hash = bcrypt.hashSync(password, saltRounds)
  return res.json('Login efetuado com sucesso');

});

router.post('/sign-up', accountSignUp, async (req, res) => {

  const { email, password, jwtVersion } = req.body;

  const account = await Account.findOne({where: { email}});

  if(account){
    return res.json('Acount Alredy exists');
  }
  
  const hash = bcrypt.hashSync(password, saltRounds)
  const newAccount = await Account.create({ email, password: hash, jwtVersion })
  
  const token = generateJwt({id: newAccount.id})
  const refreshToken = generateRefreshJwt({id: newAccount.id})

   return res.json({newAccount, token});
});
  
module.exports = router;

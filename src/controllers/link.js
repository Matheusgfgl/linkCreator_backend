const express = require('express');
const { Link } = require('../models')
const router = express.Router();


router.get('/', async (req, res) => {
  const accountId = 2;
  const links = await Link.findAll({where: {accountId}})

  return res.json(links);
  
})

router.get('/:id', async (req, res) => {

  const accountId = 2;
  const {id} = req.params;
  const link = await Link.findOne({where: {id, accountId}})
  if(!link) return res.json('Link nao encontrado')

  return res.json(link);
  
})
router.post('/', async (req, res) => {

  const accountId = 2 //req.id
  const {label, url, isSocial} = req.body;

  const image = 'www.googgle.com/image.jpg';

  const link = await Link.create({label, url,  isSocial, image,  accountId});
  return res.json(link);
  
})
router.put('/:id', async (req, res) => {

  const accountId = 2;
  const {id} = req.params;
  const {label, url, isSocial} = req.body;
  const fields = ['label', 'url', 'isSocial'];

  const link = await Link.findOne({where: {id, accountId}})
  if(!link) return res.json('Link nao encontrado')

  fields.map(fieldName => {
      const newValue = req.body[fieldName]
      if(newValue) link[fieldName] = newValue
  });

  await link.save();
  return res.json(link);
  
})

module.exports = router;
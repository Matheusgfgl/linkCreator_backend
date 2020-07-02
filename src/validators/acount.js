const Joi = require('@hapi/joi')

const accountSignUp = (req, res, next) => {

  const {email, password, password_confirmation} = req.body;
  
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().pattern( new RegExp('^[a-zA-Z-0-9]{3,20}$')),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required()
  })

  const {error} = schema.validate({email, password, password_confirmation}, {abortEarly: false} )

  if(error){
    return res.json(`Bad request  ${error}`);
  }
  next();


}

module.exports = {accountSignUp}
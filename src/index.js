const express = require('express')
const db = require('./models')

const authController = require('./controllers/auth')
const app = express();


app.use('/auth', authController);

db.sequelize.sync().then(() => {
  
  app.listen(3000, () => {
    console.log('listening on port 3000')
  });

})

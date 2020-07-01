const express = require('express')

const authController = require('./controllers/auth')
const app = express();


app.use('/auth', authController);

app.listen(3000, () => {
  console.log('listening on port 3000')
});
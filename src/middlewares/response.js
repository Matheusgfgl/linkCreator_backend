
const response = (req, res, next) => {

  res.jsonOK = function() {
   return res.json('JSON OK')
  }
  next();
}
module.exports= response;
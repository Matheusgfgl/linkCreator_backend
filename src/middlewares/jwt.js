const {verifyJwt} = require('../helper/jwt')

const checkJwt = (req, res, next) => {

  const {url} = req;
  const excludedPaths = ['/auth/sign-in','/auth/sign-up' ];

  const isExcluded = !!excludedPaths.find((p) => p.startsWith(url))

  if(isExcluded) return next();
  
  let token = req.headers['authorization'];
 
  //token = token ? token.slice(7, token.length) : null;
    if(!token){
      return res.json('Token invalido')
    }

    try{
      const decoded = verifyJwt(token)
      req.accountId = decoded.id;
      next();
    }catch{
      return res.json('Token invalido')
    }


};
module.exports = checkJwt
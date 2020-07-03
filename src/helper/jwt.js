require('dotenv').config();
const jwt = require('jsonwebtoken')

const tokenPrivate = process.env.JWT_TOKEN_PRIVATE
const refreshTokenPivate = process.env.JWT_REFRESH_TOKEN_PRIVATE

const options = {expiresIn: '30 minutes'}
const refreshOptions = {expiresIn: '30 days'}

const generateJwt = (payload) => {
  return jwt.sign(payload, tokenPrivate, options)
};

const generateRefreshJwt = (payload) => {
  return jwt.sign(payload, refreshTokenPivate, refreshOptions)
};

const verifyJwt = (token) => {
  return jwt.verify(token, tokenPrivate);
}

const verifyRefreshJwt = (token) => {
  return jwt.verify(token, refreshTokenPivate);
}

module.exports = {generateJwt, verifyJwt, generateRefreshJwt,verifyRefreshJwt}
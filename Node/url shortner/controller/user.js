const User = require("../models/userSchema.js");
const {v4:uuidv4} = require('uuid')
const {setUser}=require('../service/auth.js');
async function handelUserSignup(req, res) {
  const { username, email, password } = req.body;

  await User.create({
    username: username,
    email: email,
    password: password,
  });
  return res.redirect("/");
}

async function handelUserLogin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({
    email,
    password,
  });
  if(!user) return res.render('login',{
    error:"invalid credentials"
  })
  const sessionId=uuidv4()
    setUser(sessionId, user);
    res.cookie("uid", sessionId)
  return res.redirect("/");
}

module.exports = {
  handelUserSignup,handelUserLogin
};

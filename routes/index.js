var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
const Message = require("../models/message");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const messages = await Message.find();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get("/new", function(req, res, next) {
  res.render('form', { title: "New Message" });
});

router.post("/new", async function(req, res, next) {
  // messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date()});
  const message = new Message({message: req.body.messageText, name: req.body.messageUser, date: new Date()});
  await message.save();
  res.redirect('/');
});

module.exports = router;

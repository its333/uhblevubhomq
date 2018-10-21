
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 1){
    message.channel.send("Usage: !doc {username}");
    return;
  };
  
  var userName = args[0];

  var Options = {
    group: 4433455,
    username: args[0],
    accept: true
  }

  rbx.handleJoinRequest(Options)
  .catch(function(err){
    console.error(err.stack);
    message.channel.send('error occured at handling');
    throw new Error('abort promise chain');
  })
  .then(function (){
      message.channel.send('sucessfully accepted');
  });

}

module.exports.help = {
  name: "doc"
}

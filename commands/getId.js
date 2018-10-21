
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 1){
    message.channel.send("Usage: }getid username");
    return;
  };

  var options = {
    username: args[0],
  }

  rbx.getIdFromUsername(args[0])
  .catch(function (e) {
    console.log(e);
    message.channel.send("Error getting id");
  })
  .then(function (id) {
    if(!id)return;
    console.log(`userId: ${id}`);
    message.channel.send(`userId: ${id}`);
  });

}

module.exports.help = {
  name: "getid"
}

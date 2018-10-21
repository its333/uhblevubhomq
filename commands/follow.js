
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 1){
    message.channel.send("Usage: }follow userid");
    return;
  };

  var options = {
    userId: args[0],
  }

  rbx.follow(args[0])
  .catch(function (e) {
    console.log(e);
    message.channel.send("Error following");
  })
  .then(function (newRole) {
    if(!newRole)return;
    console.log('Successfully followed!')
    message.channel.send('Successfully followed!');
  });

}

module.exports.help = {
  name: "follow"
}

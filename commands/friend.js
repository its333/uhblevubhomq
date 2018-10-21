
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 1){
    message.channel.send("Usage: }friend userid");
    return;
  };

  var options = {
    userId: args[0],
  }

  rbx.sendFriendRequest(args[0])
  .catch(function (e) {
    console.log(e);
    message.channel.send("Error send friend request");
  })
  .then(function (newRole) {
    if(!newRole)return;
    console.log('successfully sent request!')
    message.channel.send('successfully sent request!');
  });

}

module.exports.help = {
  name: "friend"
}

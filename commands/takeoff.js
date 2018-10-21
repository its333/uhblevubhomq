
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 1){
    message.channel.send("Usage: }takeoff assetid");
    return;
  };

  rbx.removeAssetId(args[0])
  .catch(function (e) {
    if (!e instanceof Object) {
      console.log(typeof e);
      message.channel.send("Error taking off asset");
    } else {
        console.log('Successfully took off asset!')
        message.channel.send('Successfully took off asset!');
    }
  })
  .then(function (newRole) {
    if(!newRole)return;
    console.log('Successfully took off asset!')
    message.channel.send('Successfully took off asset!');
  });

}

module.exports.help = {
  name: "takeoff"
}

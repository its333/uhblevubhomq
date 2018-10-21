
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 1){
    message.channel.send("Usage: }wear assetid");
    return;
  };

  rbx.wearAssetId(args[0])
  .catch(function (e) {
    if (!e instanceof Object) {
      console.log(typeof e);
      message.channel.send("Error wearing asset");
    } else {
        console.log('Successfully wear asset!')
        message.channel.send('Successfully wear asset!');
    }
  })
  .then(function (newRole) {
    if(!newRole)return;
    console.log('Successfully wear asset!')
    message.channel.send('Successfully wear asset!');
  });

}

module.exports.help = {
  name: "wear"
}

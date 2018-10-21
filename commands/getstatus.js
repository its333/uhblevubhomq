
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 2 || args[0] != "userid" && args[0] != "username"){
    message.channel.send("Usage: }getstatus {username,userid} value");
    return;
  };

  async function getid(){//get id
    return args[0] === "username" ? await rbx.getIdFromUsername(args[1]) : parseInt(args[1]);
  }

  getid()
  .then(rbx.getStatus)
  .catch(function (e) {
    console.log(e);
    message.channel.send("Error getting status");
  })
  .then(function (status) {
    (async () => { //get name
      return args[0] === "userid" ? await rbx.getUsernameFromId(parseInt(args[1])) : args[1];
    })()
    .then(function (username) {
      console.log(`${username}: ${status}`);
      message.channel.send(`${username}: ${status}`);
    });
  });

}

module.exports.help = {
  name: "getstatus"
}

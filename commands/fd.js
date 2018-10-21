
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  if(args.length < 1){
    message.channel.send("Usage: !doc {username}");
    return;
  };

  var groupId = fd;
  var setRank = 2;

  var joinOptions = {
    group: groupId,
    username: userName,
    accept: true
  }

  let delay = (time) => (result) => new Promise(resolve => setTimeout(() => resolve(result), time));

  rbx.handleJoinRequest(joinOptions)
  .catch(function(err){
    console.error(err.stack);
    message.channel.send('error occured at handling');
    throw new Error('abort promise chain');
  })
  .then(function (){
    rbx.getIdFromUsername(userName)

    .then(function(userId){
      rbx.setRank({
        group: groupId,
        target: userId,
        rank: 3
      })
      .then(function (newRole) {
        message.channel.send('sucessfully accepted');
      })
      .catch(function(err){
        console.error(err.stack);
        message.channel.send('error occured at changing rank ' + userId);
        throw new Error('abort promise chain');
      })
    })

  });

}

module.exports.help = {
  name: "swat"
}

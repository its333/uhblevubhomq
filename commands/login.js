
const Discord = require("discord.js")
const rbx = require('noblox.js');

module.exports.run = async (bot, message, args) => {

  rbx.login(process.env.username, process.env.password)
  .then(function () {
    console.log('Logged in')
    message.channel.send("Successfully logged in");

    //On message
    var onMessage = rbx.onMessage();
    onMessage.on('data', function(newMessage){
      //sender,subject,body,created,updated,read,parent,id

      const embed = new Discord.RichEmbed()
      .setTitle(newMessage.subject)
      .setAuthor(newMessage.sender.name, `http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=${newMessage.sender.name}`)
      /*
       * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
       */
      .setColor(0x00AE86)
      .setDescription(newMessage.body)
      .setFooter("Roblox message", "http://i.imgur.com/w1vhFSR.png")
      .setThumbnail(`http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=${newMessage.sender.name}`)
      /*
       * Takes a Date object, defaults to current date.
       */
      .setTimestamp()
      .setURL("https://roblox.com")
      .addBlankField(true);

      bot.channels.find("name","general").send({embed});

    });
  })
  .catch(function (err) {
    console.error(err.stack);
    message.channel.send("Error logging in");
  });

}

module.exports.help = {
  name: "login"
}

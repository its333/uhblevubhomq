
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_ROLES")) return;

  if(args.length < 2){
    message.channel.send("Usage: }giverole user role");
    return;
  };

  let target = message.mentions.members.first() || message.guild.members.get(args[0]);
  let role = message.guild.roles.find('name',args.slice(1).join(" "));

  if(!target) {message.reply("User not found"); return;};
  if(!role) {message.reply("Role not found"); return;};

  target.addRole(role.id);
  message.channel.send(`gave role ${role.name} to ${target.nickname}`);

}

module.exports.help = {
  name: "giverole"
}

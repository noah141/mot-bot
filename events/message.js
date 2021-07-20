const discord = require("discord.js")
const botConfig = require("../botconfig/config.json");
const client = new discord.Client();
 exports.run = async(client, message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(botConfig.prefix)) {

 let messageArray = message.content.split(" "),
     cmd = messageArray[0],
     args = messageArray.slice(1),
     commandfile = client.commands.get(cmd.slice(botConfig.prefix.length)) || client.aliases.get(cmd.slice(botConfig.prefix.length));

if(!commandfile) return;
    commandfile.run(client,message,args);
  }
    
   
  
 }
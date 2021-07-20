const discord = require("discord.js")

exports.run = async(client, message, args) =>{
    if(!message.member.hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`${message.author},Je hebt geen permissie voor dit command`)
    }

    let user = args[0];
    if (!user) {
        return message.channel.send(`${message.author},Je moet een lid ID aangeven om te kunnen unbannen`)
    }

    if(user === message.author.id) {
        return message.channel.send("Je kan niet jezelf unbannen");
    } else if(user === message.guild.owner.user.id) {
        return message.channel.send("Je kan niet de server eigenaar unbannen"); 
    } else if(user === client.user.id) {
        return message.channel.send("Je kan mij niet unbannen");
    }
   
    let reason = args.slice(1).join(" ") || "Geen reden";

    message.guild.members
    .unban(user, {reason: reason})
    .then(() => {
        return message.channel.send(`Je hebt het lid succesvol geunbanned `)
    })
    .catch(() => {
        message.channel.send("Het lid wat je hebt doorgegeven staat niet in de Ban Database");
    })
} 
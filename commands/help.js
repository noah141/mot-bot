const Discord = require('discord.js'); 


module.exports = {
    command: 'help',
    beschrijving: 'help',
    gebruik: '-help',

    async run(client, message, args, con) {
        axe = new Discord.MessageEmbed()
        .setTitle("uitleg")
        .setDescription("**Dit is de uitleg voor het support team.**  \n \n  !ban (lid) (reden) \n !unban (ID) (reden) \n !clear (aantal berichten) dat je wilt verwijderen \n !embed om een embed aan te maken \n !kick (lid) (reden) \n !say (Bericht dat je verzonden wilt hebben door de bot) ")
        .setColor("BLUE")
        .setThumbnail('https://cdn.discordapp.com/attachments/857708855849254914/862303523735076884/e97325f6c7e2d89f360e1a378e34022e.png')
        .setFooter('Damsko Roleplay')
        .setTimestamp();
       message.channel.send(axe)
       message.delete()
}}
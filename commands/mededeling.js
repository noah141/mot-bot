const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'mededeling',
  run: async (client, message, args) => {
      const a = args.join(" ")
      if(!a) return message.reply('Je zal een bericht moeten aangeven nadat !mededeling voordat dit command werkt ')
      if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(`${message.author},Je hebt geen permissie voor dit command`)
      }
      const e = new Discord.MessageEmbed()
      .setDescription(`${a}`)
      .setColor('BLUE')
      .setThumbnail('https://cdn.discordapp.com/avatars/805411879291453500/e97325f6c7e2d89f360e1a378e34022e.webp')
      .setTitle('Damsko Mededeling')
      .setFooter('Damsko Mededeling™', 'https://cdn.discordapp.com/avatars/805411879291453500/e97325f6c7e2d89f360e1a378e34022e.webp',)
      .setTimestamp();
      message.channel.send(e)
      message.delete()
  }
}
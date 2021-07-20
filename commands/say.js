const discord = require ("discord.js")

exports.run = (client, message, args) => {
    let sy = args.join(' ')
    if(!sy)return message.channel.send(`${message.author}, je moet een bericht achter het command !say doen `)
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(`${message.author},Je hebt geen permissie voor dit command`)
      }
    message.delete()
    message.channel.send(sy)
}
const discord = require("discord.js")

exports.run = (client, message, args) => {

    let cr = args[0]
    if (!cr)return message.reply("Je moet een getal achterlaten  om de berichten te kunnen verwijderen ")
    if (isNaN(cr))return message.reply("Argument is geen getal")
    if (cr > 100)return message.reply (" Je kan niet meer dan 99 berichten verwijderen")
    if (cr < 1 )return message.reply ("You cant delete lesss message's than 1")
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send(`${message.author},Je hebt geen permissie voor dit command`)
      }
      
    message.channel.bulkDelete(cr)
    message.channel.send(`${message.author}, heeft ${cr} berichten verwijderd`).then(m => {
      m.delete({timeout: 2000})
    })
}
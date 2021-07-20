const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

 
module.exports = {
  name: "kick",
  run: async (client, message, args) => {

    if (!message.member.hasPermission("BAN_MEMBERS"))

      return message.channel.send(

        (`${message.author},Je hebt geen permissie voor dit command`)

      );

 

    let Member = message.mentions.users.first();

 

    if (!Member)

      return message.channel.send(

        `Je moet een lid aangeven achter het command die je wilt verbannen`

      );

 

    if (!message.guild.members.cache.get(Member.id))

      return message.channel.send(`Je moet een geldig lid aangeven`);

 

    if (Member.id === message.author.id)

      return message.channel.send(`Je kan niet jezelf verbannen`);

 

    if (Member.id === client.user.id)

      return message.channel.send(`Je kan mij niet verbannen`);

 

    if (Member.id === message.guild.owner.user.id)

      return message.channel.send(`je kan de server eigenaar niet verbannen`);

 

    let Reason = args.slice(1).join(" ");

    if (!Reason) return message.channel.send(`Je moet een reden aangeven achter de tag van het lid`);

    let User = message.guild.member(Member);

 

    if (!User.bannable)

    return message.channel.send(`ik kan dat lid niet verbannen`);

 

    try {

      console.log(`Member Is Going To Get banned!`);

 

      setTimeout(function() {

        User.ban({

          reason: `${Reason}` + ` ${message.author.tag}`

        });

      }, 2000);

      let embed = new Discord.MessageEmbed()
        .setColor("BLUE")

        .setTitle(`Ban systeem`)

        .addField(`Moderator`, `${message.author.tag}`)

        .addField(`verbannen Lid`, `${Member.tag} (${Member.id})`)

        .addField(`Reden`, `${Reason || "No Reason Provided!"}`)

        .setFooter(`Damsko roleplay `)
       
        .setThumbnail('https://cdn.discordapp.com/attachments/857708855849254914/862303523735076884/e97325f6c7e2d89f360e1a378e34022e.png')

        .setTimestamp();

      if (User && Member.bot === false)

        Member.send(

          `je bent verbannen van de server **${message.guild.name}** voor ${Reason ||
            "geen reden gegeven!"}`

        );

      message.channel.send(embed);

      console.log(

        `User: ${Member.tag} (${Member.id}) Just Got banned From ${
          message.guild.name
        } For ${Reason || "No Reason Provided!"}`

      );

    } catch (error) {

      return message.channel

        .send(

          `ik kan dat lid niet verbannen dat kan komen door de permissies`

        )

        .then(() => console.log(error));

    }

 

    

  }

};
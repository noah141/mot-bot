const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

 
module.exports = {
  name: "kick",
  run: async (client, message, args) => {

    if (!message.member.hasPermission("KICK_MEMBERS"))

      return message.channel.send(

        (`${message.author},Je hebt geen permissie voor dit command`)

      );

 

    let Member = message.mentions.users.first();

 

    if (!Member)

      return message.channel.send(

        (`${message.author},Geef een lid aan dat je wilt kicken`)

      );

 

    if (!message.guild.members.cache.get(Member.id))

      return message.channel.send(`${message.author},Tag een geldig lid`);

 

    if (Member.id === message.author.id)

      return message.channel.send(`${message.author},je kan jezelf niet kicken`);

 

    if (Member.id === client.user.id)

      return message.channel.send(`${message.author},Je kan mij niet kicken`);

 

    if (Member.id === message.guild.owner.user.id)

      return message.channel.send(`${message.author},Je kan de server eigenaar niet kicken`);

 

    let Reason = args.slice(1).join(" ");

    if (!Reason) return message.channel.send(`${message.author},Je moet een reden meegeven`);

    let User = message.guild.member(Member);

 

    if (!User.kickable)

      return message.channel.send(`${message.author},Ik kan dit lid niet kicken het kan misschien aan de rollen liggen `);

 

    try {

      console.log(`Member Is Going To Get Kick!`);

 

      setTimeout(function() {

        User.kick({

          reason: `${Reason}` + ` ${message.author.tag}`

        });

      }, 2000);

      let embed = new Discord.MessageEmbed()
        .setColor("BLUE")

        .setTitle(`Gebruiker gekicked!`)

        .addField(`Moderator`, `door ${message.author.tag}`)

        .addField(`Kicked Member`, `${Member.tag} (${Member.id})`)

        .addField(`Reason`, `${Reason || "geen reden doorgegeven"}`)

        .setFooter(`Damsko roleplay `)

        .setTimestamp();

      if (User && Member.bot === false)

        Member.send(

          `Je bent gekicked uit de server **${message.guild.name}** voor ${Reason ||
            "geen reden aangegeven!"}`

        );
        
      message.channel.send(embed).then (message =>{
        message.delete({ timeout: 10000 })});
      message.delete()
      console.log(

        `lid: ${Member.tag} (${Member.id}) is zojuist gekicked voor ${
          message.guild.name
        } For ${Reason || "geen reden doorgegeven"}`

      );

    } catch (error) {

      return message.channel

        .send(

          `ik kan dat lid niet kicken het kan door de permissies komen?`

        )

        .then(() => console.log(error));

    }

 

    

  }

};
const discord = require("discord.js");
const botConfig = require('./botconfig/config.json')
const client = new discord.Client();
const fs = require('fs');
const commandHandler = require ("wokcommands");
client.commands = new discord.Collection();
client.events = new discord.Collection();


fs.readdir("./commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log(`     ┃Successfully loaded | ${file}`)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});
    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("     ┃Successfully loaded | " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});


client.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

  let prefix = botConfig.prefix;



  let messageArray = message.content.split(" ");

  let command = messageArray[0];

  let arguments = messageArray.slice(1);


});
async function promptMessage(message, author, time, reactions) {
    time *= 1000;
    
    for (const reaction of reactions) {
        await message.react(reaction);
    }
    
    const filter = (reaction, user) => reactions.includes(reaction.emoji.name) && user.id === author.id;
    
    return message.awaitReactions(filter, { max: 1, time: time }).then(collected => collected.first() && collected.first().emoji.name);
    }
     
     




client.login(process.env.token);
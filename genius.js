const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

// pages

// the reaction logic will be here

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} (ID ${client.user.id})`);
});

client.on('message', async (msg) => {
    if (!msg.content.toLowerCase().startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (command == 'help') {
        // our help command will be here
    }
});
 
client.login(process.env.ID);

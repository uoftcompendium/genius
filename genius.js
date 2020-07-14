const Discord = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Discord.Client();

// functions

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}help`) {
        // variables
        
        // command
    }
});

client.login(process.env.ID);

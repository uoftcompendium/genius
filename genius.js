    const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();



client.on("message", async message => {

  client.user.setPresence({ activity: { name: 'bullying kai' }, status: 'online' })

 if(message.author.bot) return;

// COMMANDS

 if (message.content.toLowerCase() === `kai`) {
     message.channel.send("cracker");
   }

  if (message.content.includes.toLowerCase() === `peter`) {
     message.channel.send("waiting for bail");
   }


  }

);

  client.login(process.env.ID);


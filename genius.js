    const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();



client.on("message", async message => {

  client.user.setPresence({ activity: { name: 'bullying kai' }, status: 'online' })

 if(message.author.bot) return;

// COMMANDS

 if (message.content.toLowerCase().includes(`kai`)) {
     message.channel.send("cracker");
   }

  if (message.content.toLowerCase().includes(`peter`)) {
     message.channel.send("waiting for bail");
   }

  if (message.content.toLowerCase().includes(`ok`)) {
     message.channel.send("ok");
   }


  }

);

  client.login(process.env.ID);


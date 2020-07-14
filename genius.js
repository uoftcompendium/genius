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

      const emojis = {
        firstPage: '⏮️',
        previousPage: '⬅️',
        stop: '🛑',
        delete: '🗑️',
        nextPage: '➡️',
        lastPage: '⏩'
      }
    
      const pages = [
          'This is page one',
          'This is page two',
          'This is page three'
      ]
      
      const defaultPage = 0;
      
      const timeLimit = 15;
      
      const maximumRetries = 3;
      
      const allowOtherUserReactions = false;
      
      // note the use of 'let' over 'const'
      let currentPage = 0;
      let currentRetries = 0;
      
      // command
      const msg = await message.channel.send(pages[defaultPage]);

      await msg.react(emojis.firstPage);
      await msg.react(emojis.previousPage);
      await msg.react(emojis.stop);
      await msg.react(emojis.delete);
      await msg.react(emojis.nextPage);
      await msg.react(emojis.lastPage);

  }
});



client.login(process.env.ID);

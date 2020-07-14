const Discord = require('discord.js');
const { token, prefix } = require('./config.json');

const client = new Discord.Client();

// functions

const reactionPages = async (message, author, options, page, retries) => {
  // code incoming!
  const filter = (reaction, user) => {
    if (options.allowOtherUserReactions) {
        return Object.values(options.emojis).includes(reaction.emoji.name);
    } else {
        return Object.values(options.emojis).includes(reaction.emoji.name) && user.id === author.id;
    }
}

const collectorOptions = {
    max: 1,
    time: (options.timeLimit * 1000),
    errors: ['time']
}

message.awaitReactions(filter, collectorOptions)
    .then(async (collected) => {
      const reaction = collected.first();
      const minPage = 0;
      const maxPage = (options.pages.length - 1);
      const restartLoop = async () => { await reactionPages(message, author, options, page, retries); }

      
      if (reaction.emoji.name === options.emojis.firstPage) {
          // head back to the first page
          if (page === minPage) return restartLoop();

          page = minPage;
          message = await message.edit(options.pages[minPage]);
          return restartLoop();
          // head back to the first page
      }
      
      if (reaction.emoji.name === options.emojis.previousPage) {
          // move to the previous page
          // move to the previous page
          if (page === minPage) return restartLoop();

          page--;
          message = await message.edit(options.pages[page]);
          return restartLoop();
      }
      
      if (reaction.emoji.name === options.emojis.stop) {
          // stop listening
          // stop listening
          return true;
          
      }
      
      if (reaction.emoji.name === options.emojis.delete) {
          // delete the message (also stops listening)  
          // delete the message (also stops listening)
          await message.delete();
          return true; 
      }
      
      if (reaction.emoji.name === options.emojis.nextPage) {
          // move to the next page
          if (page === maxPage) return restartLoop();

          page++;
          message = await message.edit(options.pages[page]);
          return restartLoop();
          // move to the next page
      }
      
      if (reaction.emoji.name === options.emojis.lastPage) {
          // head forward to the last page  
          // head forward to the last page
          page = maxPage;
          message = await message.edit(options.pages[maxPage]);
          return restartLoop();     
      }

    
        // more code here
    })
    .catch(async (error) => {
        // and some more here too
        if (collected.size === 0) {
          if (retries >= options.maximumRetries) {
              return true;
          } else {
              retries++;
              return restartLoop();
          }
      }
    });
}
// functions

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content === `${prefix}embed`) {
        // variables

        const emojis = {
          firstPage: '<:firstpage:732634910715674625>',
          previousPage: '<:previous:732634909579149444>',
          stop: '🛑',
          delete: '<:cancel:732634909461708863>',
          nextPage: '<:next:732634910824595456>',
          lastPage: '<:lastpage:732634910711349270>'
      }

      const pages = [
        {  embed: { color: 16746881, title: 'Genius Assistant', description: 'Genius is an Apple support archive assistant with frequently asked questions available upon request. Welcome to the Genius help menu. To navigate, use the <:previous:732634909579149444> and <:next:732634910824595456> buttons. The table of contents is below: \n\n1. Welcome page \n2. iOS & iPhone \n3. Apple Watch \n4. Jailbreak \n5. Other \n\nTo return to this page, simply press <:firstpage:732634910715674625>. To close the menu entirely, press <:cancel:732634909461708863>. Thank you for using Genius.' } },
        {  embed: { color: 16746881, title: 'Page 2', description: 'This is page two' } },
        {  embed: { color: 16746881, title: 'Page 3', description: 'This is page three' } }
      ]

      const defaultPage = 0;
      
      const timeLimit = 15;
      
      const maximumRetries = 3;
      
      const allowOtherUserReactions = false;
      
      // note the use of 'let' over 'const'
      let currentPage = 0;
      let currentRetries = 0;
        
        // variables

        
        // command

        const msg = await message.channel.send(pages[defaultPage]);

        await msg.react(emojis.firstPage);
        await msg.react(emojis.previousPage);
        await msg.react(emojis.stop);
        await msg.react(emojis.delete);
        await msg.react(emojis.nextPage);
        await msg.react(emojis.lastPage);

        const options = {
          emojis,
          pages,
          timeLimit,
          maximumRetries,
          allowOtherUserReactions
        }
      
        // the difference:
        // 'msg' is the message we sent from the bot
        // 'message.author' is who sent the command initially
        await reactionPages(msg, message.author, options, currentPage, currentRetries);


        
        // command
    }
});

client.login(process.env.ID);

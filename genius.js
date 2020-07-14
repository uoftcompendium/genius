const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

  
client.on("message", async message => {
  if(message.author.bot) return;
  if (message.content === `${prefix}ping`) {
    const m = await message.channel.send("Recalculating...");
    m.edit(`Latency \`${m.createdTimestamp - message.createdTimestamp}ms\`. API Latency \`${Math.round(client.ping)}ms\`.`);
  }

  if (message.content === `${prefix}inv`) {
      message.react('732342713055182898');
      message.author.send("Invite **Genius** to your server through <https://discord.com/oauth2/authorize?client_id=731603315032326235&scope=bot&permissions=2112>.");
      message.channel.send("An invite has been issued via DM.");
  }

});


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


  // THEN LOOP
  message.awaitReactions(filter, collectorOptions)
      .then(async (collected) => {
          // more code here

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
          }

          if (reaction.emoji.name === options.emojis.previousPage) {
              // move to the previous page
              // move to the previous page
              if (page === minPage) return restartLoop();

              page--;
              message = await message.edit(options.pages[page]);
              return restartLoop();
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
          }

          if (reaction.emoji.name === options.emojis.lastPage) {
              // head forward to the last page 
              page = maxPage;
              message = await message.edit(options.pages[maxPage]);
              return restartLoop();      
          }
      })



// CATCH LOOP
      .catch(async (error) => {
          // and some more here too
      });

}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content === `${prefix}helpmenu`) {
      // variables

      const emojis = {
        firstPage: '⏮️',
        previousPage: '⬅️',
        delete: '🗑️',
        nextPage: '➡️',
        lastPage: '⏩'
      }
    
      const pages = [
          '**Genius Assistant** \n\nWelcome to the Genius help menu, an Apple support archive assistant with frequently asked questions available upon request. To navigate, use the buttons below. The table of contents: \n\n1. Welcome \n2. iOS & iPhone \n3. Apple Watch \n4. Jailbreak \n5. Other',
          '**2. iOS & iPhone** \n\n`$alock` - activation lock \n`$appdl` - app not downloading/updating \n`$ar` - account recovery \n`$backuprestore` - restore from backup \n`$battery` - battery health guide \n`$batterysite` - battery website \n`$bypass` - iCloud bypass \n`$bypasshack` - it\'s hack time \n`$dfu` - DFU mode guide \n`$downgrade` - how to get rid of betas \n`$factoryrestore` - factory restore \n`$ios` - iOS version & stats \n`$iphone7` - issues with iPhone 7 \n`$other` - \'other\' storage bloat \n`$storage` - iCloud storage pricing \n\n**Next panel**: Apple Watch',
          '**3. Apple Watch** \n\n`$awbeta` - applewatch beta guide \n`$watchosbeta` - should i install? NO \n`$watchos` - watchOS version & stats \n\n**Next panel**: Jailbreak',
          '**4. Jailbreak** \n\n`$checkrai`n - checkra1n jailbreak info \n\n`$jailbreak` - what is jailbreak \n\n`$snapjb` - snapchat jailbreak fix \n\n`$uncover` - unc0ver jailbreak info \n\n**Next panel**: Other',
          '**5. Other** \n\n`$info` - credits & information \n`$help` - opens help menu \n`$version` - current version no.'
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

  }
});



client.login(process.env.ID);

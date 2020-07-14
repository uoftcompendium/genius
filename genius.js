const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

const pages = {
  1: { title: ':one:', description: 'This is page one!' }, 
  2: { title: ':two:', description: 'This is page two!' }
}

const removeReaction = async (m, msg, emoji) => {
  try { m.reactions.find(r => r.emoji.name == emoji).users.remove(msg.author.id); } catch(err) {}
}

//reactionlogic
const awaitReactions = async (msg, m, options, filter) => {
  // simplify the use of these options, using destructing^
  const { min, max, page, limit } = options;

  const filter = (reaction, user) => {
    return ['⬅', '➡', '🗑'].includes(reaction.emoji.name) && user.id == msg.author.id;
  };

  awaitReactions(msg, m, options, filter);
  
  m.awaitReactions(filter, { max: 1, time: limit, errors: ['time'] })
  .then(async (collected) => {
      const reaction = collected.first();

      if (reaction.emoji.name === '⬅') {
        // a.       
    }
    else if (reaction.emoji.name === '➡') {
        // b.
    }
    else if (reaction.emoji.name === '🗑') {
        // c.
    }
    else {
        // d.
    }

      
  }).catch(() => {});
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} (ID ${client.user.id})`);
});

client.on('message', async (msg) => {
    if (!msg.content.toLowerCase().startsWith(config.prefix) || msg.author.bot) return;

    const args = msg.content.slice(prefix.length).split(/ +/g);
    const command = args.shift().toLowerCase();
    
    if (command == 'welp') {
        // the command itself

        const options = {
          limit: 15 * 1000,
          min: 1,
          max: 2, // there will be 2 pages
          page: 1
      }

       // don't worry, we'll define pages next
        const m = await msg.channel.send({ embed: pages[options.page] });

        await m.react('⬅');
        await m.react('➡');
        await m.react('🗑');


        if (reaction.emoji.name === '⬅') {
          // remove the back reaction if possible
          await removeReaction(m, msg, '⬅');
          
          // check if the page can go back one
          if (page != min) {
              // change the page
              page = page - 1;
              await m.edit({ embed: pages[page] });
          }
         
          // restart the listener 
          awaitReactions(msg, m, options, filter);
      }

      else if (reaction.emoji.name === '➡') {
        // remove the back reaction if possible
        await removeReaction(m, msg, '➡');
        
        // check if the page can go forward one
        if (page != max) {
            // change the page
            page = page + 1;
            await m.edit({ embed: pages[page] });
        }
       
        // restart the listener 
        awaitReactions(msg, m, options, filter);
    }

      else if (reaction.emoji.name === '🗑') {
        // trash the message instantly, returning so the listener fully stops
        return await m.delete();
    }

      else {
        awaitReactions(msg, m, options, filter);
    };


    }
});
 
client.login(process.env.ID);

const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

  
client.on("message", async message => {
  if(message.author.bot) return;
  if (message.content === `${prefix}ping`) {
    const m = await message.channel.send("Recalculating...");
    m.edit(`Latency \`${m.createdTimestamp - message.createdTimestamp}ms\`. API Latency \`${Math.round(client.ping)}ms\`.`);
  }

  if (message.content === `${prefix}invite`) {
      message.react('732342713055182898');
      message.author.send("Invite **Genius** to your server through <https://discord.com/oauth2/authorize?client_id=731603315032326235&scope=bot&permissions=2112>.");
      message.channel.send("An invite has been issued via DM.");
  }

  if (message.content === `${prefix}bypass`) {
    message.channel.send("There is **no way** to bypass iCloud unlock.\n For __Activation Lock__, see <https://support.apple.com/en-us/HT201441>");
  }

  if (message.content === `${prefix}alock`) {
    message.channel.send("See <https://support.apple.com/en-us/HT201441>. If the __Activation Lock__ placed on a device you have purchased or one that has come into your possession **cannot** be removed by the previous owner, you must contact your local Apple Store (<https://www.apple.com/retail/>) with proof of purchase.");
  }


  if (message.content === `${prefix}other`) {
    message.channel.send("__**Other** storage unusually high is currently classified as this by Apple:__ \n\n> Non-removable mobile assets, like Siri voices, fonts, dictionaries, non-removable logs and caches, Spotlight index, and system data, such as Keychain and CloudKit Database. Cached files can't be deleted by the system.\n\n You can read more at <https://support.apple.com/en-us/HT201656> \n\n__The only known method to solve this issue is as follows:__ \n1) Backup your iPhone to **iCloud**. Note: you **cannot** use iTunes of Finder as high 'Other' storage will return. (<https://support.apple.com/en-us/HT203977>) \n2) Restore your phone to **factory settings** using iTunes or Finder on a computer. (<https://support.apple.com/en-us/HT201252>) \n3) Wait for the restore to finish, then you can safely restore from your **iCloud backup**. (<https://support.apple.com/en-us/HT204184>)");
  }

  if (message.content === `${prefix}ar`) {
    message.channel.send("Account recovery is a process designed to get you back into your Apple ID account when you don’t have enough information to reset your password. For security reasons, it might take several days or longer before you can use your account again. <https://support.apple.com/en-us/HT204921>");
  }

  if (message.content === `${prefix}batterysite`) {
    message.channel.send("<https://support.apple.com/en-us/HT208387>");
  }

  if (message.content === `${prefix}appdl`) {
    message.channel.send("If you want to update apps, you can update them manually or turn on automatic updates (<https://support.apple.com/en-ca/HT202180>) But if your app won't update or is interrupted while it's downloading, try the steps at <https://support.apple.com/en-us/HT207165>.");
  }

  if (message.content === `${prefix}downgrade`) {
    message.channel.send("iOS Developer & Public __Betas__ can be uninstalled by following the instructions at <https://support.apple.com/en-us/HT203282#beta>. An __iCloud backup__ is highly recommended.");
  }

  if (message.content === `${prefix}backuprestore`) {
    message.channel.send("A device can be **restored** through an __iCloud backup__ or __local (computer) backup__, by following instructions at <https://support.apple.com/en-us/HT204184>.");
  }

  if (message.content === `${prefix}factoryrestore`) {
    message.channel.send("A __factory restore__ erases the information and settings on your iPhone, iPad, or iPod and installs the latest version of iOS, iPadOS, or iPod software. Follow the steps at <https://support.apple.com/en-us/HT201252>.");
  }

  if (message.content === `${prefix}battery`) {
    message.channel.send("__Battery health guide for iPhones:__ \n- iPhones 5/5S/SE: **90-93%** and less is degraded beyond reasonable usability. \n- iPhones 6/6S/7/8/SE2020 **85-90%** and less is degraded beyond reasonable usability. \n- iPhones 6+/6S+/7+/8+/X/X **80-85%** and less is degraded beyond reasonable usability. \n- XR/XSM/11/11P/11PM - **80% and lower** is generally degraded (Apple recommendation) \n\n*From experience it seems to line up roughly with when people start to complain with batteries and roughly when they could experience shutdowns, throttle, misreporting battery percent, etc. For more info, see <https://support.apple.com/en-us/HT208387>*");
  }

  if (message.content === `${prefix}bypasshack`) {
    message.channel.send("https://i.imgur.com/tatd6yS.png");
  }

  if (message.content === `${prefix}snapjb`) {
    message.channel.send("__Jailbroken__ iOS devices may fail to work with Snapchat, even if you have the official app, if you have certain ‘tweaks’ installed. These tweaks can compromise the security of your account. **Solutions**: (1) Disabling Cydia Substrate using the “NoSub” tweak, (2) Uninstalling the “xCon” tweak, (3) Using a “jailbroken iOS cleaning app,” like iCleaner, if unofficial apps have been installed and then uninstalled. <https://support.snapchat.com/en-US/article/jailbroken-iphone>");
  }

  if (message.content === `${prefix}template`) {
    message.channel.send("```js\nif(command === 'template') { \nconst sayMessage = args.join(' '); \nmessage.channel.send('input'); \n}```");
  }

  if (message.content === `${prefix}storage`) {
    message.channel.send("When you sign up for iCloud, you automatically get 5GB of free storage. If you need more space in iCloud, you can upgrade to a larger storage plan. **USD** pricing: __50GB__ ($0.99), __200GB__ ($2.99), __2TB__ ($9.99), all charged monthly.");
  }

  if (message.content === `${prefix}checkrain`) {
    message.channel.send("**checkra1n** is a jailbreak tool that relies on the `checkm8` hardware exploit. It is currently working on all iOS versions 12.3 and higher, on devices 5S to X. Current version: `0.10.2`. Install at <https://checkra.in/>");
  }

  if (message.content === `${prefix}uncover`) {
    message.channel.send("**unc0ver** is a jailbreak tool that relies on a patchable software exploit. It is currently working on all iOS versions between 11.0 and 13.5, on all devices. Current version: `5.2.1`. Install at <https://unc0ver.dev/>");
  }

  if (message.content === `${prefix}jailbreak`) {
    message.channel.send("__Jailbreaking__ is a method by which your iOS device can bypass Apple's stock restrictions through __hardware__ and __software__-based exploits, unlocking the true potential of your iPhone beyond Apple's closed environment. For tools, type `$checkrain` or `$uncover`.");
  }

  if (message.content === `${prefix}version`) {
    message.channel.send("`V. 2.1.1`");
  }

  if (message.content === `${prefix}info`) {
    message.channel.send("**Genius:tm:** is an Apple support archive assistant with frequently asked questions available upon request. Written in Discord.js by `tank#0001`. Genius contributors: `Isaac#0004`, `Fudge#0001`, `samsscreenrepair#0001`, `FoxRunTime#0346`, `sapphic wallflower#5186`, `Ber#0107`, `BytesAndCoffee#2233`.");
  }

  if (message.content === `${prefix}dfu`) {
    message.channel.send("__DFU__ or __Device Firmware Upgrade__ mode allows all devices to be restored from any state. Learn more how to enter DFU mode on any device at <https://www.theiphonewiki.com/wiki/DFU_Mode>.");
  }

  if (message.content === `${prefix}watchosbeta`) {
    message.channel.send("Should I install the **watchOS 7** beta on my Apple Watch?\n https://i.imgur.com/kvS0QpT.png");
  }

  if (message.content === `${prefix}awbeta`) {
    message.channel.send("You shouldn’t install the watchOS __Developer__ or __Public__ beta since they are prerelease software not meant the the *general* public. If something goes wrong, you will have to send your Apple Watch back to Apple to get it reset or replaced. Proceed at your own risk through <https://beta.apple.com/sp/betaprogram/>.");
  }


  if (message.content === `${prefix}iphone7`) {
    message.channel.send("The **iPhone 7** & **iPhone 7 Plus** are plagued with multiple issues that make it a less than economic choice in the current phone climate. It's affected by these __two issues__: \n\n__1)__ '**No Service**' recall, which you can read about at <https://support.apple.com/iphone-7-no-service>. This recall is about to expire, leaving many people soon to have to pay for their own repair. \n\n__2)__ The poor design of the iPhone 7 has caused a **defect with the Audio IC**, causing it to become separated from the board. This could result in loss of multiple  audio features such as calls, speaker phone, voice memos, Siri, etc. The difference between this issue and the last is that Apple refuses to recognize the design flaw, and on top of that, even if you get it repaired, it will happen again. There is __no permanent solution__. \n\n*In short, if you're looking for a budget solution, the iPhone SE 2020 or a used iPhone 8 is an infinitely better choice for your money.*");
  }

  if (message.content === `${prefix}ios`) {
    message.channel.send({embed: {
      color: 16746881,
      title: "iOS Status",
      fields: [{
          name: "Current distribution",
          value: "iOS `13.5.1` (`17F80`) R. Jun. 1, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/IOS_13#Updates). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Distribution 13 Betas",
          value: "iOS `13.6 GM` (`17G68`) R. Jul. 9, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/IOS_13#Updates). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Next iOS release",
          value: "iOS `14.0 (2)` (`18A5319i`) R. Jul. 7,9, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/IOS_14#Updates). ([Official](https://developer.apple.com/news/releases/))"
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "Last refresh July 9, 2020"
      }
    }
  });
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

  if (message.content === `${prefix}help`) {
      // variables

      const emojis = {
        firstPage: '732685936063676447',
        previousPage: '⬅️',
        delete: '🗑️',
        nextPage: '➡️',
        lastPage: '⏩'
      }
    
      const pages = [
          'Welcome to the Genius **help menu**, an Apple support archive assistant with frequently asked questions available upon request. To navigate, use the buttons below. The table of contents: (**1**) Welcome, (**2**) iOS & iPhone, (**3**) Apple Watch, (**4**) Jailbreak, (**5**) Other. For suggestions, contact `tank#0001`.',
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
// THE STATS IOS

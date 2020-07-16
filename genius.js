const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

  
client.on("message", async message => {
  if(message.author.bot) return;

  msg = message.content.toLowerCase();

  if (msg.startsWith === `${prefix}ping`) {
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

  // START IOS CENTRAL COMMANDS, ACTIVATED VIA $help ios

  if (message.content === `${prefix}ios passcode`) {
    message.channel.send("For better security, set a passcode that needs to be entered to unlock iPhone when you turn it on or wake it. Setting a passcode turns on data protection, which encrypts your iPhone data with 256-bit AES encryption. (Some apps may opt out of using data protection.) <https://support.apple.com/en-ca/guide/iphone/iph14a867ae/ios>");
  }

  if (message.content === `${prefix}ios faceid`) {
    message.channel.send("Use Face ID (supported models: ) to unlock iPhone, authorize purchases and payments, and sign in to many third-party apps by simply glancing at your iPhone. To use Face ID, you must also set up a passcode on your iPhone. <https://support.apple.com/en-ca/guide/iphone/iph6d162927a/ios>");
  }

  if (message.content === `${prefix}ios touchid`) {
    message.channel.send("Use Touch ID (supported models) to unlock iPhone, authorize purchases and payments, and sign in to many third-party apps by pressing the Home button with your finger or thumb. To use Touch ID, you must also set up a passcode on your iPhone. <https://support.apple.com/en-ca/guide/iphone/iph672384a0b/ios>");
  }

  if (message.content === `${prefix}ios 2fa`) {
    message.channel.send("Two-factor authentication helps prevent others from accessing your Apple ID account, even if they know your Apple ID password. Two-factor authentication is built into iOS 9, iPadOS 13, OS X 10.11, or later. <https://support.apple.com/en-ca/guide/iphone/iphd709a3c46/ios>");
  }

  if (message.content === `${prefix}ios alock`) {
    message.channel.send("See <https://support.apple.com/en-us/HT201441>. If the __Activation Lock__ placed on a device you have purchased or one that has come into your possession **cannot** be removed by the previous owner, you must contact your local Apple Store (<https://www.apple.com/retail/>) with proof of purchase.");
  }

  if (message.content === `${prefix}ios appdl`) {
    message.channel.send("If you want to update apps, you can update them manually or turn on automatic updates (<https://support.apple.com/en-ca/HT202180>) But if your app won't update or is interrupted while it's downloading, try the steps at <https://support.apple.com/en-us/HT207165>.");
  }
  
  if (message.content === `${prefix}ios ar`) {
    message.channel.send("Account recovery is a process designed to get you back into your Apple ID account when you don’t have enough information to reset your password. For security reasons, it might take several days or longer before you can use your account again. <https://support.apple.com/en-us/HT204921>");
  }

  if (message.content === `${prefix}ios backuprestore`) {
    message.channel.send("A device can be **restored** through an __iCloud backup__ or __local (computer) backup__, by following instructions at <https://support.apple.com/en-us/HT204184>.");
  }

  if (message.content === `${prefix}ios battery`) {
    message.channel.send("https://support.apple.com/en-us/HT208387");
  }

  if (message.content === `${prefix}ios battery guide`) {
    message.channel.send("__Battery health guide for iPhones:__ \n- iPhones 5/5S/SE: **90-93%** and less is degraded beyond reasonable usability. \n- iPhones 6/6S/7/8/SE2020 **85-90%** and less is degraded beyond reasonable usability. \n- iPhones 6+/6S+/7+/8+/X/X **80-85%** and less is degraded beyond reasonable usability. \n- XR/XSM/11/11P/11PM - **80% and lower** is generally degraded (Apple recommendation) \n\n*From experience this seems to line up roughly with when people start to complain with batteries and roughly when they could experience shutdowns, throttle, misreporting battery percent, etc. For more info, see <https://support.apple.com/en-us/HT208387>*");
  }

  if (message.content === `${prefix}ios bypass`) {
    message.channel.send("There is **no way** to bypass iCloud unlock.\n For __Activation Lock__, see <https://support.apple.com/en-us/HT201441>");
  }

  if (message.content === `${prefix}ios bypass guide`) {
    message.channel.send("There is **no way** to bypass iCloud unlock.\n For __Activation Lock__, see <https://support.apple.com/en-us/HT201441>");
  }

  if (message.content === `${prefix}ios bypasshack`) {
    message.channel.send("https://i.imgur.com/tatd6yS.png");
  }

  if (message.content === `${prefix}ios downgrade`) {
    message.channel.send("iOS Developer & Public __Betas__ can be uninstalled by following the instructions at <https://support.apple.com/en-us/HT203282#beta>. An __iCloud backup__ is highly recommended.");
  }

  if (message.content === `${prefix}ios factoryrestore`) {
    message.channel.send("A __factory restore__ erases the information and settings on your iPhone, iPad, or iPod and installs the latest version of iOS, iPadOS, or iPod software. Follow the steps at <https://support.apple.com/en-us/HT201252>.");
  }

  if (message.content === `${prefix}ios other`) {
    message.channel.send("__**Other** storage unusually high is currently classified as this by Apple:__ \n\n> Non-removable mobile assets, like Siri voices, fonts, dictionaries, non-removable logs and caches, Spotlight index, and system data, such as Keychain and CloudKit Database. Cached files can't be deleted by the system.\n\n You can read more at <https://support.apple.com/en-us/HT201656> \n\n__The only known method to solve this issue is as follows:__ \n1) Backup your iPhone to **iCloud**. Note: you **cannot** use iTunes of Finder as high 'Other' storage will return. (<https://support.apple.com/en-us/HT203977>) \n2) Restore your phone to **factory settings** using iTunes or Finder on a computer. (<https://support.apple.com/en-us/HT201252>) \n3) Wait for the restore to finish, then you can safely restore from your **iCloud backup**. (<https://support.apple.com/en-us/HT204184>)");
  }


  if (message.content === `${prefix}ios beta`) {
    message.channel.send("input");
  }


  // END IOS CENTRAL COMMANDS, ACTIVATED VIA $help ios


  // START THE MASTER TEMPLATE COMMAND
  if (message.content === `${prefix}cmdname`) {
    message.channel.send("input");
  }
  // END THE MASTER TEMPLATE COMMAND


  if (message.content === `${prefix}ios`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "iOS Status",
      fields: [{
          name: "Current distribution",
          value: "iOS `13.6` (`17G68`) R. Jul. 15, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/IOS_13#Updates). ([Official](https://developer.apple.com/news/releases/))"
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
        text: "Last refresh July 15, 2020"
      }
    }
  });
  }


  if (message.content === `${prefix}watchos`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "watchOS Status",
      fields: [{
          name: "Current distribution",
          value: "watchOS `6.2.8` (`17U63`) R. Jul. 15, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_6). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Distribution V6 Betas",
          value: "watchOS `6.2.8 (4) GM` (`17U63`) R. Jul. 9, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_6). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Next iOS release",
          value: "watchOS `7.0 (2)` (`18R5327h`) R. Jul. 7, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_7). ([Official](https://developer.apple.com/news/releases/))"
        }
      ],
      timestamp: new Date(),
      footer: {
        text: "Last refresh July 15, 2020"
      }
    }
  });
  }

  if (message.content === `${prefix}commands`) {
      message.channel.send({embed: {
        color: 9552127,
        title: "Genius Assistant",
        fields: [{
            name: "iOS & iPhone",
            value: "`$alock` - activation lock\n`$appdl` - app dl issues)\n`$ar` - account recovery\n`$backuprestore` - backup restore\n`$battery` - battery health guide\n`$batterysite` - battery website\n`$bypass` - iCloud bypass\n`$bypasshack` - it's hack time\n`$dfu` - DFU mode guide \n`$downgrade` - how to get rid of betas \n`$factoryrestore` - factory restore\n`$ios` - iOS version & stats\n`$iphone7` - issues with iPhone 7\n`$other` - 'other' storage bloat \n`$storage` - iCloud storage pricing "
          },
          {
            name: "Jailbreak",
            value: "`$checkrain` - checkra1n jailbreak info \n`$jailbreak` - what is jailbreak \n`$snapjb` - snapchat jailbreak fix \n`$uncover` - unc0ver jailbreak info"
          },
          {
            name: "Apple Watch",
            value: "`$awbeta` - applewatch beta guide\n`$watchosbeta` - should i install? NO"
          },
          {
            name: "Other",
            value: "`$info` - credits & information\n`$help` - list of all commands\n`$version` - version number\n"
          }

        ],
        timestamp: new Date(),
        footer: {
          text: "Designed by tank#0001"
      }
    }
  });
  }

  if (message.content === `${prefix}help`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "Genius Assistant",
      fields: [{
          name: "All help topics:",
          value: "\n`$help ios` \n`$help iphone` \n`$help apple watch` \n`$help jailbreak` \n`$help icloud` \n`$help other`\n\n[Support Server](https://discord.gg/iphone) | [Docs](https://discord.gg/iphone)"
        }
      ],
      footer: {
        text: "Version: 3.0.1 | Build 0X8902"
    }
  }
});
}

if (message.content === `${prefix}help ios`) {
  message.channel.send({embed: {
    color: 9552127,
    title: "iOS Assistance",
    fields: [{
        name: "All help topics:",
        value: "\n`$ios passcode` - iOS passcode\n`$ios faceid` - iOS Face ID \n`$ios touchid` - iOS Touch ID\n`$ios 2fa` - iOS 2FA\n\nAdd `guide` for instructions.\nEx: `$ios 2fa guide`"
      }
    ],
    footer: {
      text: "Version: 3.0.1 | Build 0X8902"
  }
}
});
}


});


// BEGIN REACTION EMBED PAGES
// functions

const reactionPages = async (message, author, options, page, retries) => {
  const filter = (reaction, user) => {
    if (options.allowOtherUserReactions) {
        return Object.values(options.emojis).includes(reaction.emoji.name);
    } else {
        return Object.values(options.emojis).includes(reaction.emoji.name) && user.id === author.id;
    }
  }

  const collectorOptions = {
      max: 1,
      time: (options.timeLimit * 999999),
      errors: ['time']
  }


  // THEN LOOP
  message.awaitReactions(filter, collectorOptions)
      .then(async (collected) => {
          const reaction = collected.first();
          const minPage = 0;
          const maxPage = (options.pages.length - 1);
          const restartLoop = async () => { await reactionPages(message, author, options, page, retries); }

          if (reaction.emoji.name === options.emojis.previousPage) {
              if (page === minPage) return restartLoop();

              page--;
              message = await message.edit(options.pages[page]);
              return restartLoop();
          }

          if (reaction.emoji.name === options.emojis.nextPage) {
              if (page === maxPage) return restartLoop();

              page++;
              message = await message.edit(options.pages[page]);
              return restartLoop();
          }

      })



// CATCH LOOP (NOT USING)
      .catch(async (error) => {
      });

}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// START PAGES CMD

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content === `${prefix}backuprestorehow`) {

      const emojis = {
        previousPage: '⬅️',
        nextPage: '➡️',
      }
    
      const pages = [
          {  embed: { footer: { text: "This is page 1 of 2. The parent command is $backuprestore" }, color: 9552127, title: 'Restore your device from an iCloud backup', description: '__Learn how to restore your device from a backup in iCloud or on your computer.__ \n\n`1.` Turn on your device. You should see a Hello screen. If you already set up your device, you need to erase all of its content before you can use these steps to restore from your backup. \n\n`2.` Follow the onscreen setup steps until you reach the Apps & Data screen, then tap Restore from iCloud Backup. \n\n`3`. Sign in to iCloud with your Apple ID. \n\n`4`. Choose a backup. Look at the date and size of each and pick the most relevant. After you choose, the transfer starts. If a message says that a newer version of software is required, follow the onscreen steps to update (If you don\'t see onscreen steps to help you update, [learn what to do](https://support.apple.com/en-ca/HT203434)). \n\nUse the ➡️ button to proceed to page 2.\n' } },
          {  embed: { footer: { text: "This is page 2 of 2. The parent command is $backuprestore" }, color: 9552127, title: 'Restore your device from an iCloud backup (2)', description: '`5.` When asked, sign in with your Apple ID to restore your apps and purchases (If you\'ve purchased iTunes or App Store content using multiple Apple IDs, you\'ll be asked to sign in to each). If you can’t remember your password, you can tap Skip this Step and sign in later. But you won\'t be able to use the apps until you sign in with your Apple ID.\n\n`6.` Stay connected and wait for a progress bar to appear and complete. Depending on the size of the backup and the network speed, the progress bar might need a few minutes to an hour to complete. If you disconnect from Wi-Fi too soon, the progress will pause until you reconnect.\n\n`7.` Now you can finish setup and enjoy your device. Content like your apps, photos, music, and other information will continue to restore in the background for the next several hours or days, depending on the amount of information there is. Try to connect often to Wi-Fi and power to let the process complete.\n\n[Get help with restoring from your iCloud backup](https://support.apple.com/en-ca/HT203516).\n\nUse the ⬅️ button to return to page 1.\n' } }
      ]
      
      const defaultPage = 0;
      
      const timeLimit = 15;
      
      const maximumRetries = 3;
      
      const allowOtherUserReactions = false;
      
      let currentPage = 0;
      let currentRetries = 0;
      
      const msg = await message.channel.send(pages[defaultPage]);

      await msg.react(emojis.previousPage);
      await msg.react(emojis.nextPage);

      const options = {
        emojis,
        pages,
        timeLimit,
        maximumRetries,
        allowOtherUserReactions
      }

      await reactionPages(msg, message.author, options, currentPage, currentRetries);

  }
});

// END PAGES CMD

// $ios passcode guide

client.on('message', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  if (message.content === `${prefix}ios passcode guide`) {

      const emojis = {
        previousPage: '⬅️',
        nextPage: '➡️',
      }
    
      const pages = [
          {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios passcode" }, color: 9552127, title: 'Set a passcode on iPhone', description: '__Set or change the passcode__ \n\n`1.` Go to Settings , then do one of the following:\n- On an iPhone with Face ID: Tap Face ID & Passcode.\n- On an iPhone a Home button: Tap Touch ID & Passcode.\n\n`2.` Tap Turn Passcode On or Change Passcode.\n\nTo view options for creating a password, tap Passcode Options. The most secure options are Custom Alphanumeric Code and Custom Numeric Code.\n\nUse the ➡️ button to proceed to page 2.\n' } },
          {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios passcode" }, color: 9552127, title: 'Set a passcode on iPhone (2)', description: 'After you set a passcode, you can [use Face ID](https://support.apple.com/en-ca/guide/iphone/iph6d162927a/13.0/ios/13.0) or [Touch ID](https://support.apple.com/en-ca/guide/iphone/iph672384a0b/13.0/ios/13.0) to unlock iPhone (depending on your model). For additional security, however, you must always enter your passcode to unlock your iPhone under the following conditions:\n- You turn on or restart your iPhone.\n- You haven’t unlocked your iPhone for more than 48 hours.\n- You haven’t unlocked your iPhone with the passcode in the last 6.5 days, and you haven’t unlocked it with Face ID or Touch ID in the last 4 hours.\n- Your iPhone receives a remote lock command.\n- There are five unsuccessful attempts to unlock your iPhone with Face ID or Touch ID.\n- An attempt to use Emergency SOS is initiated ([see Make emergency calls on iPhone](https://support.apple.com/en-ca/guide/iphone/iph3c99374c/13.0/ios/13.0)).\n- An attempt to view your Medical ID is initiated ([see Create and share your Medical ID in Health on iPhone](https://support.apple.com/en-ca/guide/iphone/iphec639eb15/13.0/ios/13.0)).\n\n[Set a passcode on iPhone](https://support.apple.com/en-ca/guide/iphone/iph14a867ae/ios)\n\nUse the ⬅️ button to return to page 1.\n' } }
      ]
      
      const defaultPage = 0;
      
      const timeLimit = 15;
      
      const maximumRetries = 3;
      
      const allowOtherUserReactions = false;
      
      let currentPage = 0;
      let currentRetries = 0;
      
      const msg = await message.channel.send(pages[defaultPage]);

      await msg.react(emojis.previousPage);
      await msg.react(emojis.nextPage);

      const options = {
        emojis,
        pages,
        timeLimit,
        maximumRetries,
        allowOtherUserReactions
      }

      await reactionPages(msg, message.author, options, currentPage, currentRetries);

  }

// $ios faceid guide

  if (message.content === `${prefix}ios faceid guide`) {

      const emojis = {
        previousPage: '⬅️',
        nextPage: '➡️',
      }
    
      const pages = [
          {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios faceid" }, color: 9552127, title: 'Set up Face ID or add an alternate appearance', description: '`1.` If you didn’t set up Face ID when you first set up your iPhone, go to Settings  > Face ID & Passcode > Set up Face ID, then follow the onscreen instructions.\n\n`2.` To set up an additional appearance for Face ID to recognize, go to Settings > Face ID & Passcode > Set Up an Alternate Appearance, then follow the onscreen instructions.\n\nIf you have physical limitations, you can tap Accessibility Options during Face ID set up. When you do this, setting up facial recognition doesn’t require the full range of head motion. Using Face ID is still secure, but it requires more consistency in how you look at iPhone.\n\nUse the ➡️ button to proceed to page 2.\n' } },
          {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios faceid" }, color: 9552127, title: 'Set up Face ID or add an alternate appearance (2)', description: 'Face ID also has an accessibility feature you can use if you’re blind or have low vision. If you don’t want Face ID to require that you look at iPhone with your eyes open, go to Settings > Accessibility, then turn off Require Attention for Face ID. This feature is automatically turned off if you turn on VoiceOver when you first set up iPhone. See [Change Face ID and attention settings on iPhone.](https://support.apple.com/en-ca/guide/iphone/iph646624222/13.0/ios/13.0)\n\n[User Guide - Face ID, Apple](https://support.apple.com/en-ca/guide/iphone/iph6d162927a/ios)\n\nUse the ⬅️ button to return to page 1.\n' } }
      ]
      
      const defaultPage = 0;
      
      const timeLimit = 15;
      
      const maximumRetries = 3;
      
      const allowOtherUserReactions = false;
      
      let currentPage = 0;
      let currentRetries = 0;
      
      const msg = await message.channel.send(pages[defaultPage]);

      await msg.react(emojis.previousPage);
      await msg.react(emojis.nextPage);

      const options = {
        emojis,
        pages,
        timeLimit,
        maximumRetries,
        allowOtherUserReactions
      }

      await reactionPages(msg, message.author, options, currentPage, currentRetries);

  }

  // $ios touchid guide

    if (message.content === `${prefix}ios touchid guide`) {
  
        const emojis = {
          previousPage: '⬅️',
          nextPage: '➡️',
        }
      
        const pages = [
            {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios touchid" }, color: 9552127, title: 'Set up Touch ID on iPhone', description: 'Turn on fingerprint recognition\n\n`1.` If you didn’t turn on fingerprint recognition when you first set up your iPhone, go to Settings  > Touch ID & Passcode.\n\n`2.` Turn on any of the options, then follow the onscreen instructions.\n\nIf you turn on iTunes & App Store, you’re asked for your Apple ID password when you make your first purchase from the App Store, Apple Books, or iTunes Store. When you make your next purchases, you’re asked to use Touch ID.\n\nNote: If you can’t add a fingerprint or unlock your iPhone using Touch ID, see the Apple Support article [If Touch ID isn’t working.](https://support.apple.com/HT207537)\n\nUse the ➡️ button to proceed to page 2.\n' } },
            {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios touchid" }, color: 9552127, title: 'Set up Touch ID on iPhone (2)', description: '__**Add a fingerprint**__\n\n`1.` Go to Settings  > Touch ID & Passcode.\n\n`2.` Tap Add a Fingerprint.\n\n`3.` Follow the onscreen instructions.\n\n__**Name or delete a fingerprint**__\n\n`1.` Go to Settings  > Touch ID & Passcode. If you added more than one fingerprint, place a finger on the Home button to identify its print.\n\n`2`. Tap the fingerprint, then enter a name (such as “Thumb”) or tap Delete Fingerprint.\n\nUse the ⬅️ button to return to page 1.\n' } }
        ]
        
        const defaultPage = 0;
        
        const timeLimit = 15;
        
        const maximumRetries = 3;
        
        const allowOtherUserReactions = false;
        
        let currentPage = 0;
        let currentRetries = 0;
        
        const msg = await message.channel.send(pages[defaultPage]);
  
        await msg.react(emojis.previousPage);
        await msg.react(emojis.nextPage);
  
        const options = {
          emojis,
          pages,
          timeLimit,
          maximumRetries,
          allowOtherUserReactions
        }
  
        await reactionPages(msg, message.author, options, currentPage, currentRetries);
  
    }

    // $ios 2fa guide

    if (message.content === `${prefix}ios 2fa guide`) {

      const emojis = {
        previousPage: '⬅️',
        nextPage: '➡️',
      }
    
      const pages = [
          {  embed: { footer: { text: "This is page 1 of 2. The parent command is $ios 2fa" }, color: 9552127, title: 'title', description: 'enterdesc\n\nUse the ➡️ button to proceed to page 2.\n' } },
          {  embed: { footer: { text: "This is page 2 of 2. The parent command is $ios 2fa" }, color: 9552127, title: 'title (2)', description: 'enterdesc\n\nUse the ⬅️ button to return to page 1.\n' } }
      ]
      
      const defaultPage = 0;
      
      const timeLimit = 15;
      
      const maximumRetries = 3;
      
      const allowOtherUserReactions = false;
      
      let currentPage = 0;
      let currentRetries = 0;
      
      const msg = await message.channel.send(pages[defaultPage]);

      await msg.react(emojis.previousPage);
      await msg.react(emojis.nextPage);

      const options = {
        emojis,
        pages,
        timeLimit,
        maximumRetries,
        allowOtherUserReactions
      }
    }


  // GUIDE COMMAND TEMPLATE

  if (message.content === `${prefix}version3guide`) {

      const emojis = {
        previousPage: '⬅️',
        nextPage: '➡️',
      }
    
      const pages = [
          {  embed: { footer: { text: "This is page 1 of 2. The parent command is $parent" }, color: 9552127, title: 'title', description: 'enterdesc\n\nUse the ➡️ button to proceed to page 2.\n' } },
          {  embed: { footer: { text: "This is page 2 of 2. The parent command is $parent" }, color: 9552127, title: 'title (2)', description: 'enterdesc\n\nUse the ⬅️ button to return to page 1.\n' } }
      ]
      
      const defaultPage = 0;
      
      const timeLimit = 15;
      
      const maximumRetries = 3;
      
      const allowOtherUserReactions = false;
      
      let currentPage = 0;
      let currentRetries = 0;
      
      const msg = await message.channel.send(pages[defaultPage]);

      await msg.react(emojis.previousPage);
      await msg.react(emojis.nextPage);

      const options = {
        emojis,
        pages,
        timeLimit,
        maximumRetries,
        allowOtherUserReactions
      }

      await reactionPages(msg, message.author, options, currentPage, currentRetries);

  }

  


});

// END PAGES CMD


client.login(process.env.ID);
// THE STATS IOS

const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

client.on("message", async message => {
 if(message.author.bot) return;

// HELP COMMANDS

// CENTRAL HELP

 if (message.content.toLowerCase() === `${prefix}help`) {
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

// IOS

 if (message.content.toLowerCase() === `${prefix}help ios`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "iOS Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$ios` - iOS version\n`$ios 2fa` - iOS 2FA\n`$ios alock` - iOS Activation Lock\n`$ios appdl` - App download issues\n`$ios ar` - iOS Account Recovery\n`$ios backuprestore` - Restore from backup\n`$ios battery` - iOS Battery Guide\n`$ios beta` - iOS Beta\n`$ios bypass` - ALock bypass\n`$ios downgrade` - iOS downgrade\n`$ios faceid` - iOS Face ID\n`$ios factoryrestore` - Restore to factory\n`$ios other` iOS 'Other bloat\n`$ios passcode` - iOS passcode\n`$ios touchid` - iOS Touch ID\n\nAdd `guide` for instructions.\nEx: `$ios 2fa guide`"
        }
      ],
      footer: {
        text: "Version: 3.0.1 | Build 0X8902"
    }
  }
  });
  }

// IPHONE

 if (message.content.toLowerCase() === `${prefix}help iphone`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "iPhone Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$ios` - iOS version\n`$ios 2fa` - iOS 2FA\n`$ios alock` - iOS Activation Lock\n`$ios appdl` - App download issues\n`$ios ar` - iOS Account Recovery\n`$ios backuprestore` - Restore from backup\n`$ios battery` - iOS Battery Guide\n`$ios beta` - iOS Beta\n`$ios bypass` - ALock bypass\n`$ios downgrade` - iOS downgrade\n`$ios faceid` - iOS Face ID\n`$ios factoryrestore` - Restore to factory\n`$ios other` iOS 'Other bloat\n`$ios passcode` - iOS passcode\n`$ios touchid` - iOS Touch ID\n\nAdd `guide` for instructions.\nEx: `$ios 2fa guide`"
        }
      ],
      footer: {
        text: "Version: 3.0.1 | Build 0X8902"
    }
  }
  });
  }

  // JAILBREAK

 if (message.content.toLowerCase() === `${prefix}help jailbreak`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "iPhone Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$ios` - iOS version\n`$ios 2fa` - iOS 2FA\n`$ios alock` - iOS Activation Lock\n`$ios appdl` - App download issues\n`$ios ar` - iOS Account Recovery\n`$ios backuprestore` - Restore from backup\n`$ios battery` - iOS Battery Guide\n`$ios beta` - iOS Beta\n`$ios bypass` - ALock bypass\n`$ios downgrade` - iOS downgrade\n`$ios faceid` - iOS Face ID\n`$ios factoryrestore` - Restore to factory\n`$ios other` iOS 'Other bloat\n`$ios passcode` - iOS passcode\n`$ios touchid` - iOS Touch ID\n\nAdd `guide` for instructions.\nEx: `$ios 2fa guide`"
        }
      ],
      footer: {
        text: "Version: 3.0.1 | Build 0X8902"
    }
  }
  });
  }

  // ICLOUD

 if (message.content.toLowerCase() === `${prefix}help icloud`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "iPhone Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$ios` - iOS version\n`$ios 2fa` - iOS 2FA\n`$ios alock` - iOS Activation Lock\n`$ios appdl` - App download issues\n`$ios ar` - iOS Account Recovery\n`$ios backuprestore` - Restore from backup\n`$ios battery` - iOS Battery Guide\n`$ios beta` - iOS Beta\n`$ios bypass` - ALock bypass\n`$ios downgrade` - iOS downgrade\n`$ios faceid` - iOS Face ID\n`$ios factoryrestore` - Restore to factory\n`$ios other` iOS 'Other bloat\n`$ios passcode` - iOS passcode\n`$ios touchid` - iOS Touch ID\n\nAdd `guide` for instructions.\nEx: `$ios 2fa guide`"
        }
      ],
      footer: {
        text: "Version: 3.0.1 | Build 0X8902"
    }
  }
  });
  }

  // OTHER

 if (message.content.toLowerCase() === `${prefix}help other`) {
    message.channel.send({embed: {
      color: 9552127,
      title: "iPhone Assistance",
      fields: [{
          name: "All help topics:",
          value: "\n`$ios` - iOS version\n`$ios 2fa` - iOS 2FA\n`$ios alock` - iOS Activation Lock\n`$ios appdl` - App download issues\n`$ios ar` - iOS Account Recovery\n`$ios backuprestore` - Restore from backup\n`$ios battery` - iOS Battery Guide\n`$ios beta` - iOS Beta\n`$ios bypass` - ALock bypass\n`$ios downgrade` - iOS downgrade\n`$ios faceid` - iOS Face ID\n`$ios factoryrestore` - Restore to factory\n`$ios other` iOS 'Other bloat\n`$ios passcode` - iOS passcode\n`$ios touchid` - iOS Touch ID\n\nAdd `guide` for instructions.\nEx: `$ios 2fa guide`"
        }
      ],
      footer: {
        text: "Version: 3.0.1 | Build 0X8902"
    }
  }
  });
  }


// ALL IOS COMMANDS ($ios command)

 if (message.content.toLowerCase() === `${prefix}ios passcode`) {
    message.channel.send("For better security, set a passcode that needs to be entered to unlock iPhone when you turn it on or wake it. Setting a passcode turns on data protection, which encrypts your iPhone data with 256-bit AES encryption. (Some apps may opt out of using data protection.) <https://support.apple.com/en-ca/guide/iphone/iph14a867ae/ios>");
  }

 if (message.content.toLowerCase() === `${prefix}ios faceid`) {
    message.channel.send("Use Face ID (supported models: ) to unlock iPhone, authorize purchases and payments, and sign in to many third-party apps by simply glancing at your iPhone. To use Face ID, you must also set up a passcode on your iPhone. <https://support.apple.com/en-ca/guide/iphone/iph6d162927a/ios>");
  }
  
 if (message.content.toLowerCase() === `${prefix}ios touchid`) {
    message.channel.send("Use Touch ID (supported models) to unlock iPhone, authorize purchases and payments, and sign in to many third-party apps by pressing the Home button with your finger or thumb. To use Touch ID, you must also set up a passcode on your iPhone. <https://support.apple.com/en-ca/guide/iphone/iph672384a0b/ios>");
  }

 if (message.content.toLowerCase() === `${prefix}ios 2fa`) {
    message.channel.send("Two-factor authentication helps prevent others from accessing your Apple ID account, even if they know your Apple ID password. Two-factor authentication is built into iOS 9, iPadOS 13, OS X 10.11, or later. <https://support.apple.com/en-ca/guide/iphone/iphd709a3c46/ios>");
  }

 if (message.content.toLowerCase() === `${prefix}ios alock`) {
    message.channel.send("See <https://support.apple.com/en-us/HT201441>. If the __Activation Lock__ placed on a device you have purchased or one that has come into your possession **cannot** be removed by the previous owner, you must contact your local Apple Store (<https://www.apple.com/retail/>) with proof of purchase.");
  }

 if (message.content.toLowerCase() === `${prefix}ios appdl`) {
    message.channel.send("If you want to update apps, you can update them manually or turn on automatic updates (<https://support.apple.com/en-ca/HT202180>) But if your app won't update or is interrupted while it's downloading, try the steps at <https://support.apple.com/en-us/HT207165>.");
  }
  
 if (message.content.toLowerCase() === `${prefix}ios ar`) {
    message.channel.send("Account recovery is a process designed to get you back into your Apple ID account when you don’t have enough information to reset your password. For security reasons, it might take several days or longer before you can use your account again. <https://support.apple.com/en-us/HT204921>");
  }

 if (message.content.toLowerCase() === `${prefix}ios backuprestore`) {
    message.channel.send("A device can be **restored** through an __iCloud backup__ or __local (computer) backup__, by following instructions at <https://support.apple.com/en-us/HT204184>.");
  }

 if (message.content.toLowerCase() === `${prefix}ios battery`) {
    message.channel.send("https://support.apple.com/en-us/HT208387");
  }

 if (message.content.toLowerCase() === `${prefix}ios battery guide`) {
    message.channel.send("__Battery health guide for iPhones:__ \n- iPhones 5/5S/SE: **90-93%** and less is degraded beyond reasonable usability. \n- iPhones 6/6S/7/8/SE2020 **85-90%** and less is degraded beyond reasonable usability. \n- iPhones 6+/6S+/7+/8+/X/X **80-85%** and less is degraded beyond reasonable usability. \n- XR/XSM/11/11P/11PM - **80% and lower** is generally degraded (Apple recommendation) \n\n*From experience this seems to line up roughly with when people start to complain with batteries and roughly when they could experience shutdowns, throttle, misreporting battery percent, etc. For more info, see <https://support.apple.com/en-us/HT208387>*");
  }

 if (message.content.toLowerCase() === `${prefix}ios bypass`) {
    message.channel.send("There is **no way** to bypass iCloud unlock.\n For __Activation Lock__, see <https://support.apple.com/en-us/HT201441>");
  }

 if (message.content.toLowerCase() === `${prefix}ios bypass guide`) {
    message.channel.send("There is **no way** to bypass iCloud unlock.\n For __Activation Lock__, see <https://support.apple.com/en-us/HT201441>");
  }

 if (message.content.toLowerCase() === `${prefix}ios bypasshack`) {
    message.channel.send("https://i.imgur.com/tatd6yS.png");
  }

 if (message.content.toLowerCase() === `${prefix}ios downgrade`) {
    message.channel.send("iOS Developer & Public __Betas__ can be uninstalled by following the instructions at <https://support.apple.com/en-us/HT203282#beta>. An __iCloud backup__ is highly recommended.");
  }

 if (message.content.toLowerCase() === `${prefix}ios factoryrestore`) {
    message.channel.send("A __factory restore__ erases the information and settings on your iPhone, iPad, or iPod and installs the latest version of iOS, iPadOS, or iPod software. Follow the steps at <https://support.apple.com/en-us/HT201252>.");
  }

 if (message.content.toLowerCase() === `${prefix}ios other`) {
    message.channel.send("__**Other** storage unusually high is currently classified as this by Apple:__ \n\n> Non-removable mobile assets, like Siri voices, fonts, dictionaries, non-removable logs and caches, Spotlight index, and system data, such as Keychain and CloudKit Database. Cached files can't be deleted by the system.\n\n You can read more at <https://support.apple.com/en-us/HT201656> \n\n__The only known method to solve this issue is as follows:__ \n1) Backup your iPhone to **iCloud**. Note: you **cannot** use iTunes of Finder as high 'Other' storage will return. (<https://support.apple.com/en-us/HT203977>) \n2) Restore your phone to **factory settings** using iTunes or Finder on a computer. (<https://support.apple.com/en-us/HT201252>) \n3) Wait for the restore to finish, then you can safely restore from your **iCloud backup**. (<https://support.apple.com/en-us/HT204184>)");
  }

 if (message.content.toLowerCase() === `${prefix}ios beta`) {
    message.channel.send("input");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 5s`) {
    message.channel.send("The **iPhone 5S** (`A1457 (Middle East); A1518, A1528 (China); A1530 (Asia Pacific); A1533 (North America, China); A1453 (North America, Japan)`) is Apple's 7th Generation smartphone released on **September 20, 2013**. Predecessor: **iPhone 5**, Successor: **iPhone 6, iPhone 6 Plus**. Colours: Space Gray, Silver, Gold. Storage configurations: 16, 32, 64 GB. <https://en.wikipedia.org/wiki/IPhone_5S>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6`) {
    message.channel.send("The **iPhone 6** (`A1549 (North America);  A1586 (Global);  A1589 (China)`) is Apple's 8th Generation smartphone released on **September 19, 2014**. Predecessor: **iPhone 5S, iPhone 5C**, Successor: **iPhone 6S, iPhone 6S Plus**. Colours: Space Grey, Silver, Gold. Storage configurations: 16, 32, 64, 128 GB. <https://en.wikipedia.org/wiki/IPhone_6>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6 plus`) {
    message.channel.send("The **iPhone 6 Plus** (`A1522 (North America);  A1524 (Global);  A1593 (China);`) is Apple's 8th Generation smartphone released on **September 19, 2014**. Predecessor: **iPhone 5S, iPhone 5C**, Successor: **iPhone 6S, iPhone 6S Plus**. Colours: Space Grey, Silver, Gold. Storage configurations: 16, 64, 128 GB. <https://en.wikipedia.org/wiki/IPhone_6>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6s`) {
    message.channel.send("The **iPhone 6S** (`A1633 (North America) A1688 (International) A1700 (China)`) is Apple's 9th Generation smartphone released on **September 25, 2015**. Predecessor: **iPhone 6, iPhone 6 Plus**, Successor: **iPhone 7, iPhone 7 Plus**. Colours: Space Gray, Silver, Gold, Rose Gold. Storage configurations: 16, 32, 64, 128GB. <https://en.wikipedia.org/wiki/IPhone_6S>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 6s plus`) {
    message.channel.send("The **iPhone 6S Plus** (`A1634 (North America) A1687 (International) A1699 (China)`) is Apple's 9th Generation smartphone released on **September 25, 2015**. Predecessor: **iPhone 6, iPhone 6 Plus**, Successor: **iPhone 7, iPhone 7 Plus**. Colours: Space Gray, Silver, Gold, Rose Gold. Storage configurations: 16, 32, 64, 128GB. <https://en.wikipedia.org/wiki/IPhone_6S>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone se`) {
    message.channel.send("The **iPhone SE** (`A1662 (US model) A1723 (Sprint and in most countries) A1724 (China Mobile model)`) is Apple's 9th Generation smartphone released on **March 31, 2016**. Predecessor: **iPhone 5S**, Successor: **iPhone SE**. Colours: Space Gray, Silver, Gold, Rose Gold. Storage configurations: 16, 32, 64, 128GB. <https://en.wikipedia.org/wiki/IPhone_SE_(1st_generation)>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 7`) {
    message.channel.send("The **iPhone 7** (`A1660 (with Qualcomm modem) A1778 (with Intel modem)  A1779 (sold in Japan)`) is Apple's 10th Generation smartphone released on **September 16, 2016**. Predecessor: **iPhone 6S, iPhone 6S Plus**, Successor: **iPhone 8, iPhone 8 Plus**. Colours: Black, Jet Black, Silver, Gold, Rose Gold, (Product) RED. Storage configurations: 32, 128, or 256 GB. <https://en.wikipedia.org/wiki/IPhone_7>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 7 plus`) {
    message.channel.send("The **iPhone 7 Plus** (`A1661 (with Qualcomm modem) A1784 (with Intel modem)  A1785 (sold in Japan)`) is Apple's 10th Generation smartphone released on **September 16, 2016**. Predecessor: **iPhone 6S, iPhone 6S Plus**, Successor: **iPhone 8, iPhone 8 Plus**. Colours: Black, Jet Black, Silver, Gold, Rose Gold, (Product) RED. Storage configurations: 32, 128, or 256 GB. <https://en.wikipedia.org/wiki/IPhone_7>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 8`) {
    message.channel.send("The **iPhone 8** (`A1863 (with Qualcomm modem) A1905 (with Intel modem) A1906 (sold in Japan)`) is Apple's 11th Generation smartphone released on **September 22, 2017**. Predecessor: **iPhone 7, iPhone 7 Plus**, Successor: **iPhone X, iPhone SE 2020**. Colours: Space Gray, Silver, Gold, (Product) RED. Storage configurations: 62, 128, 246 GB [Discontinued 09/10/19]. <https://en.wikipedia.org/wiki/IPhone_8>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone 8 plus`) {
    message.channel.send("The **iPhone 8 Plus** (`A1864 (with Qualcomm modem) A1897 (with Intel modem) A1898 (sold in Japan)`) is Apple's 11th Generation smartphone released on **September 22, 2017**. Predecessor: **iPhone 7, iPhone 7 Plus**, Successor: **iPhone X, iPhone SE 2020**. Colours: Space Gray, Silver, Gold, (Product) RED. Storage configurations: 62, 128, 246 GB [Discontinued 09/10/19]. <https://en.wikipedia.org/wiki/IPhone_8>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone s`) {
    message.channel.send("The **iPhone X** (`A1865 (with Qualcomm modem) A1901 (with Intel modem) A1902 (sold in Japan`) is Apple's 11th Generation smartphone released on **November 3, 2017**. Predecessor: **iPhone 7, iPhone 7 Plus**, Successor: **iPhone XS, iPhone XS Max**. Colours: Space Gray, Silver. Storage configurations: 64, 256 GB. <https://en.wikipedia.org/wiki/IPhone_X>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone xs`) {
    message.channel.send("The **iPhone XS** (`A1920, A2097, A2098 (Japan), A2100 (China)`) is Apple's 12th Generation smartphone released on **September 21, 2018**. Predecessor: **iPhone X**, Successor: **iPhone 11 Pro, iPhone 11 Pro Max**. Colours: Silver, Space Gray, Gold. Storage configurations: 64, 256, or 512 GB. <https://en.wikipedia.org/wiki/IPhone_XS>.");
  }

 if (message.content.toLowerCase() === `${prefix}iphone xs max`) {
    message.channel.send("The **iPhone XS Max** (`A1921, A2101, A2102 (Japan), A2104 (China)`) is Apple's 12th Generation smartphone released on **September 21, 2018**. Predecessor: **iPhone X**, Successor: **iPhone 11 Pro, iPhone 11 Pro Max**. Colours: Silver, Space Gray, Gold. Storage configurations: 64, 256, or 512 GB. <https://en.wikipedia.org/wiki/IPhone_XS>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone xr`) {
    message.channel.send("The **iPhone XR** (`VERSIONS`) is Apple's th Generation smartphone released on **Date**. Predecessor: **Model**, Successor: **Model**. Colours: Insert. Storage configurations: Insert. <LINK>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone 11`) {
    message.channel.send("The **iPhone 11** (`VERSIONS`) is Apple's th Generation smartphone released on **Date**. Predecessor: **Model**, Successor: **Model**. Colours: Insert. Storage configurations: Insert. <LINK>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone 11 pro`) {
    message.channel.send("The **iPhone 11 Pro** (`VERSIONS`) is Apple's th Generation smartphone released on **Date**. Predecessor: **Model**, Successor: **Model**. Colours: Insert. Storage configurations: Insert. <LINK>.");
  }
  
  if (message.content.toLowerCase() === `${prefix}iphone 11 pro max`) {
    message.channel.send("The **iPhone 11 Pro Max** (`VERSIONS`) is Apple's th Generation smartphone released on **Date**. Predecessor: **Model**, Successor: **Model**. Colours: Insert. Storage configurations: Insert. <LINK>.");
  }

  if (message.content.toLowerCase() === `${prefix}iphone se 2020`) {
    message.channel.send("The **iPhone SE 2020** (`VERSIONS`) is Apple's th Generation smartphone released on **Date**. Predecessor: **Model**, Successor: **Model**. Colours: Insert. Storage configurations: Insert. <LINK>.");
  }

// ALL JAILBREAK COMMANDS ($jailbreak command)



// ALL ICLOUD COMMANDS ($icloud command)



// ALL OTHER COMMANDS ($info, $help, $version, $credits, $invite)

// HELP 


////// ALL IOS GUIDE COMMANDS ($ios command)
////// ALL ICLOUD GUIDE COMMANDS ($icloud command)


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
  
    if (message.content.toLowerCase() === `${prefix}backuprestorehow`) {
  
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
  

// GUIDE COMPRESSION IN VSCODE

  // $ios passcode guide
  
  client.on('message', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    if (message.content.toLowerCase() === `${prefix}ios passcode guide`) {
  
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
  
    if (message.content.toLowerCase() === `${prefix}ios faceid guide`) {
  
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
  
      if (message.content.toLowerCase() === `${prefix}ios touchid guide`) {
    
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
  
      if (message.content.toLowerCase() === `${prefix}ios 2fa guide`) {
  
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
  
    if (message.content.toLowerCase() === `${prefix}version3guide`) {
  
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
  
  // END $ios passcode guide 
  
// OS COMMANDS

client.on("message", async message => {
    if(message.author.bot) return;


    if (message.content.toLowerCase() === `${prefix}ios`) {
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

  if (message.content.toLowerCase() === `${prefix}watchos`) {
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
});

  client.login(process.env.ID);

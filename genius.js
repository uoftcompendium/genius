const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {

    console.log('I am ready!');
});


client.on("message", async message => {
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

module.exports = {
    name: 'page',
    description: 'test',
    execute(message, args) {
        
        let pages = [];
        let page =1;

        const embed = new Discord.MessageEmbed()
        .setColor(0xffffff)
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages [page-1])

    message.channel.send(embed).then(msg => {
    
        msg.react('👈').then(r => {
            msg.react('👉')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '👈' &&user.id === message.author.id;
            const forwardsFilter =  (reaction, user) => reaction.emoji.name === '👉' &&user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000});
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000});

            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages [page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })

            forwards.on('collect', r => {
                if (page === 1) return;
                page++;
                embed.setDescription(pages [page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
            })
        };
    })
    }
}
  
  if(command === "ping") {
    const m = await message.channel.send("Recalculating...");
    m.edit(`Latency \`${m.createdTimestamp - message.createdTimestamp}ms\`. API Latency \`${Math.round(client.ping)}ms\`.`);
  }

  if (message.content === '$invite') {
      message.react('732342713055182898');
      message.author.sendMessage("Invite **Genius** to your server through <https://discord.com/oauth2/authorize?client_id=731603315032326235&scope=bot&permissions=2112>.");
      message.channel.send("An invite has been issued via DM.");
  }
    
  if(command === "say") {

    if(!message.member.roles.some(r=>["Support Team"].includes(r.name)) )
      return message.channel.send("you have no power here");    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

  msg = message.content.toLowerCase();
  if (message.author.bot) return;
  mention = message.mentions.users.first();
  if(command === "notify") {
    if(!message.member.roles.some(r=>["Owner"].includes(r.name)) )
      return message.reply("you have no power here");    const sayMessage = args.join(" ");
      mentionMessage = message.content.slice(8).split(' ')
      mentionMessage.shift()
      mentionMessage = mentionMessage.join(' ')
      mention.sendMessage (mentionMessage);
      message.channel.send ("Notified!");
      console.log(mentionMessage);

  }

  if(command === "commands") {
    const sayMessage = args.join(" ");
    message.channel.send("```bash\n ----- iOS & iPhone ----- \n$alock # activation lock \n$appdl # app not downloading/updating \n$ar # account recovery \n$backuprestore # restore from backup \n$battery # battery health guide \n$batterysite # battery website \n$bypass # iCloud bypass \n$bypasshack # it's hack time \n$dfu # DFU mode guide \n$downgrade # how to get rid of betas \n$factoryrestore # factory restore \n$ios # iOS version & stats \n$iphone7 # issues with iPhone 7 \n$other # 'other' storage bloat \n$storage # iCloud storage pricing \n----- Jailbreak ----- \n$checkrain # checkra1n jailbreak info \n$jailbreak # what is jailbreak \n$snapjb # snapchat jailbreak fix \n$uncover # unc0ver jailbreak info \n----- Apple Watch ----- \n$awbeta # applewatch beta guide \n$watchosbeta # should i install? NO \n$watchos # watchOS version & stats \n----- Other ----- \n$info # credits & information \n$commands # list of all commands \n$invite # invite Genius \n$version # version number ```");
  }
    
  if(command === "bypass") {
    const sayMessage = args.join(" ");
    message.channel.send("There is **no way** to bypass iCloud unlock.\n For __Activation Lock__, see <https://support.apple.com/en-us/HT201441>");
  }
    
  if(command === "alock") {
    const sayMessage = args.join(" ");
    message.channel.send("See <https://support.apple.com/en-us/HT201441>. If the __Activation Lock__ placed on a device you have purchased or one that has come into your possession **cannot** be removed by the previous owner, you must contact your local Apple Store (<https://www.apple.com/retail/>) with proof of purchase.");
  }
    
  if(command === "other") {
    const sayMessage = args.join(" ");
    message.channel.send("__**Other** storage unusually high is currently classified as this by Apple:__ \n\n> Non-removable mobile assets, like Siri voices, fonts, dictionaries, non-removable logs and caches, Spotlight index, and system data, such as Keychain and CloudKit Database. Cached files can't be deleted by the system.\n\n You can read more at <https://support.apple.com/en-us/HT201656> \n\n__The only known method to solve this issue is as follows:__ \n1) Backup your iPhone to **iCloud**. Note: you **cannot** use iTunes of Finder as high 'Other' storage will return. (<https://support.apple.com/en-us/HT203977>) \n2) Restore your phone to **factory settings** using iTunes or Finder on a computer. (<https://support.apple.com/en-us/HT201252>) \n3) Wait for the restore to finish, then you can safely restore from your **iCloud backup**. (<https://support.apple.com/en-us/HT204184>)");
  }
    
  if(command === "ar") {
    const sayMessage = args.join(" ");
    message.channel.send("Account recovery is a process designed to get you back into your Apple ID account when you don’t have enough information to reset your password. For security reasons, it might take several days or longer before you can use your account again. <https://support.apple.com/en-us/HT204921>");
  }
    
  if(command === "batterysite") {
    const sayMessage = args.join(" ");
    message.channel.send("<https://support.apple.com/en-us/HT208387>");
  }
      
  if(command === "appdl") {
    const sayMessage = args.join(" ");
    message.channel.send("If you want to update apps, you can update them manually or turn on automatic updates (<https://support.apple.com/en-ca/HT202180>) But if your app won't update or is interrupted while it's downloading, try the steps at <https://support.apple.com/en-us/HT207165>.");
  }
      
  if(command === "downgrade") {
    const sayMessage = args.join(" ");
    message.channel.send("iOS Developer & Public __Betas__ can be uninstalled by following the instructions at <https://support.apple.com/en-us/HT203282#beta>. An __iCloud backup__ is highly recommended.");
  }
      
  if(command === "backuprestore") {
    const sayMessage = args.join(" ");
    message.channel.send("A device can be **restored** through an __iCloud backup__ or __local (computer) backup__, by following instructions at <https://support.apple.com/en-us/HT204184>.");
  }

      
  if(command === "factoryrestore") {
    const sayMessage = args.join(" ");
    message.channel.send("A __factory restore__ erases the information and settings on your iPhone, iPad, or iPod and installs the latest version of iOS, iPadOS, or iPod software. Follow the steps at <https://support.apple.com/en-us/HT201252>.");
  }

         
  if(command === "battery") {
    const sayMessage = args.join(" ");
    message.channel.send("__Battery health guide for iPhones:__ \n- iPhones 5/5S/SE: **90-93%** and less is degraded beyond reasonable usability. \n- iPhones 6/6S/7/8/SE2020 **85-90%** and less is degraded beyond reasonable usability. \n- iPhones 6+/6S+/7+/8+/X/X **80-85%** and less is degraded beyond reasonable usability. \n- XR/XSM/11/11P/11PM - **80% and lower** is generally degraded (Apple recommendation) \n\n*From experience it seems to line up roughly with when people start to complain with batteries and roughly when they could experience shutdowns, throttle, misreporting battery percent, etc. For more info, see <https://support.apple.com/en-us/HT208387>*");
  }

  if(command === "bypasshack") {
    const sayMessage = args.join(" ");
    message.channel.send("https://i.imgur.com/tatd6yS.png");
  }

    
  if(command === "snapjb") {
    const sayMessage = args.join(" ");
    message.channel.send("__Jailbroken__ iOS devices may fail to work with Snapchat, even if you have the official app, if you have certain ‘tweaks’ installed. These tweaks can compromise the security of your account. **Solutions**: (1) Disabling Cydia Substrate using the “NoSub” tweak, (2) Uninstalling the “xCon” tweak, (3) Using a “jailbroken iOS cleaning app,” like iCleaner, if unofficial apps have been installed and then uninstalled. <https://support.snapchat.com/en-US/article/jailbroken-iphone>");
  }

    
  if(command === "template") {
    const sayMessage = args.join(" ");
    message.channel.send("```js\nif(command === 'template') { \nconst sayMessage = args.join(' '); \nmessage.channel.send('input'); \n}```");
  }

    
  if(command === "storage") {
    const sayMessage = args.join(" ");
    message.channel.send("When you sign up for iCloud, you automatically get 5GB of free storage. If you need more space in iCloud, you can upgrade to a larger storage plan. **USD** pricing: __50GB__ ($0.99), __200GB__ ($2.99), __2TB__ ($9.99), all charged monthly.");
  }

    
  if(command === "checkrain") {
    const sayMessage = args.join(" ");
    message.channel.send("**checkra1n** is a jailbreak tool that relies on the `checkm8` hardware exploit. It is currently working on all iOS versions 12.3 and higher, on devices 5S to X. Current version: `0.10.2`. Install at <https://checkra.in/>");
  }

    
  if(command === "uncover") {
    const sayMessage = args.join(" ");
    message.channel.send("**unc0ver** is a jailbreak tool that relies on a patchable software exploit. It is currently working on all iOS versions between 11.0 and 13.5, on all devices. Current version: `5.2.1`. Install at <https://unc0ver.dev/>");
  }

    
  if(command === "jailbreak") {
    const sayMessage = args.join(" ");
    message.channel.send("__Jailbreaking__ is a method by which your iOS device can bypass Apple's stock restrictions through __hardware__ and __software__-based exploits, unlocking the true potential of your iPhone beyond Apple's closed environment. For tools, type `$checkrain` or `$uncover`.");
  }

  if(command === "version") {
    const sayMessage = args.join(" ");
    message.channel.send("`V. 0.06.1`");
  }


         
  if(command === "info") {
    const sayMessage = args.join(" ");
    message.channel.send("**Genius:tm:** is an Apple support archive assistant with frequently asked questions available upon request. Written in Discord.js by `tank#0001`. Genius contributors: `Isaac#0004`, `Fudge#0001`, `samsscreenrepair#0001`, `FoxRunTime#0346`, `sapphic wallflower#5186`, `Ber#0107`, `BytesAndCoffee#2233`.");
  }
    
  if(command === "dfu") {
    const sayMessage = args.join(" ");
    message.channel.send("__DFU__ or __Device Firmware Upgrade__ mode allows all devices to be restored from any state. Learn more how to enter DFU mode on any device at <https://www.theiphonewiki.com/wiki/DFU_Mode>.");
  }
     
         
  if(command === "watchosbeta") {
    const sayMessage = args.join(" ");
    message.channel.send("Should I install the **watchOS 7** beta on my Apple Watch?\n https://i.imgur.com/kvS0QpT.png");
  }
  

         
  if(command === "awbeta") {
    const sayMessage = args.join(" ");
    message.channel.send("You shouldn’t install the watchOS __Developer__ or __Public__ beta since they are prerelease software not meant the the *general* public. If something goes wrong, you will have to send your Apple Watch back to Apple to get it reset or replaced. Proceed at your own risk through <https://beta.apple.com/sp/betaprogram/>.");
  }


         
  if(command === "iphone7") {
    const sayMessage = args.join(" ");
    message.channel.send("The **iPhone 7** & **iPhone 7 Plus** are plagued with multiple issues that make it a less than economic choice in the current phone climate. It's affected by these __two issues__: \n\n__1)__ '**No Service**' recall, which you can read about at <https://support.apple.com/iphone-7-no-service>. This recall is about to expire, leaving many people soon to have to pay for their own repair. \n\n__2)__ The poor design of the iPhone 7 has caused a **defect with the Audio IC**, causing it to become separated from the board. This could result in loss of multiple  audio features such as calls, speaker phone, voice memos, Siri, etc. The difference between this issue and the last is that Apple refuses to recognize the design flaw, and on top of that, even if you get it repaired, it will happen again. There is __no permanent solution__. \n\n*In short, if you're looking for a budget solution, the iPhone SE 2020 or a used iPhone 8 is an infinitely better choice for your money.*");
  }

         
  if(command === "invitedeprecated") {
    const sayMessage = args.join(" ");
    message.channel.send("`Invite`");
  }

  if(command === "helpdm") {
    const sayMessage = args.join(" ");
    message.react('732342713055182898');
    message.channel.send("Sent via DM!");
    message.author.sendMessage({embed: {
      color: 16746881,
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

  if(command === "help") {
    const sayMessage = args.join(" ");
    message.channel.send({embed: {
      color: 16746881,
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
         
  if(command === "ios") {
    const sayMessage = args.join(" ");
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

  if(command === "watchos") {
    const sayMessage = args.join(" ");
    message.channel.send({embed: {
      color: 16746881,
      title: "watchOS Status",
      fields: [{
          name: "Current distribution",
          value: "watchOS `6.2.6` (`17T620`) R. Jun. 1, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_6). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Distribution V6 Betas",
          value: "watchOS `6.2.8 (4) GM` (`17U63`) R. Jul. 9, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_6). ([Official](https://developer.apple.com/news/releases/))"
        },
        {
          name: "Next watchOS release",
          value: "watchOS `7.0 (2)` (`18R5327h`) R. Jul. 7, 2020\nClick for [previous revisions](https://en.wikipedia.org/wiki/WatchOS#watchOS_7). ([Official](https://developer.apple.com/news/releases/))"
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
 
client.login(process.env.ID);

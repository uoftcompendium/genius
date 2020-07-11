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
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
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
    message.channel.send("__**Other** storage unusually high is currently classified as this by Apple:__ \n\n> Non-removable mobile assets, like Siri voices, fonts, dictionaries, non-removable logs and caches, Spotlight index, and system data, such as Keychain and CloudKit Database. Cached files can't be deleted by the system.\n\n You can read more at <https://support.apple.com/en-us/HT201656> \n\n__The only known method to solve this issue is as follows:__ \n1) Backup your iPhone to **iCloud**. Note: you **cannot** use iTunes of Finer as high 'Other' storage will return. (<https://support.apple.com/en-us/HT203977>) \n2) Restore your phone to **factory settings** using iTunes or Finder on a computer. (<https://support.apple.com/en-us/HT201252>) \n3) Wait for the restore to finish, then you can safely restore from your **iCloud backup**. (<https://support.apple.com/en-us/HT204184>)");
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
      
  if(command === "restore") {
    const sayMessage = args.join(" ");
    message.channel.send("A device can be **restored** through an __iCloud backup__ or __local (computer) backup__, by following instructions at <https://support.apple.com/en-us/HT204184>.");
  }

         
  if(command === "battery") {
    const sayMessage = args.join(" ");
    message.channel.send("__Battery health guide for iPhones:__ \n- iPhones 5/5S/SE: **90-93%** and less is degraded beyond reasonable usability. \n- iPhones 6/6S/7/8/SE2020 **85-90%** and less is degraded beyond reasonable usability. \n- iPhones 6+/6S+/7+/8+/X/X **80-85%** and less is degraded beyond reasonable usability. \n- XR/XSM/11/11P/11PM - **80% and lower** is generally degraded(Apple recommendation) \n\n*From experience it seems to line up roughly with when people start to complain with batteries and roughly when they could experience shutdowns, throttle, misreporting battery percent, etc. For more info, see <https://support.apple.com/en-us/HT208387>*");
  }
         
  if(command === "template") {
    const sayMessage = args.join(" ");
    message.channel.send("input");
  }
     
  
});
 
client.login(process.env.ID);

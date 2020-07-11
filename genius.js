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
    
});
 
client.login(process.env.ID);

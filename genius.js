    const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();



client.on("message", async message => {

  client.user.setPresence({ activity: { name: 'bullying kai' }, status: 'online' })

 if(message.author.bot) return;

// COMMANDS

 if (message.content.toLowerCase().includes(`kailey`)) {
     message.channel.send("cracker");
   }

  if (message.content.toLowerCase().includes(`peter`)) {
     message.channel.send("waiting for bail");
   }

  if (message.content.toLowerCase().includes(`ok`)) {
     message.channel.send("ok");
   }

  if (message.content.toLowerCase().includes(`stfu`)) {
     message.channel.send("<:shutthefuckup:756581516842238174>");
   }

  if (message.content.toLowerCase().includes(`kaischmoney`)) {
     message.channel.send(":speaking_head: KAISCHMONEY :speaking_head:");
   }

  if (message.content.toLowerCase().includes(`poptart`)) {
     message.channel.send("only tank's allowed to say that :neutral_face:");
   }

  if (message.content.toLowerCase().includes(`butterfly`)) {
     message.channel.send(":butterfly:");
   }


  if (message.content.toLowerCase().includes(`zoe`)) {
     message.channel.send("FUCK OHIO :100:");
   }
    
  if (message.content.toLowerCase().includes(`stan`)) {
     message.channel.send("kkb");
   }

  if (message.content.toLowerCase().includes(`mf`)) {
     message.channel.send("mf");
   }

  if (message.content.toLowerCase().includes(`starbucks`)) {
     message.channel.send("its pronounced :sparkles: starbees :sparkles:");
   }

  if (message.content.toLowerCase().includes(`quando`)) {
     message.channel.send("rondo");
   }

  if (message.content.toLowerCase().includes(`:neutral_face:`)) {
     message.channel.send(":neutral_face:");
   }

  if (message.content.toLowerCase().includes(`quit bein cute`)) {
     message.channel.send("<:stopbeingcute:760955473817108491>");
   }


  }

);

  client.login(process.env.ID);


    const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();



client.on("message", async message => {

  client.user.setPresence({ activity: { name: 'bullying kai <3' }, status: 'idle' })

 if(message.author.bot) return;

// COMMANDS

 if (message.content.toLowerCase().includes(`kai`)) {
     message.channel.send("becoming a drainer");
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

  if (message.content.toLowerCase().includes(`😐`)) {
     message.react(`😐`);
   }

  if (message.content.toLowerCase().includes(`bein cute`)) {
     message.channel.send("<:stopbeingcute:760955473817108491>");
   }
    
  if (message.content.toLowerCase().includes(`texas`)) {
     message.channel.send("<:letmeLIVE:756588295483555870>");
   }

  if (message.content.toLowerCase().includes(`canada`)) {
     message.channel.send("candia*");
   }

  if (message.content.toLowerCase().includes(`imy`)) {
     message.channel.send("<a:thinkingofyew:760955701907554365>");
   }

  if (message.content.toLowerCase().includes(`meow`)) {
     message.channel.send("<:yknowmeow:765938527904464946>");
   }

  if (message.content.toLowerCase().includes(`heyyy`)) {
     message.channel.send("haha heyyyy <:heymamas:767063306468327444>");
   }

  if (message.content.toLowerCase().includes(`tank`)) {
     message.channel.send("is not a furry :neutral_face:");
   }

  if (message.content.toLowerCase().includes(`ohio`)) {
     message.channel.send("doesn't exist");
   }

  if (message.content.toLowerCase().includes(`regular`)) {
     message.channel.send("venti guava black iced tea lemonade");
   }

  if (message.content.toLowerCase().includes(`fine`)) {
     message.channel.send("lowkey boutta nut");
   }

  if (message.content.toLowerCase().includes(`lowkey boutta nut`)) {
     message.channel.send(":smirk_cat:");
   }

  if (message.content.toLowerCase().includes(`beabadoobee`)) {
     message.channel.send("who????");
   }

  if (message.content.toLowerCase().includes(`going`)) {
     message.channel.send("to hell :airplane:");
   }

  if (message.content.toLowerCase().includes(`color`)) {
     message.channel.send("colo**u**r");
   }

  if (message.content.toLowerCase().includes(`favorite`)) {
     message.channel.send("favo**u**rite");
   }

  if (message.content.toLowerCase().includes(`ayy`)) {
     message.channel.send("lmao");
   }

  if (message.content.toLowerCase().includes(`kpop`)) {
     message.channel.send("<https://i.imgur.com/yD7d5Ok.png>");
   }

  if (message.content.toLowerCase().includes(`fuck twice`)) {
     message.channel.send("FUCK TWICE:100:");
   }

  if (message.content.toLowerCase().includes(`dhruv`)) {
     message.channel.send("I only spend a couple hours a day on Discord, and it's mostly to make my bots better and better my coding skills. I don't enjoy moderation, honestly. It's difficult with people like you in the server.");
   }

  if (message.content.toLowerCase().includes(`good morning`)) {
     message.channel.send("good morning cuties :blush:");
   }

  if (message.content.toLowerCase().includes(`eddy`)) {
     message.channel.send("government name Edamame");
   }

  if (message.content.toLowerCase().includes(`yah`)) {
     message.channel.send("yeet!");
   }

  if (message.content.toLowerCase().includes(`twice`)) {
     message.author.send("calling paige :telephone:");
   }


  }

);

  client.login(process.env.ID);


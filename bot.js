const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');
 client.user.setGame('LORISSO BOT! 14 F')

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong!');

       }
 
  if (message.content === 'ma rip') {

       message.reply('NON USARE I MIEI MEME MORTALE');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

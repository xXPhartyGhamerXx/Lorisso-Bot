const Discord = require('discord.js');

const client = new Discord.Client();

var prefix = 'lorisso.bot'
 

client.on('ready', () => {

    console.log('I am ready!');
 
 if (message.content === `${prefix}fourteen`) {
	message.channel.send('14');
} else if (message.content === `${prefix}f`) {
	message.channel.send('F');
}
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

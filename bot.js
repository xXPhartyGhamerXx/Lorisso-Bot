const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
 
    console.log('I am ready!');

});

 
client.on('message', message => {
 
  switch(message.content.toUpperCase()) {
        case 'lorisso.bot@riavvia':
            resetBot(message.channel);
            break;

    if (message.content === 'ping') {

       message.reply('pong');

       }
 
 if (message.content === 'lorisso.bot@info') {

       message.reply('\nLorisso Bot v0.0;\n' + 'Host: Heroku;\n' + 'Creato dal grande Lorisso Malefico' + '\nProgrammato in JavaScript');

       }
 if (message.content === 'lorisso.bot@help') {

       message.reply('Eccoti una lista dei comandi:' + '\n lorisso.bot@info (info del bot)' + '\n lorisso.bot@meme Invia dei meme del Lorisso Malefico \n' + 'lorisso.bot@loris Scrive chi è Loris' + '\n lorisso.bot@f Invia una F a te.' +  '\n Per ora il grande Lorisso Malefico è impegnato con i suoi piani malefici quindi non ha programmato altri comandi. \n CIAO!');

       }
 
  if (message.content === 'lorisso.bot@meme') {

       message.reply('\nMA RIIIPPPPPP' + '\nF' + '\nBALCONI' + '\nQUATTORDICENNE PEDOFILO PERVERTITOH');

       }
 
 if (message.content === 'lorisso.bot@loris') {

       message.reply('\nLoris essere persona BELLISSIMAH!11!');

       }
 
  if (message.content === 'lorisso.bot@f') {

       message.reply('F');

       }

});
 
 function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Riavviando...')
    .then(msg => client.destroy())
    .then(() => client.login(<BOT_TOKEN>));
}

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

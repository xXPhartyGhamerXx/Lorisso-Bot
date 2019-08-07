const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
var loris = bot.users.get('467833079298261002');
 loris.send(moment().hour() + ';' + moment().minute() + ':' + 'Lorisso Bot acceso');
            console.log('Ready!');
 bot.user.setActivity("test"); 
});

 
client.on('message', message => {
 

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
   
message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
   
       message.send('F');

       }
 
  if (message.content === 'lorisso.bot@cancella') {

       message.delete()
  .then(msg => console.log(`Deleted message from ${msg.author.username}`))
  .catch(console.error);
       }


});
 
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

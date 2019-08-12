const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {
 
console.log('Pronto');
 
});

 
client.on('message', message => {
 
var memes = Math.floor(Math.random() * 7);
 
    if (message.content === 'ping') {

       message.channel.sendMessage('pong');

       }
 
 if (message.content === 'lorisso.bot@info') {

       message.reply('\nLorisso Bot v0.1;\n' + 'Host: Heroku;\n' + 'Creato dal grande Lorisso Malefico' + '\nProgrammato in JavaScript');

       }
 if (message.content === 'lorisso.bot@help') {

       message.reply('Eccoti una lista dei comandi:' + '\n lorisso.bot@info (info del bot)' + '\n lorisso.bot@meme Invia dei meme del Lorisso Malefico \n' + 'lorisso.bot@loris Scrive chi è Loris' + '\n lorisso.bot@f Invia una F a te.' +  '\n Per ora il grande Lorisso Malefico è impegnato con i suoi piani malefici quindi non ha programmato altri comandi. \n CIAO!');

       }
 
  if (message.content === 'lorisso.bot@meme' && memes === 1) {

       message.channel.sendMessage('\nF');

       }
  if (message.content === 'lorisso.bot@meme' && memes === 2) {

       message.channel.sendMessage('\nQUATTORDICENNE PEDOFILO PERVERTITOH!');

       }
  if (message.content === 'lorisso.bot@meme' && memes === 3) {

       message.channel.sendMessage('\nBALCONE');

       }
  if (message.content === 'lorisso.bot@meme' && memes === 4) {

       message.channel.sendMessage('\nQuattordici');

       }
 if (message.content === 'lorisso.bot@meme' && memes === 5) {

       message.channel.sendMessage('\nFUUUCOH');

       }
 if (message.content === 'lorisso.bot@meme' && memes === 6) {

       message.channel.sendMessage('\nOOF');

       }
 
 if (message.content === 'lorisso.bot@loris') {

       message.reply('\nLoris essere persona BELLISSIMAH!11!');

       }
 
  if (message.content === 'lorisso.bot@f') {
    
    message.channel.sendMessage('F');

       }



});
 
 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret

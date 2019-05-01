import 'dotenv/config';
import Discord from 'discord.js';

const client = new Discord.Client();

client.on('message', msg => {
  console.log(msg);
  if (msg.content.includes('!messias')) {
    msg.channel.send(
      `Olá ${
        msg.author
      }! Eu sou o messias! Nada temas, pois comigo ultrapassarás todos os teus medos!`
    );
  }
});

client.on('ready', () => {
  client.channels
    .find(x => x.name === 'geral')
    .send('O Messias está aqui! Um cristão não teme!');
});

client.login(process.env.TOKEN);

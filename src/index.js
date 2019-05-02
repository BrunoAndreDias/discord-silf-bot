import 'dotenv/config';
import Discord from 'discord.js';

const client = new Discord.Client();

client.on('message', msg => {
  //Prevent from responding to himself
  if (msg.author == client.user) {
    return
  }
  if (msg.content.includes('messias')) {
    msg.channel.send(
      `Olá ${
      msg.author
      }! Eu sou o messias! Nada temas, pois comigo ultrapassarás todos os teus medos!`
    );
  }

  if (msg.content.includes('fapo')) {
    //https://i.ytimg.com/vi/Owj-FUyHlcA/maxresdefault.jpg
    const localFileAttachment = new Discord.Attachment('C:\\Users\\vitor silva\\Desktop\\elfapo.jpg');

    msg.channel.send(
      `Olá ${
      msg.author
      }! Sabias que o El Fapo aka 4funSW ou Fapo é ganda noob? Check this out => `
    );
    msg.channel.send(localFileAttachment);
    msg.channel.send(
      `Agora imagina com quem faz dupla!!`
    );

  }

  if (msg.content.includes('dupla')) {
    const mica = new Discord.Attachment('C:\\Users\\vitor silva\\Desktop\\xpeaker.jpg');

    msg.channel.send(`Tira as tuas conclusões!`);
    msg.channel.send(mica);
  }
});

client.on('ready', () => {
  client.channels
    .find(x => x.name === 'general')
    .send('O Messias está aqui! Um cristão não teme!');
});

client.login(process.env.TOKEN);

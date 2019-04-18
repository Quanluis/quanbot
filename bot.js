const Discord = require('discord.js'); 

require('dotenv').config();

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Im ready');
})

client.on('message', message => {
    if (message.content === "role"){
        message.channel.send(Math.floor(Math.random() * 6) + 1);
    }

})

client.on('message', message => {
    if(message.content === 'ping'){
        message.channel.send('pong')
    }

})

client.login(process.env.TOKEN)
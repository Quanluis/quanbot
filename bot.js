let Discord = require('discord.js'); 

require('dotenv').config();

const http = require('http');
const port = process.env.PORT || 3000;

// this is a simple server

http.createServer().listen(port)

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Im ready');
})

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to Quanhub', ${member}`)
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
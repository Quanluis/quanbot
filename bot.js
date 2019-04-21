let Discord = require('discord.js'); 

// Hidden token, use Dotenv dependecy to hide your personal token

require('dotenv').config();
const token = process.env.TOKEN;

// this is a simple server

const http = require('http');
const port = process.env.PORT || 3000;

http.createServer().listen(port)

// end of server

let pan1 = "./memes/meme1.jpg";
let avatar = './memes/quantisha.jpg';

let crew = ['Jaylen', 'Mario', 'Michael', 'Luis', 'Kirk']

const client = new Discord.Client();

client.on('ready', () => {
    console.log('Im ready')


})

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;
    channel.send(`Welcome to Quanhub', ${member}`)
})

client.on('message', message => {
    if (message.content === "role"){
        message.channel.send(Math.floor(Math.random()* 6) + 1)
        
    }

})
     
client.on( 'message', message => {
    if(message.content === "meme"){
        message.channel.send({files: [pan1]})
         
    }
})

client.on('message', message => {
    if(message.content === 'who dirty?'){
        let randomNig = crew[Math.floor(Math.random()* crew.length)]
        message.channel.send(randomNig)
    }
})

client.on ('message', message => {
    if(message.content === "helllo")
    message.author.send('hello')
})

client.on('message', message => {
    if(message.content === 'ping'){
        message.channel.send('pong')
    }  

})
    
client.login(token);
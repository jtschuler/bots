// Jadon Schuler
// Copyright 2020


const Discord = require('discord.js');
const auth = require('./authorize')
const commandprefix = '-i '


const client = auth.authorize();

client.on('ready', () => {
	console.log("Connected as " + client.user.tag);
})

client.on('message', msg => {
	if (msg.content.substring(0,commandprefix.length) == commandprefix) {
		console.log(msg.content)
		command = msg.content.substring(commandprefix.length);
		if (command === 'ping') {
			msg.reply('pong');
		}
	}
});
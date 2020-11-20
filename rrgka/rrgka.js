// Jadon Schuler
// Copyright 2020


const Discord = require('discord.js');
const auth = require('./authorize')
const commandprefix = 'r-'


const client = auth.authorize();

client.on('ready', () => {
	console.log("Connected as " + client.user.tag);
})

client.on('message', msg => {
	if (msg.content.substring(0,2) == commandprefix) {
		command = msg.content.substring(2);
		if (command === 'ping') {
			msg.reply('pong');
		}
	}
});
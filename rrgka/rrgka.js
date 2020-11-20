// Jadon Schuler
// Copyright 2020


const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');


const client = new Discord.Client();

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

client.login(token);
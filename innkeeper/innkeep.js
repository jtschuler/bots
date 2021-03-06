// Jadon Schuler
// Copyright 2020

const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client;
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}


client.on('ready', () => {
	console.log('Connected as ' + client.user.tag);
	client.user.setActivity(`-i help`);
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	if (!client.commands.has(commandName)) return;
	
	command = client.commands.get(commandName)
	
	if (command.guildOnly && message.channel.type === 'dm') {
		return message.reply('I can\'t execute that command inside DMs!');
	}
	
	if (command.args && !args.length) {
		let reply = 'No arguments provided.';
		
		if(command.usage) reply += '\nUsage: ' + `${prefix} ${command.name} ${command.usage}`;
		
		return message.channel.send(reply);
	}
	
	console.log(`${message.author.username} on ${new Date().toLocaleString()}: ${message.content}`)

	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});

client.login(token);
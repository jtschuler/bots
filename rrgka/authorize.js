// Jadon Schuler
// Copyright 2020

// Authorization File

function authorize() {
	const Discord = require('discord.js');
	const client = new Discord.Client();
	
	// Get your bot's secret token from:
	// https://discordapp.com/developers/applications/
	client.login("NzU2MzcyMTA3MjIyMzE5MTc0.X2Q4aw.6PaljCamBsVkFiw26W5-kTLbFxw");
	
	return client;
}

module.exports = { authorize }
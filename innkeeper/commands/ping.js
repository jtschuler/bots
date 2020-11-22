const { prefix } = require('../config.json');

module.exports = {
	name: 'ping',
	description: 'Ping!',
	args: false,
	guildOnly: true,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
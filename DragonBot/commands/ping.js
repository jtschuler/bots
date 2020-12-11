module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Ping!',
	args: false,
	guildOnly: true,
	execute(message, args) {
		message.channel.send('Pong.');
	},
};
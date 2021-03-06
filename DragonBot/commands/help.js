const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	cooldown: 5,
	description: 'Displays help information',
	args: false,
	usage: '<optional: command name>',
	guildOnly: true,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;
		
		if (!args.length) {
			data.push('Here\'s a list of all my commands:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nYou can send \`${prefix} help [command name]\` to get info on a specific command!`);
			
			return message.channel.send(data, { split: true });
		}
		
		const name = args[0].toLowerCase();
		const command = commands.get(name);
		
		if (!command) {
			return message.reply('I don\'t have that command.');
		}
		
		data.push(`**Name:** ${command.name}`);
		
		if (command.description) data.push(`**Description:** ${command.description}`);
		if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);
		
		message.channel.send(data, { split: true });
	},
};
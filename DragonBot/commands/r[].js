const prefix = process.env.PREFIX;

module.exports = {
	name: 'r[]',
	cooldown: 5,
	description: 'Role removing',
	args: true,
	usage: '<Role Name>',
	guildOnly: true,
	execute(message, args) {
		const role = message.content.slice(3).trim();
		if (role === 'Lewd Box' || role === 'Moderator Box' || role === 'Fancy Box' || role ==='Dragon Bot' || role === 'Bot Box' || role === 'The Big Box™' || role === 'Closed Box')
			return message.reply('I can\'t remove that role! Please talk to a moderator.');
		if (message.member.roles.cache.find(r => r.name === role)) {
			message.member.roles.remove(r);
			return message.reply('Role added!');
		}
		else {
			return message.reply('I\'m sorry, either that role doesn\'t exist or you already don\'t have it.');
		}
	},
};
const prefix = process.env.PREFIX;

module.exports = {
	name: '[]',
	cooldown: 5,
	description: 'Role granting',
	args: true,
	usage: '<Role Name>',
	guildOnly: true,
	execute(message, args) {
		const role = message.content.slice(3).trim();
		if (!(message.member.roles.cache.find(r => r.name === 'Member Box') || role === 'Member Box')) {
			return message.reply('You must have the Member Box role first!');
		}
		
		if (role === 'Lewd Box' || role === 'Moderator Box' || role === 'Fancy Box' || role ==='Dragon Bot' || role === 'Bot Box' || role === 'Closed Box')
			return message.reply('I can\'t grant that role! Please talk to a moderator.');
		if (message.guild.roles.cache.find(r => r.name === role)) {
			message.member.roles.add(r);
			return message.reply('Role added!');
		}
		else {
			return message.reply('I\'m sorry, that role doesn\'t exist.');
		}
	},
};
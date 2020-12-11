// const { host, password, port } = require('../config.json');
const host = process.env.HOST;
const password = process.env.PASSWORD;
const port = process.env.PORT;

const Rcon = require('rcon-client').Rcon;

module.exports = {
	name: 'whitelist',
	cooldown: 5,
	description: 'Whitelists a user to the minecraft server.',
	args: true,
	usage: '<username>',
	guildOnly: true,
	execute(message, args) {
		if(args.length > 1)
			return message.channel.send('Please only provide one argument.');
		
		console.log(host)
		console.log(port)
		console.log(password)
		const rcon = new Rcon({ host: host, port: Number(port), password: password });
		
		rcon.on('authenticated', () => {
			console.log("Rcon authenticated");
		});
 
		rcon.connect().then(() => {
			rcon.send(`whitelist add ${args[0]}`).then(response => {
				message.channel.send(response);
			});
		}).then(() => {
			rcon.end();
		}).catch(err => {
			message.channel.send('Server not running or authentication failure.\n' + err.toString());
		});
	},
};
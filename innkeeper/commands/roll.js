const { prefix } = require('../config.json');

module.exports = {
	name: 'roll',
	description: 'Rolls one to twenty dice of size one to one hundred.',
	args: true,
	usage: '<#d#>',
	guildOnly: true,
	execute(message, args) {
		// Test reg exp for proepr formatting
		var diceRE = /^[1-9]\d*d[1-9]\d*$/;
		if (!diceRE.test(args[0]))
			return message.channel.send('I\'m not sure what you wanted to roll.');
		
		dice = args[0].split('d');
		numDice = dice[0];
		diceType = dice[1];
		
		if (numDice > 20)
			return message.reply('I refuse to roll that many dice.');
			
		if (diceType > 100)
			return message.reply('what kinda weird dice are you tring to roll, mate?')
		
		
		// Generate dice rolls
		var array = generateValues(numDice, diceType);
		const rolls = array[0];
		const total = array[1];
		
		var toPrint = 'Rolls:\n';
		for(i = 0; i < rolls.length; i ++) {
			toPrint += rolls[i] + ', ';
		}
		toPrint = toPrint.slice(0, toPrint.length - 2) + `\n\nTotal: ${total}`;
		
		message.channel.send(toPrint)
	},
};

function generateValues(rolls, maxValue) {
	var array = [];
	total = 0
	for(i = 0; i < rolls; i++) {
		roll = Math.floor(Math.random() * maxValue + 1);
		total += roll;
		array.push(roll);
	}
	
	return [array, total];
}
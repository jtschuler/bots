const { prefix } = require('../config.json');

module.exports = {
	name: 'roll',
	description: 'Rolls one to twenty dice of size one to one hundred, with or without a modifier. Format: #d#+#',
	args: true,
	usage: '<#d#+#>',
	guildOnly: true,
	execute(message, args) {
		// Test reg exp for proepr formatting
		var diceRE = /^[1-9]\d*d[1-9]\d*(\+[1-9]\d*)?$/i;
		if (!diceRE.test(args[0]))
			return message.channel.send('I\'m not sure what you wanted to roll.');
		
		dice = args[0].split(/[d\+]/);
		numDice = dice[0];
		diceType = dice[1];
		modifier = 0;
		if (dice.length == 3)
			modifier = dice[2];
		
		if (numDice > 20)
			return message.reply('I refuse to roll that many dice.');
			
		if (diceType > 500)
			return message.reply('that\'s a little too large for me to handle.')
		
		
		// Generate dice rolls
		var array = generateValues(numDice, diceType, modifier);
		const rolls = array[0];
		const total = array[1];
		
		var toPrint = `Rolling ${numDice}d${diceType}`;
		if (modifier > 0)
			toPrint += ` with modifier +${modifier}`;
			
		toPrint += '...\n\nRolls:\n';
		for(i = 0; i < rolls.length; i ++) {
			toPrint += rolls[i] + ', ';
		}
		toPrint = toPrint.slice(0, toPrint.length - 2) + `\n\nTotal: ${total}`;
		
		message.channel.send(toPrint)
	},
};

function generateValues(rolls, maxValue, modifier) {
	var array = [];
	total = 0
	for(i = 0; i < Number(rolls); i++) {
		roll = Math.floor(Math.random() * Number(maxValue) + 1);
		total += roll + Number(modifier);
		if (modifier > 0)
			roll = String(roll) + `+${modifier}`
		array.push(roll);
	}
	
	return [array, total];
}
module.exports = {
	name: 'roll',
	description: 'Rolls the dice in the arguments',
	args: true,
	usage: 'roll <#d#>',
	guildOnly: true,
	execute(message, args) {
		// Test reg exp for proepr formatting
		var diceRE = /^[1-9][0-9]*d[1-9][0-9]*$/;
		if (!diceRE.test(args[0]))
			return message.channel.send(`Improper formatting.`);
		
		dice = args[0].split('d');
		numDice = dice[0];
		diceType = dice[1];
		
		if (numDice > 20)
			return message.reply('I refuse to roll that many dice.');
			
		if (diceType > 100)
			return message.reply('what kinda weird dice are you tring to roll, mate?')
		
		// TODO
		message.channel.send(`You wanted to roll ${numDice} ${diceType}-sided dice!`)
	},
};
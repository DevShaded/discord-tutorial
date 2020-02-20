'use strict';

module.exports = {
  name: 'diceroll',
  description: `Game: Dice roll, returns a number between 1 and 6`,
  execute: async function(client, message, args) {

    let diceArray = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    ];

    let answer = Math.floor(Math.random() * diceArray.length);

      await message.channel.send({
        embed: {
          color: 0x0099ff,
          description: `I threw a dice and it turned out to be **${diceArray[answer]}**.`,
        }
      });
    }
};

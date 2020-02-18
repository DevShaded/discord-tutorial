'use strict';

module.exports = {
    name: 'rps',
    description: `Game: Rock, Paper, Scissors. Return a random message (Rock, Paper or Scissors)`,
    execute: async function (client, message, args){

        let input = args[0].toLowerCase();

        let rpsArray = [
            'rock',
            'paper',
            'scissors'
        ];

        let answer = Math.floor(Math.random() * rpsArray.length);

        let respondMessage;

        if(input === rpsArray[answer]){
            respondMessage = `<@${message.author.id}>, we have a draw. My hand was **${rpsArray[answer]}**.`;

        } else if(input === 'paper' && rpsArray[answer] === 'rock'){

            respondMessage = `<@${message.author.id}>, you won. My hand was **${rpsArray[answer]}**.`;
        } else if(input === 'scissors' && rpsArray[answer] === 'paper'){

            respondMessage = `<@${message.author.id}>, you won. My hand was **${rpsArray[answer]}**.`;
        } else if(input === 'rock' && rpsArray[answer] === 'scissors'){

            respondMessage = `<@${message.author.id}>, you won. My hand was **${rpsArray[answer]}**.`;
        } else if(input === 'paper' && rpsArray[answer] === 'scissors'){

            respondMessage = `<@${message.author.id}>, you lost. My hand was **${rpsArray[answer]}**.`;
        } else if(input === 'scissors' && rpsArray[answer] === 'rock'){

            respondMessage = `<@${message.author.id}>, you lost. My hand was **${rpsArray[answer]}**.`;
        } else if(input === 'rock' && rpsArray[answer] === 'paper'){

            respondMessage = `<@${message.author.id}>, you lost. My hand was **${rpsArray[answer]}**.`;
        }

        await message.channel.send({
            embed: {
                color: 0x0099ff,
                title: 'Rock, Paper, Scissors',
                description: respondMessage,
            }
        });


    }
};

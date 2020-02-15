'use strict';

module.exports = {
    name: '8ball',
    description: `Game: 8ball, return a random message to the user`,
    execute: async function (client, message, args){
        let eightballArray = [
            'It is certain',
            'It is decidedly so',
            'Without a doubt',
            'Yes - definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy, try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Dont count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful'

        ];

        let answer = Math.floor(Math.random() * eightballArray.length);

        message.channel.send({
            embed: {
                color: 0x0099ff,
                description: `🎱 <@${message.author.id}> ${eightballArray[answer]}`,
            }
        });
    }
}

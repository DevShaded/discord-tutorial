'use strict';

module.exports = {
    name: 'server',
    description: `Server: Server info command that outputs whats the server name is and how many mambers there are in the server`,
    execute: async function (client, message) {

        await message.channel.send({
            embed: {
                color:'#FF6000',
                title: `Server Info`,
                description: `Server name: **${message.guild.name}**\nTotal members: **${message.guild.memberCount}**`,
            }
        });
    }
};
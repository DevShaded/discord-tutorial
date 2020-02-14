'use strict';

module.exports = {
    name: 'avatar',
    description: 'displays a picture of a mentioned users avatar',
    execute: async function (client, message, args){

        let member = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (member){
            message.channel.send({
                embed: {
                    color:'#FF6000',
                    image: {
                        url: member.user.displayAvatarURL(),                  
                    },
                }
            });   
        } else {
            message.channel.send({
                embed: {
                    color:'#FF6000',
                    image: {
                        url: message.author.displayAvatarURL(),                  
                    },
                }
            });   
        }
    }        
};

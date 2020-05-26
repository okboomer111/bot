const Discord = require('discord.js');
const MessageEmbed = require('discord.js')

module.exports = (client, member) =>{
	// Send the message to a designated channel on a server:
    const Channel = message.guild.channels.cache.find(ch=>ch.name==="join-leave, leave, welcome")
            
    if (!channel)
	member.send(`Welcome to the server ${member} please read the rule channel and enjoy your journey to our server!`);
	
	let sicon = member.user.displayAvatarURL;
	const serverembed = new MessageEmbed()
		.setColor("#ff0000")
		.setThumbnail(sicon)
        .addField(`${member} Left The Server :()`)
        
        .setFooter(message.member.user.tag + " | bot.orion.fun")

	channel.send(serverembed);
}
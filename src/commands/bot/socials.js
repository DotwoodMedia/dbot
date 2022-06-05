const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    let row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setLabel("Instagram")
                .setURL("https://www.instagram.com/dbot.official/")
                .setStyle("LINK"),

            new Discord.MessageButton()
                .setLabel("TikTok")
                .setURL("https://www.tiktok.com/@dbot.official")
                .setStyle("LINK"),

            new Discord.MessageButton()
                .setLabel("Youtube")
                .setURL("https://www.youtube.com/channel/UCi-6CKG5zZNdmX9frIqvLaQ")
                .setStyle("LINK"),

            new Discord.MessageButton()
                .setLabel("Github")
                .setURL("https://github.com/DotwoodMedia/Dbot")
                .setStyle("LINK"),

            new Discord.MessageButton()
                .setLabel("Website")
                .setURL("https://dbot.dotwood.media/")
                .setStyle("LINK"),
        );

    client.embed({
        title: `${client.user.username}・Social Media`,
        desc: `_____ \n\nFollow us on the social media below!`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        components: [row],
        type: 'editreply'
    }, interaction)
}

// © Dotwood Media | All rights reserved
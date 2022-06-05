const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: "📃・Changelogs",
        desc: `_____`,
        thumbnail: client.user.avatarURL({ size: 1024 }),
        fields: [{
                name: "📢┆Alert!",
                value: 'After more than 1 year we decided to stop Dbot on April 15th, for more information go to [this server](https://discord.gg/techpoint)',
                inline: false,
            },
        ],
        type: 'editreply'
    }, interaction)
}

// © Dotwood Media | All rights reserved
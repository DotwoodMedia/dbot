const Discord = require('discord.js');

module.exports = async (client, interaction, args) => {
    client.embed({
        title: `📘・Owner information`,
        desc: `____________________________`,
        thumbnail: client.user.avatarURL({ dynamic: true, size: 1024 }),
        fields: [{
            name: "👑┆Owner name",
            value: `Pascal`,
            inline: true,
        },
        {
            name: "🏷┆Discord tag",
            value: `</Pascal>#0001`,
            inline: true,
        },
        {
            name: "🏢┆Organization",
            value: `Dotwood Media`,
            inline: true,
        },
        {
            name: "🌐┆Website",
            value: `[https://dotwood.media/](https://dotwood.media/)`,
            inline: true,
        }],
        type: 'editreply'
    }, interaction)
}

// © Dotwood Media | All rights reserved
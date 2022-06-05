const Discord = require('discord.js');

module.exports = async (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isSelectMenu()) return;

        if (interaction.customId == "dbot-helppanel") {
            if (interaction.values == "changelogs-dbothelp") {
                interaction.deferUpdate();

                const row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageSelectMenu()
                            .setCustomId('dbot-helppanel')
                            .setPlaceholder('❌┆Nothing selected')
                            .addOptions([
                                {
                                    label: `Commands`,
                                    description: `Show the commands of Dbot!`,
                                    emoji: "💻",
                                    value: "commands-dbothelp",
                                },
                                {
                                    label: `Invite`,
                                    description: `Invite Dbot to your server`,
                                    emoji: "📨",
                                    value: "invite-dbothelp",
                                },
                                {
                                    label: `Support server`,
                                    description: `Join the suppport server`,
                                    emoji: "❓",
                                    value: "support-dbothelp",
                                },
                                {
                                    label: `Changelogs`,
                                    description: `Show the bot changelogs`,
                                    emoji: "📃",
                                    value: "changelogs-dbothelp",
                                },
                            ]),
                    );

                client.embed({
                    title: "📃・Changelogs",
                    desc: `_____`,
                    thumbnail: client.user.avatarURL({ size: 1024 }),
                    fields: [
           {
                name: "📢┆Alert!",
                value: 'After more than 1 year we decided to stop Dbot on April 15th, for more information go to [this server](https://discord.gg/techpoint)',
                inline: false,
            },
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }
        }
    }).setMaxListeners(0);
}

// © Dotwood Media | All rights reserved
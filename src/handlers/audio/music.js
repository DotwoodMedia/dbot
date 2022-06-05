const Discord = require('discord.js');
const Voice = require('@discordjs/voice');

module.exports = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (interaction.isButton()) {
            if (interaction.customId == "dbot-musicpause") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.pause(true)

                const embedData = interaction.message.embeds[0];

                let row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.previous)
                            .setCustomId("dbot-musicprev")
                            .setStyle("SECONDARY"),

                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.play)
                            .setCustomId("dbot-musicstart")
                            .setStyle("SECONDARY"),

                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.stop)
                            .setCustomId("dbot-musicstop")
                            .setStyle("SECONDARY"),

                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.next)
                            .setCustomId("dbot-musicnext")
                            .setStyle("SECONDARY"),
                    );

                client.embed({
                    title: embedData.title,
                    url: embedData.url,
                    desc: `Music is currently paused`,
                    thumbnail: embedData.thumbnail.url,
                    fields: embedData.fields,
                    components: [row],
                    color: client.config.colors.error,
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "dbot-musicstart") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.pause(false)

                const embedData = interaction.message.embeds[0];

                let row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.previous)
                            .setCustomId("dbot-musicprev")
                            .setStyle("SECONDARY"),

                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.pause)
                            .setCustomId("dbot-musicpause")
                            .setStyle("SECONDARY"),

                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.stop)
                            .setCustomId("dbot-musicstop")
                            .setStyle("SECONDARY"),

                        new Discord.MessageButton()
                            .setEmoji(client.emotes.music.next)
                            .setCustomId("dbot-musicnext")
                            .setStyle("SECONDARY"),
                    );

                client.embed({
                    title: embedData.title,
                    url: embedData.url,
                    desc: `Music is currently resumed`,
                    thumbnail: embedData.thumbnail.url,
                    fields: embedData.fields,
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "dbot-musicstop") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.destroy();

                client.embed({
                    desc: `Music is currently stopped`,
                    color: client.config.colors.error,
                    components: [],
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "dbot-musicnext") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player) return;

                player.stop();

                const track = player.queue.current;

                let row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setEmoji("⏮️")
                            .setCustomId("dbot-musicprev")
                            .setStyle("PRIMARY"),

                        new Discord.MessageButton()
                            .setEmoji("⏸️")
                            .setCustomId("dbot-musicpause")
                            .setStyle("PRIMARY"),

                        new Discord.MessageButton()
                            .setEmoji("⏹️")
                            .setCustomId("dbot-musicstop")
                            .setStyle("PRIMARY"),

                        new Discord.MessageButton()
                            .setEmoji("⏭️")
                            .setCustomId("dbot-musicnext")
                            .setStyle("PRIMARY"),
                    );

                client.embed({
                    title: `${client.emotes.normal.music}・${track.title}`,
                    url: track.uri,
                    desc: `Music started in <#${player.voiceChannel}>!`,
                    thumbnail: track.thumbnail,
                    fields: [
                        {
                            name: `👤┆Requested By`,
                            value: `${track.requester}`,
                            inline: true
                        },
                        {
                            name: `${client.emotes.normal.clock}┆Ends at`,
                            value: `<t:${((Date.now() / 1000) + (track.duration / 1000)).toFixed(0)}:f>`,
                            inline: true
                        },
                        {
                            name: `🎬┆Author`,
                            value: `${track.author}`,
                            inline: true
                        }
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)
            }

            if (interaction.customId == "dbot-musicprev") {
                interaction.deferUpdate();

                const player = client.player.players.get(interaction.guild.id);
                if (!player || !player.queue.previous) return;

                const track = player.queue.previous;

                let row = new Discord.MessageActionRow()
                    .addComponents(
                        new Discord.MessageButton()
                            .setEmoji("⏮️")
                            .setCustomId("dbot-musicprev")
                            .setStyle("PRIMARY"),

                        new Discord.MessageButton()
                            .setEmoji("⏸️")
                            .setCustomId("dbot-musicpause")
                            .setStyle("PRIMARY"),

                        new Discord.MessageButton()
                            .setEmoji("⏹️")
                            .setCustomId("dbot-musicstop")
                            .setStyle("PRIMARY"),

                        new Discord.MessageButton()
                            .setEmoji("⏭️")
                            .setCustomId("dbot-musicnext")
                            .setStyle("PRIMARY"),
                    );

                client.embed({
                    title: `${client.emotes.normal.music}・${track.title}`,
                    url: track.uri,
                    desc: `Music started in <#${player.voiceChannel}>!`,
                    thumbnail: track.thumbnail,
                    fields: [
                        {
                            name: `👤┆Requested By`,
                            value: `${track.requester}`,
                            inline: true
                        },
                        {
                            name: `${client.emotes.normal.clock}┆Ends at`,
                            value: `<t:${((Date.now() / 1000) + (track.duration / 1000)).toFixed(0)}:f>`,
                            inline: true
                        },
                        {
                            name: `🎬┆Author`,
                            value: `${track.author}`,
                            inline: true
                        }
                    ],
                    components: [row],
                    type: 'edit'
                }, interaction.message)

                player.play(player.queue.previous)
            }
        }
    }).setMaxListeners(0);
}

// © Dotwood Media | All rights reserved
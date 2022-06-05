const Discord = require('discord.js');

const Schema = require("../../database/models/stats");

module.exports = async (client, interaction, args) => {
    var channelName = await client.getTemplate(interaction.guild);
    channelName = channelName.replace(`{emoji}`, "👤")
    channelName = channelName.replace(`{name}`, `Members: ${interaction.guild.memberCount.toLocaleString()}`)

    await interaction.guild.channels.create(channelName, {
        type: 'GUILD_VOICE', permissionOverwrites: [
            {
                deny: 'CONNECT',
                id: interaction.guild.id
            },
        ],
    }).then(async (channel) => {
        Schema.findOne({ Guild: interaction.guild.id }, async (err, data) => {
            if (data) {
                data.Members = channel.id;
                data.save();
            }
            else {
                new Schema({
                    Guild: interaction.guild.id,
                    Members: channel.id
                }).save();
            }
        })

        client.succNormal({
            text: `Member count created!`,
            fields: [
                {
                    name: `📘┆Channel`,
                    value: `${channel}`
                }
            ],
            type: 'editreply'
        }, interaction);
    })

}

// © Dotwood Media | All rights reserved
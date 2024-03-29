const { CommandInteraction, Client } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot')
        .setDescription('Information about the bot')
        .addSubcommand(subcommand =>
            subcommand
                .setName('help')
                .setDescription('Get information about the bot category commands')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('info')
                .setDescription('Get information about the bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setDescription('See the bots ping in ms')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('changelogs')
                .setDescription('Get the changelogs of the bot')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('donate')
                .setDescription('Get the Dbot donate link')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('links')
                .setDescription('Get a message with all the Dbot links')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('owner')
                .setDescription('Get info about the owner')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('socials')
                .setDescription('Get the Dbot socials')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('support')
                .setDescription('Get an invite of the support server')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('uptime')
                .setDescription('Show the bot uptime')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('vote')
                .setDescription('See if you have voted')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('feedback')
                .setDescription('Send your opinion about the bot to the developers')
                .addStringOption(option => option.setName("feedback").setDescription("Your feedback").setRequired(true))
        ),

    /** 
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */

    run: async (client, interaction, args) => {
        client.loadSubcommands(client, interaction, args);
    },
};

// © Dotwood Media | All rights reserved
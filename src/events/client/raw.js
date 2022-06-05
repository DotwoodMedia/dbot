const Discord = require('discord.js');

module.exports = async (client, d) => {
    client.player.updateVoiceState(d);
}

// © Dotwood Media | All rights reserved
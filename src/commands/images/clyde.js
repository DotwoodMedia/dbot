module.exports = async (client, interaction, args) => {

    const clydeMessage = interaction.options.getString('text');

    client.embed({
        title: `🖼・Clyde`,
        image: `https://ctk-api.herokuapp.com/clyde/${encodeURIComponent(clydeMessage)}`,
        type: 'editreply'
    }, interaction)
}

// © Dotwood Media | All rights reserved
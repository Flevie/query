require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandlers');

const clientIntents = IntentsBitField.Flags;

const client = new Client({
    intents: [
        clientIntents.Guilds,
        clientIntents.GuildMembers,
        clientIntents.GuildMessages,
        clientIntents.MessageContent,
    ],
});

eventHandler(client);

client.login(process.env.TOKEN)
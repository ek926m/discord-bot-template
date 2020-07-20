
/*
*   add your bot to your server via this link (dont forget to replace your client id)
*   https://discordapp.com/oauth2/authorize?&client_id=1234567890&scope=bot&permissions=8
*   
*/

const BOT_TOKEN = 1234567890; // your bot token (find it under https://discord.com/developers/applications)
const DISCORD_ID = 1234567890; // your discord server id
const LOGS_CHANNEL_ID = 1234567890; // your channel for your bot logs
let LOGS_CHANNEL = null;

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(BOT_TOKEN);

client.on('ready', async () => {
    LOGS_CHANNEL = client.guilds.get(DISCORD_ID).channels.get(LOGS_CHANNEL_ID);
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (msg) => {
    if (msg.content.toLowerCase() === '!hello') {
        LOGS_CHANNEL.send(`HELLO WORLD from ${msg.author.username} (${msg.author.id})`);
        msg.author.send('HELLO WORLD from DISCORD BOT');
        // if you want to delete the message after bot read:
        // if (!(msg.guild === null)) msg.delete();
    }
});

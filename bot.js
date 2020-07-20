
/*
*   PLEASE REPLACE ALL VARIABLES WITH YOUR OWN ID'S AND TOKENS (OTHERWISE IT WILL NOT WORK)
*
*   find your bot token and client id: https://discord.com/developers/applications
*   add your bot to your server via this link (dont forget to replace your client id)
*   https://discordapp.com/oauth2/authorize?&client_id=734765787688206336&scope=bot&permissions=8
*   
*/

const BOT_TOKEN = "NzM0NzY1Nzg3Njg4MjA2MzM2.XxWfUw.mtqCt-z3iQQqyAWS7LwS0EqdGSo";
const DISCORD_ID = "499690739886981123"; // your discord server id
const LOGS_CHANNEL_ID = "499690740423720972"; // your channel for your bot logs
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

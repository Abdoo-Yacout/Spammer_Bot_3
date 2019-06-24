const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592493348841848842")
setInterval(function() {
channel.send(`Life IS Good`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once("ready", () => {
  console.log("Bot online 24h!");
  client.user.setPresence({
    activities: [{ name: "Online 24h \ud83d\udd25" }],
    status: "online"
  });
});

client.login(process.env.TOKEN);

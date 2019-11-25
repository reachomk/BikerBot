const Discord = require("discord.js");
const bot = new Discord.Client();
var functions = require('./functions.js');

require ('dotenv').config();

bot.on("ready", () => {
  console.log("I am alive!");
  client.user.setPresence({ game: { name: "Use .help to see commands. " }, status: 'idle' });
});

bot.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  else if (message.content.startsWith("ding")) {
  	message.channel.send("dong!")
  }
  else{
  	functions.commands(message, bot);
  }
});


bot.login(process.env.BOT_TOKEN);
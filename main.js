const Discord = require("discord.js");
const bot = new Discord.Client();
const deep_thoughts = [
	"\"I guess we were kinda poor when we were kids, but we didn't know it. That's because my dad always refused to let us look at the family's financial records.\" - Jack Handy", 
	"\"Maybe in order to understand mankind, we have to look at the word itself. Basically, it's made up of two separate words — \"mank\" and \"ind.\" What do these words mean? It's a mystery, and that's why so is mankind.\" - Jaq Huundi",
	"\"If you go through a lot of hammers each month, I don't think it necessarily means you're a hard worker. It may just mean that you have a lot to learn about proper hammer maintenance.\" - Jake Handie", 
	"\"It takes a big man to cry, but it takes a bigger man to laugh at that man.\" - Junq Hundei"
];

const pool = mysql.createPool({
  host: process.env.SERVER,
  user: process.env.DATABASE_NAME,
  port: '3306',
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

require ('dotenv').config();
console.log(process.env.BOT_TOKEN);

bot.on("ready", () => {
  console.log("I am alive!");
});

bot.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
  else if (message.content.startsWith("ding")) {
  	message.channel.send("dong!")
  }
  else{
  	commands(message, bot);
  }
});

bot.login(process.env.BOT_TOKEN);

commands = function(message, bot) {
	if (message.content.startsWith("!")) {
		if (message.content.includes("deep_thoughts")) {
			message.channel.send(deep_thoughts[Math.floor(Math.random() * deep_thoughts.length)]);
		}
		if (message.content.includes("history_meme")) { //Stolen from https://github.com/sodiumkid/Dr-Ferrel/blob/13f2bc9329983e579e1ca8b72cd7b5ad5fd0bb37/functions.js#L29
			var random = (Math.floor(Math.random() * Math.floor(527))) + 1
 			var number = "";
 			if (random < 10) {
   				number = "00" + i;
 			}
 			else if (random > 9 && random < 100) {
   				number = "0" + random;
 			}
 			else {
   				number = random;
 			}
 			var imageName = "https://res.cloudinary.com/drferrel/image/upload/v1568689715/memes/meme" + random + ".jpg"
 			message.channel.send({
     		file: imageName
 			});
		}
	}
}
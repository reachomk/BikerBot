const deep_thoughts = [
	"\"I guess we were kinda poor when we were kids, but we didn't know it. That's because my dad always refused to let us look at the family's financial records.\" - Jack Handy", 
	"\"Maybe in order to understand mankind, we have to look at the word itself. Basically, it's made up of two separate words — \"mank\" and \"ind.\" What do these words mean? It's a mystery, and that's why so is mankind.\" - Jaq Huundi",
	"\"If you go through a lot of hammers each month, I don't think it necessarily means you're a hard worker. It may just mean that you have a lot to learn about proper hammer maintenance.\" - Jake Handie", 
	"\"It takes a big man to cry, but it takes a bigger man to laugh at that man.\" - Junq Hundei"
];

exports.commands = function(message, bot) {
	if (message.content.startsWith("!") || message.content.startsWith(".")) {
		if (message.content.includes("deep_thoughts")) {
			message.channel.send(deep_thoughts[Math.floor(Math.random() * deep_thoughts.length)]);
		}
		if (message.content.includes("history_meme")) { 
			history_meme(message, bot);
		}
		if (message.content.includes("kmtomiles")) {
			kmtomiles(message, bot);
		}
		if (message.content.includes("milestokm")) {
			milestokm(message, bot);
		}
		if (message.content.includes("github")) {
			message.channel.send("https://github.com/reachomk/BikerBot");
		}
	}
	else if (message.content.includes("km to miles")) {
		var msg = message.content;
		var msgArr = msg.split(" ");
		var km = parseInt(msgArr[0]);
		kmtomiles(km, message, bot)
	}
	else if (message.content.includes("miles to km")) {
		var msg = message.content;
		var msgArr = msg.split(" ");
		var miles = parseInt(msgArr[0]);
		milestokm(miles, message, bot)
	}
}

history_meme = function(message, bot) { //Stolen from https://github.com/sodiumkid/Dr-Ferrel/blob/13f2bc9329983e579e1ca8b72cd7b5ad5fd0bb37/functions.js#L29
	var random = (Math.floor(Math.random() * Math.floor(527))) + 1
 			var number = "";
 			if (random < 10) {
   				number = "00" + random;
 			}
 			else if (random > 9 && random < 100) {
   				number = "0" + random;
 			}
 			else {
   				number = random;
 			}
 			try {
 				var imageName = "https://res.cloudinary.com/drferrel/image/upload/v1568689715/memes/meme" + random + ".jpg";
 			}
 			catch(exception) {
 				history_meme();
 			}
 			message.channel.send({
     		file: imageName
 			});
}

kmtomiles = function(message, bot) {
	var msg = message.content;
	var msgArr = msg.split(" ");
	var km = parseInt(msgArr[1]);
	message.channel.send(km/1.609 + " miles. ");
}

kmtomiles = function(km, message, bot) {
	//console.log(km);
	message.channel.send(km/1.609 + " miles. ");
}

milestokm = function(message, bot) {
	var msg = message.content;
	var msgArr = msg.split(" ");
	var miles = parseInt(msgArr[1]);
	message.channel.send(miles*1.609 + " km. ");
}

milestokm = function(miles, message, bot) {
	message.channel.send(miles*1.609 + " km. ");
}

module.exports.config = {
	name: "nobra",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "HChong",
	description: "Random ảnh gái nobra ngon vãi lù 😍",
	commandCategory: "random-img",
	usages: "nobra",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	axios.get('https://api.leanhtruong.net/v2/image.php?api_key=leanhtruong&image=nobra').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						attachment: fs.createReadStream(__dirname + `/cache/nobra.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nobra.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/nobra.${ext}`)).on("close", callback);
			})
}
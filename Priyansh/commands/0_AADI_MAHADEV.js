const fs = require("fs");
module.exports.config = {
	name: "mahadev",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐙𝐎𝐘𝐀 𝐊𝐇𝐀𝐍", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Har har mahadev")==0 || event.body.indexOf("har har mahadev")==0 || event.body.indexOf("HAR HAR MAHADEV")==0 || event.body.indexOf("Har Har mahakal")==0) {
		var msg = {
				body: "= 𝐎𝐰𝐧𝐞𝐫 ➻    𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮\n\n< ────────────────── >\n\n🥰 𝐌𝐀𝐈𝐍 𝐓𝐎 𝐃𝐎𝐒𝐓𝐎   𝐊𝐄 𝐃𝐄𝐄𝐖𝐀𝐍𝐄 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐅𝐑𝐈𝐄𝐍𝐃 𝐅𝐎𝐑𝐖𝐕𝐀𝐑 😍 ❤️",
				attachment: fs.createReadStream(__dirname + `/noprefix/ᴴ_ᴬ_ᴿ__ᴴ_ᴬ_ᴿ__ᴹ_ᴬ_ᴴ_ᴬ_ᴰ_ᴱ_ⱽ__🙏🏻_ᴶ_ᴬ_ᴵ__ˢ_ᴴ_ᴵ_ⱽ__ˢ_ᴴ_ᴬ_ᴺ_ᴷ_ᴬ_ᴿ__🥰❣️(360P).mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
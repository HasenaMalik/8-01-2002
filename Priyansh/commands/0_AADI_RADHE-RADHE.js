const fs = require("fs");
module.exports.config = {
        name: "Broken",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "ZOYA BABU",
        description: "THIS BOT IS MR AADI SHARMA",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("radhe radhe") ||
     react.includes("RADHE RADHE") || react.includes("Radhe Radhe") || react.includes("radhe") ||
react.includes("Radhe") ||
react.includes("RADHE")) {
                var msg = {
                                body: `= 𝐎𝐰𝐧𝐞𝐫 ➻  ────  𝐙𝐨𝐲𝐚   𝐁𝐚𝐁𝐮\n\n< ────────────────── >🥰  𝐌𝐀𝐈𝐍 𝐓𝐎 𝐃𝐎𝐒𝐓𝐎 𝐊𝐀 𝐃𝐄𝐄𝐖𝐀𝐍𝐄 𝐇𝐔 𝐏𝐘𝐀𝐑 𝐒𝐄 𝐁𝐎𝐋𝐎 𝐅𝐑𝐈𝐄𝐍𝐃 𝐅𝐎𝐑𝐄𝐕𝐀𝐑 😍 ❤️`,attachment: fs.createReadStream(__dirname + `/noprefix/received_1702063427258615.mp4`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥀", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
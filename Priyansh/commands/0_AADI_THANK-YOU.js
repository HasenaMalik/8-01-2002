const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
                name: "thank-you",
                version: "1.0.1",
                hasPermssion: 0,
                credits: "ZOYA",
                description: "no prefix",
        usePrefix: false,
                commandCategory: "No command marks needed",
                usages: "Yo Yo",
                cooldowns: 5,
};

const gifs = [
                "https://i.imgur.com/UbDUXjq.jpeg",
                "https://i.imgur.com/yR5Limf.jpeg",
                "https://i.imgur.com/ue9cY6t.jpeg",
                "https://i.imgur.com/gOMCMD3.jpeg",
                "https://i.imgur.com/EhrLcDq.jpeg"
];

const messages = [
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n",
                "=𝐎𝐰𝐧𝐞𝐫 ➻ 𝐙𝐨𝐲𝐚 𝐛𝐚𝐛𝐮 \n──────────────────\n\n🙋  🅃🄷🄰🄽🄺  🅈🄾🅄  🙋\n"
];

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
                var { threadID, messageID } = event;
                var name = await Users.getNameUser(event.senderID);

                if (event.body.toLowerCase().startsWith("Wlm") || 
                                event.body.toLowerCase().startsWith("wlm") || 
                                event.body.toLowerCase().startsWith("welcome") || 
                                event.body.toLowerCase().startsWith("Welcome") || 
                                event.body.toLowerCase().startsWith("WELCOME")) { 

                                // Select random GIF and message
                                const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
                                const randomMessage = messages[Math.floor(Math.random() * messages.length)].replace("{name}", name);
                                const downloadPath = path.join(__dirname, 'thank-you-Gif-Images.gif');

                                // Download image from Imgur
                                request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                                                var msg = {
                                                                body: randomMessage,
                                                                attachment: fs.createReadStream(downloadPath)
                                                };
                                                api.sendMessage(msg, threadID, messageID);
                                                api.setMessageReaction("🥺", event.messageID, (err) => {}, true);
                                });
                }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
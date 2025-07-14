const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "version",
    desc: " allmenu",
    category: "allmenu",
    react: "🫅",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
⟣──────────────────⟢
▧ *ᴄʀᴇᴀᴛᴏʀ* : *𝚁𝙰𝙽𝚄𝙼𝙸𝚃𝙷𝙰-𝚇-𝙼𝙳  (🪀)*
▧ *ᴍᴏᴅᴇ* : *${config.MODE}*
▧ *ᴘʀᴇғɪx* : *${config.PREFIX}*
▧ *ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
▧ *ᴠᴇʀsɪᴏɴ* : *V.2* ⚡
▧ *ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}

⟣──────────────────⟢

> ☣️ 𝚁𝙰𝙽𝚄𝙼𝙸𝚃𝙷𝙰-𝚇-𝙼𝙳 ☣️ 

⟣──────────────────⟢
${readMore}
\ CHANNEL🛠️\
https://whatsapp.com/channel/0029Vb6aJYE4Y9lidzolSR2t

\ GROUP\ 👥

[https://chat.whatsapp.com/D85ldBbyEp93Oy8utp0m6m?mode=r_c]

\ 𝚁𝙰𝙽𝚄𝙼𝙸𝚃𝙷𝙰\ *Dev🧑‍💻*

wa.me/+94762095304 ?text=Support!

⟣──────────────────⟢

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/ebcvj0.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401868132010@newsletter',
                        newsletterName: '『 ☣️ 𝚁𝙰𝙽𝚄𝙼𝙸𝚃𝙷𝙰-𝚇-𝙼𝙳 🦖 』',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/m1o47x.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
    

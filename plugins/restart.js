const { cmd } = require("../command");  
const { sleep } = require("../lib/functions");  

cmd({  
    pattern: "restart",  
    desc: "Restart 𝚁𝙰𝙽𝚄𝙼𝙸𝚃𝙷𝙰-𝚇-𝙼𝙳",  
    category: "owner",  
    filename: __filename  
},  
async (conn, mek, m, { reply, isCreator }) => {  
    try {  
        if (!isCreator) {  
            return reply("Only the bot owner can use this command.");  
        }  

        const { exec } = require("child_process");  
        reply("Restarting...");  
        await sleep(1500);  
        exec("pm2 restart all");  
    } catch (e) {  
        console.error(e);  
        reply(`${e}`);  
    }  
});

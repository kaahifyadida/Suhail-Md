const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_35_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgOTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDM0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MixcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDExOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDc1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkwLFxuICAgICAgICAzNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI3LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4NyxcbiAgICAgICAgMTE2LFxuICAgICAgICA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjcsXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAwLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDYyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0LFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MixcbiAgICAgICAgNDksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTIsXG4gICAgICAgIDYxLFxuICAgICAgICA0MixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDYyLFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZjlabzc0WUlWSE1aVnIwaUJ1MHBaU1ZSWFhPaUFINW1aWGFNdGlIS3MyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMzEyNzM1OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkYyQ0MxREQwMkZGMTY2ODZEOUE3Qjk3M0RFRTRFRDFBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcxNTcwMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzIzMTI3MzU5MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQUM5Rjk5NTIxMDFEMDg2QTVDOThERDc4NTMzMTU3Q0JcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzE1NzAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMjMxMjczNTkxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRTVBQjc0NTc5RUUyM0QwRjE4NjRBQjNFNEJFNENEOFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3MTU3MDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMyMzEyNzM1OTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjRDMzY1QUY4N0YxRTU5MjREQjI4N0MxN0UwMTU1MjAxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDcxNTcwNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxQk91dDN2QlRGU2VNTDdBckJxMkx3XCIsXG4gIFwicGhvbmVJZFwiOiBcImJmNTIzOTc2LWRiOTgtNDI4MS1hMTkyLTMzYTRhNTUzNWNhOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxNzAsXG4gICAgICA3MyxcbiAgICAgIDE3MixcbiAgICAgIDIzMixcbiAgICAgIDUxLFxuICAgICAgMjMwLFxuICAgICAgMjQ0LFxuICAgICAgMjE0LFxuICAgICAgMjUyLFxuICAgICAgMjU0LFxuICAgICAgNjEsXG4gICAgICAxMzgsXG4gICAgICA3NCxcbiAgICAgIDEwOCxcbiAgICAgIDI0MSxcbiAgICAgIDY1LFxuICAgICAgMjI0LFxuICAgICAgOTksXG4gICAgICA5NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjQsXG4gICAgICAzOSxcbiAgICAgIDI5LFxuICAgICAgMTY5LFxuICAgICAgMjI0LFxuICAgICAgODEsXG4gICAgICA2NSxcbiAgICAgIDg0LFxuICAgICAgMTI0LFxuICAgICAgNTMsXG4gICAgICA1MyxcbiAgICAgIDE5MSxcbiAgICAgIDE5MixcbiAgICAgIDIwLFxuICAgICAgMTM3LFxuICAgICAgOTAsXG4gICAgICA3MCxcbiAgICAgIDE3OSxcbiAgICAgIDIxNSxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWlBORFRUTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjMxMjczNTkxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI2NzA2NTkxNTEwNTMxNzo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkFzbWEgRG9sbPCfmJpcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJTE43OVVIRUxLVHdMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlY4UEdjTjArTUo0ckRUWHNpSDkxQmxpeForSXhYYnRTamJVRjVZOXBiRTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiR2JOdktHWHdBZGs2Q0x5Ui9OY0Qyc09LcmYvYjNGWURpbFZJVnRCR0xaZytZbWcvMkxMOUxjR0J1S1hNY24rdEp4aEZpTjh2ZnY5TG0vekZHQU5iRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieDMxRGxTUW8xYXJ0TjJlN2RHRDliYm5oZk1PN1B6UzFjT3EwMkt6OFBnSi92UHl0ZkF5bnVEZXN0MUNsMFNQT1lrdHBYQ3EzeFdvb1BPWmNSeUdTQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjMxMjczNTkxOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA3MTU3MDEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPRk1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9GTS5qc29uIjogIntcImtleURhdGFcIjpcImJzNDNlWEdLcmZDWGhlZFdjRU05Uytvb1ZHSk5DNTJNUEhtdysrQlVmTnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA1OTEzNDU5NCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNzE1NzAyMTMzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237698341573";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURzcjNjZk5sUXd2RnRab1FKS1d2bndiYmdHK0VvY1laeHBIOFpyTVVrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1FRQy9zTktyU2l1WjFDYVZOMUo3L3RxeGRsQnVaRHJFdVdCdzVqejh5OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SUsyWFVMRlo3dkRva2F5RVRUdkFlUWlQMFZtUVVMUUlaSDVrbysrRm5FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxTnVOY29UTlNlcUZvZWNyL1YybHoremdkbERoZFQ4THN5ZTJrcVBmaW1vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBOdHRFTkZhaFkzY1Z5cmh1bUtreHQwT09KRHRLNGJpd05pWGNnWm9lMkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZaKytvSTZvOTJhd0Q5QTNPenNsR1BxR1NwWjdmUS8wQjc2TlM1R1l5VUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUtTRzFsU2V5a0hwRUpjeUxlRzBYa0o3UHU1Y2R5TndLVWdId2F5LzhuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmNLYnl2WHo0clhSMzNUa2F1aFlxT0UrRE5Ea0RDeEE1NkpqQk5rSC8zOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik45UjI4eHpqdThrQUpEelgzVzB1c3VqTWpadUhFZThxamxOY29hSEYvNHNPa0RwY0FUTTFVVkVoYnZ3ZUdJY1lHQ0NmaTdreHFMTThPc0lzbXNXK0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6Im9KQTF6YlQ1cm5aSzdkQjMwU3hMNlAvRXg4bVg4aFJObWVPVWIraWNEMzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkZGbEtpNWZXUi1pQ3ZGeUtHcm9ya1EiLCJwaG9uZUlkIjoiMTg4YTdiOWEtYTAzOC00MjJkLWEyNGUtNDcwNDE4MTMzNDM1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZaekg4N29IeGt3TU9CVERSNEVJK2k3SldiVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyVlliZUtYYlhlaUdURzIxeXlpSlRvQllpcVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV1dZNEJNTU4iLCJtZSI6eyJpZCI6IjIzNzY5ODM0MTU3Mzo1OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXlQMHRjQ0VPR0c0cmNHR0JjZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRFBYRjVTNGlxNjUrS25WS1F6YVZ0eC96Wkl0akFkTE55a3pWTkJ1TWRCOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL3RhMUdBTENkYk9qems3Vlk3elhuc2JwdHVVYWRZdHFydEIrckcrbm9kVjYreU1EdStrc2thcFpFaE5EaWRCdWxmSnVKSThiS0xBREhrL2ZzTit5RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InQxc1RjKzJCcFYvaWlIU2VCc0Q1VEo1TDVvVkR5QWZlZDhrQ1UvVTE1TUxYcC9Rb3JEemRWaGdkbU16MGRzbk5QcHkwbE4wWGNkY3VWeEkrc3dqUUNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3Njk4MzQxNTczOjU4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlF6MXhlVXVJcXV1ZmlwMVNrTTJsYmNmODJTTFl3SFN6Y3BNMVRRYmpIUWYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjc1NjI2MDcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTm1SIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞Isaaac🧑🏾‍🦱❤☜`",
  author: process.env.PACK_AUTHER || "Isaac🧑🏾‍🦱❤",
  packname: process.env.PACK_NAME || "Isaac",
  botname: process.env.BOT_NAME || "Isaac-MD-V2",
  ownername: process.env.OWNER_NAME || "☞Isaac🧑🏾‍🦱❤☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Isaac🧑🏾‍🦱❤").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});

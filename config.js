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
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "lightqash.com";
global.website = process.env.GURL || "lightqash.com";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0U2QldwU1dSZmtlY1Q4NUgzbXlMT1ZQUCs2YkFyOU12bUpWMTd2RytXbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0IrWnRQZnJJaFRFZUhXV05uQ3FXb2pjUUd0dGljMTZWQkFhWURYZktHMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxS041ak55ZEJTTm04YmR5aTB0ci9Sa0Z3SjVGbENrMy9nT1dYWmNUdW5BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsNjNQVnVqcmhrcytjNlpuVGJWVE5ieUN1Y3o4ZWROeUJpdTNPVkEzVFRRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVKRE9FNzVidVRzQjBrWEJGRWZ0NHVvZ2RjMHViWnN2NlpxU1FVWnJ1RU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Img5N1l1Nmo0dUo5bjJxVHRsOEJwd1BTVGxjaS9yRTAxM2VNN1dIYkozQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUNhQUk0RG5OSmRJcjJveHhoRW8zWHVRSGxtaUNBMG5FTjlHM2xOMnpXQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieXo3bFpIUEkxZURZRjliR1hCQ1g2OU5wMkpHQTlTQnM2eXVFcVZaR0Nqaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGVUhlMDJ6VHZ4MFlMMXNNU1dNdW5FZFVCUnBHU013RzRIbDZCRUxtbW1ENlRLcWROdDJxR1BzQXFYL1h6SGFLWVFJSTdhaktHZTdtSUdoV0JaeWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJVcS9sWml1RVp0ZFM4bE56WmYzZUVpcjlqUlBEYlNVQUJtaC90a0d6RTFBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpTjM5RjduUVFXT2VacEtteDBNOGJ3IiwicGhvbmVJZCI6IjE4OWMzNTZjLWU0NTktNDhlZC1hM2IyLWI4M2NjYTQ3ZDhhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWaFpoQTdyb1ZMK2F2K0pucmdQSzBEbUs4Y3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkVuL29rMThiZEVUclRnd1VHczFMTzJ2K1V3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFTVFZKWE1WIiwibWUiOnsiaWQiOiIyMzc2OTgzNDE1NzM6NzBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5UDB0Y0NFUGp4dTdnR0dDUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRQWEY1UzRpcTY1K0tuVktRemFWdHgvelpJdGpBZExOeWt6Vk5CdU1kQjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ikd4MUN2NVBWRDVURm5WRm0vMktDZm1PVnVRWEZNbFdCbFNoV1ArS0U1NHFXdFdyYXN4Y1BhYms1Vm42WVY1aU81bFN5ZmhjTytabWFBdUlZSFVmQ0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3cmNZMU9uSyt5VldsejVCSjk2OHZzT0JxS3ZUaERORUpvbk95bVE1TjJKVnplOG9WSU8zZjlFWE9TWnh1V0N3ODRieUpsYWFhTm1ZSDVyMjVQRDFnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNzY5ODM0MTU3Mzo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRejF4ZVV1SXF1dWZpcDFTa00ybGJjZjgyU0xZd0hTemNwTTFUUWJqSFFmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MDM0NTAyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU5tUiJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF Isaac🧑🏾‍🦱❤",
  author: process.env.PACK_AUTHER || "Isaac🧑🏾‍🦱❤",
  packname: process.env.PACK_NAME || "Isaac",
  botname: process.env.BOT_NAME || "𝐈𝐬𝐚𝐚𝐜-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
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
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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

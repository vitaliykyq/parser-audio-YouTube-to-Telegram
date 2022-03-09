const youtubeMp3Converter = require('youtube-mp3-converter')
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');
const ip = require("ip");

const downloadPath = path.join("./music/");

module.exports = async function(req, res) {

    Logger.Message(Logger.Mode.DATA, (ip.address() + " | ").toString().yellow + "Data:\n" +
    "Token: ".blue + req.body.token + "\n" +
    "Channel: ".blue + req.body.channel + "\n" +
    "Link: ".blue + req.body.link + "\n");

    const convertLinkToMp3 = youtubeMp3Converter(downloadPath);

    const pathToMp3 = await convertLinkToMp3(req.body.link);

    const name = pathToMp3.replace("music//", "");
    const token = req.body.token;
    const bot = new TelegramBot(token, { polling: false })
    await bot.sendAudio(req.body.channel, downloadPath + name);

    res.send(true);
};
const youtubeMp3Converter = require('youtube-mp3-converter');
const TelegramBot = require('node-telegram-bot-api');


module.exports = async function(req, res) {

    console.log(req.body);

    const convertLinkToMp3 = youtubeMp3Converter("./");
    const pathToMp3 = await convertLinkToMp3(req.body.link);
    const name = pathToMp3.replace(".//", "");
    const token = req.body.token;
    const bot = new TelegramBot(token, { polling: false })
    await bot.sendAudio(req.body.channel, "./" + name);

    res.send(true);
};
const ip = require("ip");

module.exports = function(res, req) {
    Logger.Message(Logger.Mode.PAGE, "Open page" + (`\t| ${ip.address()}`).toString().yellow)
    return res.render('index.ejs', {});
};
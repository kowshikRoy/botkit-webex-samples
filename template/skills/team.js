module.exports = function (controller) {

    controller.hears(['mission'], 'direct_message,direct_mention', function (bot, message) {
        var text = "To Screw up Cisco"
        bot.reply(message, text);
    });
};
"use strict";
exports.__esModule = true;
var Discord = require("discord.js");
var client = new Discord.Client();
var rulesChannel = 'rules';
var serverName = 'Programmer\'s Palace';
client.once('ready', function () {
    console.log('Ready!');
});
client.on('guildMemberAdd', function (user) {
    console.log(user + " has joined the server");
    var dmNewUser = new Discord.DMChannel(client, Text);
    dmNewUser.send("Welcome to " + serverName + "!");
    dmNewUser.send("Please read all rules in the #" + rulesChannel + " channel before proceeding!");
});
client.on('message', function (message) {
    if (message.content === '!hello') {
        message.channel.send("Hello!");
    }
    else if (message.content === "!dm") {
        message.author.send("Hello!");
    }
});
client.login("Njk0OTkxOTQyMjAyODE4NjMy.XoTrtA.N0TBkRWzCdvAl00Oa4w-dKiUHHw");
//# sourceMappingURL=welcome_message.js.map
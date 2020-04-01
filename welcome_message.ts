// Sends a super basic welcome message to new server members!
import * as Discord from "discord.js";
const client = new Discord.Client();

const rulesChannel: String = 'rules';
const serverName: String = 'Programmer\'s Palace';

client.once('ready', () => {
	console.log('Ready!');
});

client.on('guildMemberAdd', (user: Discord.User) => {
    console.log(user + " has joined the server")
    user.send(`Welcome to ${serverName}!\nPlease read the rules in the #${rulesChannel} channel!`)
});

client.login("Njk0OTkxOTQyMjAyODE4NjMy.XoTrtA.N0TBkRWzCdvAl00Oa4w-dKiUHHw");

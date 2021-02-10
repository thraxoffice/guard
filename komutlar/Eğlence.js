

module.exports = {
    config: {
        names: ["Eğlence", "Eğ"], // "" Şeklinde çoğalta bilirsiniz.
        description: "yardım menüsünü Gösterir",
        usage: "?yardım",
        permAuthor: "everyone",
    },
    async run(client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Eğlence Yardım Menüsü')
        .addField('Guard','?tokat-at /@odies')    
        message.channel.send(embed)
    }
}
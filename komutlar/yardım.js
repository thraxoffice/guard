

module.exports = {
    config: {
        names: ["yardım", "help"], // "" Şeklinde çoğalta bilirsiniz.
        description: "yardım menüsünü Gösterir",
        usage: "?yardım",
        permAuthor: "everyone",
    },
    async run(client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Yardım Menüsü')
        .addField('Guard','slowmode,sa-as,reklam-engel,küfür-engel')    
        .addField('Eğlence','tokat-at')
        message.channel.send(embed)
    }
}
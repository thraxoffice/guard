

module.exports = {
    config: {
        names: ["guard", "moderasyon"], // "" Şeklinde çoğalta bilirsiniz.
        description: "yardım menüsünü Gösterir",
        usage: "?yardım",
        permAuthor: "everyone",
    },
    async run(client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const embed = new MessageEmbed()
        .setTitle('Moderasyon Yardım Menüsü')
        .addField('Guard','slowmode,sa-as,reklam-engel,küfür-engel')    
        .addField('slowmode','?slowmode **Sayı**')
        .addField('sa-as','?sa-as aç/kapat')
        .addField('reklam-engel','?reklam aç/kapat')
        .addField('Küfür Engel','?küfür aç/kapat')
        message.channel.send(embed)
    }
}
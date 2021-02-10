

module.exports = {
    config: {
        names: ["tokat", "tokat-at"], // "" Şeklinde çoğalta bilirsiniz.
        description: "yardım menüsünü Gösterir",
        usage: "?yardım",
        permAuthor: "everyone",
    },
    async run(client, message, args) {
        const { MessageEmbed } = require ('discord.js')
        const user = message.mentions.users.first()
        if (user) {
         const embed = new MessageEmbed()
         .setTitle('Kim Kimi Tokatladı ?')
         .setDescription(`${message.author}, ${user} Adlı Kişiyi  Tokatladı! :D `)
         .setFooter('Odies Bot')
         .setTimestamp()
        message.channel.send(embed)
          } else {
           const embed = new MessageEmbed()
           .setTitle('Kendini niye Tokatlıyon Olm!')
           .setDescription(`${message.author}, omg Kendini Tokatladı  :D `)
           .setFooter('Odies Bot')
           .setTimestamp()
          message.channel.send(embed)
         }
    }
}


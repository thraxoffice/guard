const
    Discord = require('discord.js'),
    moment = require('moment'),
    util = require(`util`)

moment.locale('tr')
module.exports = {
        config: {
            names: ["e", "eval"], // "" Şeklinde çoğalta bilirsiniz.
            description: "eval işte",
            usage: "eval code",
            permAuthor: "owner" // "owner" yaparsanız sadece botun sahipleri kullanabilir || "everyone" yaparsanız herkes kullanabilir.
        },
        async run(client, message, args) {
                try {
                let codein = args.join(" ");
                let code = eval(codein)
                if (codein.length < 1) return message.channel.send('Bir kod Girmen Lazım sahibim.')
                if (codein == 'client.token') return message.channel.send('hiohihoi Tokenim yoki xd')
                if (typeof code !== 'string')    
                  code = require('util').inspect(code, { depth: 0 });
                let embed = new Discord.MessageEmbed()
                .setColor(message.guild.me.displayColor)
                .addField('📥Giriş', `\`\`\`js\n${codein}\`\`\``)
                .addField('📤Çıkış', `\`\`\`js\n${code}\n\`\`\``)
                message.channel.send(embed)
              } catch(e) {
                let embed2 = new Discord.MessageEmbed()
                .setColor(message.guild.me.displayColor)
                .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
                message.channel.send(embed2);
              }
            }

    }

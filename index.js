const Discord = require('discord.js');
const client = new Discord.Client()
const { DiscordClient } = require('odies.handlers');

let dosyaKomut = './komutlar' // Komutlar Klasoru 
let dosyaEvent = false 
let prefix = '?' // Ön ekiniz.
let ownerIDs = ["789164345585565706", "610890227153764450"] // "" şeklinde çoğalta bilirsiniz.

const odies = new DiscordClient(client, dosyaKomut, prefix, ownerIDs ,{ dosyaEvent })
odies.DiscordLoginFunction()


let etiketPrefix = true; // "true" veya "false" şeklinde bir değer giriniz. 

client.on("message", async (message) => {
    odies.messages(message, { etiketPrefix }) // Message clientimiz
})

client.login("token")//tokenizi giriniz.

client.on('message', async message => {
    if (message.content.startsWith('?küfürfiltresi')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Bunu Komutu Kulanabilmek İçin Admin Olman Lazım')
  const args = message.content.split(' ').slice(1)
  if (args[0] === 'aç') {
    db.set("küfür" + message.guild.id, "açık")
    message.channel.send('Başarıyla küfür-filtresi sistemi açıldı')
  } else if (args[0] === 'kapat') {
    db.set("küfür" + message.guild.id, "kapat")
    message.channel.send('Başarıyla küfür-filtresi sistemi kapandı')
  } else {
    message.channel.send('Geçersiz Ayar. Lütfen aç ya da kapat yazınız.')
  }
    }
  })

  client.on('message', async message => {
    if (!message.guild) return;
    if (message.author.bot === true) return;
    if (message.member.hasPermission('ADMINISTRATOR') === true) return;
    const küfür = new filter(['amk', 'amq', 'aq', 'yarra', 'fuck', 'shit', 'sikiş']) //Buraya istediğiniz kelimeleri ekleyebilirsiniz.

    let sss = await db.fetch(`odies.Koruma.${message.guild.id}`)

    if (sss === 'aktif') {
        let kufurTespit = await küfür.kontrol(message.content)
        if (kufurTespit === true) {
            message.delete()
            message.channel.send(`Bu sunucuda koruma sistemleri aktif !!!`)
        }
    }
})

  client.on('message', async message => {
    if (message.content.startsWith('?reklam')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Hey! Dostum bunu Kullanamazsın Ancak bunu yöneticiler Yapabilir İyi Günler.')
  const args = message.content.split(' ').slice(1)
  if (args[0] === 'aç') {
    db.set("ever" + message.guild.id, "açık")
    message.channel.send('Başarıyla ever-here engel sistemi açıldı')
  } else if (args[0] === 'kapat') {
    db.set("ever" + message.guild.id, "kapat")
    message.channel.send('Başarıyla ever-here engel sistemi kapandı')
  } else {
    message.channel.send('Geçersiz Ayar. Lütfen aç ya da kapat yazınız.')
  }
    }
  })
//odies code
//https:odies.net
  client.on('message', async message => {
    try {
    if(!await db.has("ever" + message.guild.id)) return;
    const açık = db.fetch("ever" + message.guild.id)
    if (message.member.hasPermission('ADMINISTRATOR')) return;
    if (açık === 'açık') {

    if (message.content.includes('@everyone')) {
      message.delete()
      message.reply('Hey Dostum Bu Sunucuda Üyelerin Everyone Atması Yasak!')
    }

    if (message.content.includes('@here')) {
      message.delete()
      message.reply('Hey Dostum Bu Sunucuda Üyelerin Here Atması Yasak!')


  }
  }
  } catch(e) {
    console.log(e)
  }
  })

  client.on('message', async message => {
    if (!message.guild) return;
    if (message.content.startsWith('?sa-as')) {
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu Komutu Kulanabilmek İçin Admin Olman Lazım')
  const args = message.content.split(' ').slice(1)
  if (args[0] === 'aç') {
  db.set("saas" + message.guild.id, "aç")
  message.channel.send('Başarıyla sa as sistemi açıldı')
  } else if (args[0] === 'kapat') {
    db.set("saas" + message.guild.id, "kapat")
    message.channel.send('Başarıyla sa as sistemi kapandı')
  } else {
    message.channel.send('Geçersiz Ayar. Lütfen aç ya da kapat yazınız.')
  }
    }
  })
  client.on('message', async message => {
    if(message.channel.type === 'dm') return;
    if(!await db.has("saas" + message.guild.id)) return;
    const açık = db.fetch("saas" + message.guild.id)
    if (açık === 'aç') {
    if (message.content.toLowerCase() === 'sa') {
      message.channel.send('Aleyküm selam, nasılsın?')
    }
  }
  })

  client.on('message' , message => {
    if (message.content.startsWith(`?slowmode`)) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu Komutu Kulanabilmek İçin Admin Olman Lazım knkm')
      var time = message.content.split(' ').slice(1).join(' ')
      if (!time) return message.channel.send('**Lütfen bır sayı seçıniz Aksi Taktirde Yavaş Mod Ayarlıyamam. **')
      message.channel.setRateLimitPerUser(time)
      message.channel.send(`Yavaş mood **${time}** saniye olarak ayarlandi.`).then(m => m.delete({
        timeout: 2000
      }))
  
    }
  });

  client.on("channelDelete", async channel => {
    let data =await  db.fetch(`odies.Koruma.${channel.guild.id}`);

    if (data === 'aktif') {
        let entry = await channel.guild
            .fetchAuditLogs({
                type: "CHANNEL_DELETE"
            })
            .then(audit => audit.entries.first());
        if (entry.executor.id === client.user.id) return;
        channel.clone().then(x => x.setPosition(channel.position));
    }
});
client.on("roleDelete", async role => {
    let entry = await role.guild
        .fetchAuditLogs({
            type: "ROLE_DELETE"
        })
        .then(audit => audit.entries.first());
    if (entry.executor.id === client.user.id) return;
    let data =await  db.fetch(`odies.Koruma.${role.guild.id}`);

    if (data === 'aktif') {
        let addRole = role.guild.roles.create({
            data: {
                name: role.name,
                color: role.color,
                hoist: role.hoist,
                permissions: role.permissions,
                mentionable: role.mentionable,
                position: role.position
            },
            reason: "Silinen Rol Açıldı."
        })
    }
});

  client.login('Token')
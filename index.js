const Discord = require('discord.js')
const client = new Discord.Client()
const { prefix, token } = require("./config.json")

client.on('ready', ()=>{
    console.log("봇이 준비되었습니다.")
})
client.on('message',msg=>{
    if(msg.content === "!민준도움말"){
        msg.reply("'민준아'라고 민준 봇을 부르세요.")
        msg.reply("'민준아 기범이 어때'로 민준이의 대답을 들으세요.")
        msg.reply("창언이/지용이/창현이/나율이/천록이/지환이 도 있습니다.")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아"){
        msg.reply("네, 주인님")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아 기범이 어때"){
        msg.reply("그는 my best friend.")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아 창언이 어때"){
        msg.reply("그는 '신' 입니다")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아 지용이 어때"){
        msg.reply("그는 '만두'입니다.")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아 창현이 어때"){
        msg.reply("그는 '근깨'입니다.")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아 나율이 어때"){
        msg.reply("그는 ':snowman:'입니다.")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아 천록이 어때"){
        msg.reply("그는 한얼중학교1학년 박천록입니다.")
    }
})
client.on('message',msg=>{
    if(msg.content === "민준아 지환이 어때"){
        msg.reply("그는 ':camel:'입니다.")
    }
})

client.login(token)
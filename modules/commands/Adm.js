module.exports.config = {
	name: "adm",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Nguyễn Duy Quân",
	description: "Thông tin người điều hành bot",
	commandCategory: "info",
	cooldowns: 1
};

module.exports.run = ({ event, api }) => api.sendMessage(`❀𝕋𝕙𝕠̂𝕟𝕘 𝕥𝕚𝕟 𝕟𝕘𝕦̛𝕠̛̀𝕚 𝕕𝕚𝕖̂̀𝕦 𝕙𝕒̀𝕟𝕙 𝕓𝕠𝕥:
𝔽𝕒𝕔𝕖𝕓𝕠𝕠𝕜: Hoàng Văn Cường(𝕊𝕖𝕟)
𝕌𝕤𝕖𝕣𝕟𝕒𝕞𝕖: @CuongDepTryyy
𝕌𝕀𝔻: 100007922737857
𝔾𝕚𝕠̛́𝕚 𝕥𝕚́𝕟𝕙: Nam ( ͡° ͜ʖ ͡°)
𝕄𝕠̂́𝕚 𝕢𝕦𝕒𝕟 𝕙𝕖̣̂: 𝔻𝕠̣̂𝕔 𝕥𝕙𝕒̂𝕟
𝕫𝕒𝕝𝕠 : 0354992303`, event.threadID, event.messageID);
nomeHeroi = "Fernando"
xpHeroi = 7933


let mensagem;
if (xpHeroi < 1000) {
    mensagem = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    mensagem = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    mensagem = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    mensagem = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    mensagem = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    mensagem = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    mensagem = "Imortal";
} else {
    mensagem = "Radiante";
}

console.log(`O herói ${nomeHeroi} possui ${xpHeroi} de XP e é classificado como '${mensagem}'.`);

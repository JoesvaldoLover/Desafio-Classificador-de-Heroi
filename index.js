function getHeroiNivel(XP) {
    let nivel = "Ferro"
    
    if(XP > 1000 && XP <= 2000)
        nivel = "Bronze"
    else if(XP > 2000 && XP <= 5000)
        nivel = "Prata"
    else if(XP > 5000 && XP <= 7000)
        nivel = "Ouro"
    else if(XP > 7000 && XP <= 8000)
        nivel = "Platina"
    else if(XP > 8000 && XP <= 9000)
        nivel = "Ascendente"
    else if(XP > 9000 && XP <= 10000)
        nivel = "Imortal"
    else if(XP > 10000)
        nivel = "Radiante"

    return nivel
}
// Gera uma quantia aletória de XP, entre 250 a 1000
function getRecompensaXP() {
    return Math.round(Math.random() * 750 + 250)
}

const heroiNome = "Felipe"
let heroiXP = 900

// SIMULADOR DE BATALHAS
// O herói ira entrar em combate 10 vezes
// O herói possui uma chance de 66% de ganhar uma batalha
// Em caso de vitória, adiciona resultado de "getRecompensaXP" à heroiXP
const batalhasLimite = 10
const chanceVitoria = 0.66

for(let i = 0; i < batalhasLimite; i++){
    if(Math.random() <= chanceVitoria)
        heroiXP += getRecompensaXP()
}

const heroiNivel = getHeroiNivel(heroiXP)

console.log("O Herói de nome " + heroiNome + " está no nível de " + heroiNivel)



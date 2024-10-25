// Variável XP
const heroiNome = "Felipe"
let heroiXP = 1000
let heroiNivel = "Ferro"

if(heroiXP > 1000 && heroiXP <= 2000)
    heroiNivel = "Bronze"
else if(heroiXP > 2000 && heroiXP <= 5000)
    heroiNivel = "Prata"
else if(heroiXP > 5000 && heroiXP <= 7000)
    heroiNivel = "Ouro"
else if(heroiXP > 7000 && heroiXP <= 8000)
    heroiNivel = "Platina"
else if(heroiXP > 8000 && heroiXP <= 9000)
    heroiNivel = "Ascendente"
else if(heroiXP > 9000 && heroiXP <= 10000)
    heroiNivel = "Imortal"
else if(heroiXP > 10000)
    heroiNivel = "Radiante"

console.log("O Herói de nome " + heroiNome + " está no nível de " + heroiNivel)



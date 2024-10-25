# DESAFIO: Classificador de Nível de Herói
## Objetivo
Criar um programa que armazena o nome e XP de um herói. Utilizando uma estrutura de decisão, classificar o nível de herói baseado em seu XP:
- XP menor do que 1000: Ferro;
- XP entre 1001 e 2000: Bronze;
- XP entre 2001 e 5000: Prata;
- XP entre 5001 e 7000: Ouro;
- XP entre 7001 e 8000: Platina;
- XP entre 8001 e 9000: Ascendente;
- XP entre 9001 e 10000: Imortal;
- XP maior do que 10001: Radiante.

## Saída
A seguinte mensagem deve ser exibida:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

## Adições
Além dos requisitos exigidos, foi adicionada a funcionalidade **"Batalhas"**:
- Antes de classificar seu nível, o herói entra em 10 batalhas;
- Em cada batalha o herói possui uma chance de 66% de sair vitorioso;
- Caso vença, aumenta quantia de XP atual;
- *Quanto XP é ganho varia entre 250 a 1000*

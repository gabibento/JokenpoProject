# JokenpoProject

Este repositório contém uma versão aprimorada do jogo Jokenpo (Pedra, Papel, Tesoura), originalmente desenvolvido como parte do curso de [DevSamurai](https://st.devsamurai.com.br/0cqlvn/index.html?utm_source=&utm_medium=cpc&utm_campaign=15847297851&utm_content=574424152468&xpromo=gl-574424152468&utm_term=133556228353&gad_source=1&gclid=Cj0KCQiA5rGuBhCnARIsAN11vgSmJed635KHLnMQsLYRjiz0bWMq9ZVVdiLVZeSNVJdzhwvNgLNo1sgaAovOEALw_wcB). Durante o curso, foram aprendidos conceitos essenciais de HTML, CSS e JavaScript, e o jogo foi personalizado com melhorias adicionais.

<div style="display: inline-block;">
<img src="img/jokenpoDesktop.gif" alt="Exemplo" width="70%"/>
<img align="right" src="img/jokenpoMobile.gif" alt="Exemplo" width="20%" />
</div>

<br/>
<br/>

[Visualizar no GitHub Pages](https://gabibento.github.io/JokenpoProject/)

## Funcionalidades Principais
- Jogabilidade Intuitiva: Interface fácil de usar para uma experiência de jogo sem complicações.
- Escolha de Movimentos: Os jogadores podem escolher entre Pedra, Papel e Tesoura em cada rodada.
- Lógica do Jogo: Implementação da lógica clássica do jogo, determinando um vencedor e perdedor com base nas escolhas feitas.
## Funcionalidades Aprimoradas
- A interface do jogo foi aprimorada com mensagens mais dinâmicas, utilizando manipulação do DOM no HTML e CSS.
- O design foi ajustado para ser responsivo, proporcionando uma experiência de jogo mais agradável em diferentes dispositivos.
- Realizei ajustes na interatividade do jogo, corrigindo problemas que afetavam a experiência do usuário.

## Principais Componentes e Funcionamento

### Função de Cálculo de Escolha:

- Criei a função calcChoice que determina o vencedor em uma partida de Pedra, Papel e Tesoura.
As escolhas são representadas por números (Pedra: 1, Papel: 2, Tesoura: 3).
Retorna 0 para empate, 1 para jogador vencedor, e 2 para computador vencedor.

```JavaScript
function calcChoice(player, computer){
    if(player == 1 && computer == 1){
        return 0;
    }
    else if(player == 1 && computer == 2){
        return 2;
    }
    else if(player == 1 && computer == 3){
        return 1;
    }
    else if(player == 2 && computer == 1){
        return 1;
    }
    else if(player == 2 && computer == 2){
        return 0;
    }
    if(player == 2 && computer == 3){
        return 2;
    }
    else if(player == 3 && computer == 1){
        return 2;
    }
    else if(player == 3 && computer == 2){
        return 1;
    }
    if(player == 3 && computer == 3){
        return 0;
    }
}
```

### Escolha Aleatória do Computador:

- Implementei a função randomPlay para gerar uma escolha aleatória para o computador (1, 2 ou 3).
Exemplo do Código:

```JavaScript
function randomPlay(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
```
### Variáveis e Inicialização:

- Inicializei variáveis para armazenar escolhas e pontos do jogador e do computador.

```JavaScript
var playerChoice = 0;
var computerChoice = 0;
var playerPoints = 0;
var computerPoints = 0;
```
### Função de Jogo:

- A função play é chamada quando o jogador faz uma escolha, definindo as escolhas do jogador e do computador.
```JavaScript
function play(choice){
    playerChoice = choice;
    computerChoice = randomPlay(1, 3);
}
```
### Eventos:

- Adicionei eventos de clique aos elementos de escolha do jogador para chamar a função play com a escolha correspondente.
```JavaScript
document.getElementById('player-choice-1').onclick = function() {play(1)}
document.getElementById('player-choice-2').onclick = function() {play(2)}
document.getElementById('player-choice-3').onclick = function() {play(3)}
```
### Contagem de Pontos:

- As funções sumPlayerPoints e sumComputerPoints incrementam os pontos do jogador e do computador e atualizam o DOM.
```JavaScript
function sumPlayerPoints(){
    playerPoints++;
    document.getElementById('player-points').innerHTML = playerPoints;
}
function sumComputerPoints(){
    computerPoints++;
    document.getElementById('computer-points').innerHTML = computerPoints;
}
```
### Determinação do Vencedor:

- Utilizo a função calcChoice para calcular o vencedor, chamar as funções de contagem de pontos e exibir o resultado.
```JavaScript
   var winner = calcChoice(playerChoice, computerChoice);

   if(winner == 0){
        message('Tied')
    }
    if(winner == 1){
        message(`Point for ${playerName}`)
        sumPlayerPoints()
    }
    if(winner == 2){
        message('Point for Computer')
        sumComputerPoints()
    }
```
## Conclusão

Este projeto foi uma oportunidade incrível para aplicar e consolidar meus conhecimentos em JavaScript. Ao longo deste processo, destaco os seguintes aprendizados principais:

1. **Implementação de Lógica de Jogo:**
   - Desenvolvi uma lógica de programação sólida para implementar as regras do jogo Pedra, Papel e Tesoura.

2. **Manipulação Eficiente do DOM:**
   - Aprimorei minha capacidade de interação com o Document Object Model (DOM), proporcionando uma experiência de usuário dinâmica.

3. **Interação com Eventos e Atualização Dinâmica:**
   - Adquiri experiência na captura de eventos e atualização dinâmica do conteúdo na página, tornando a interação com o usuário mais eficaz.

Estou aberta à críticas, sugestões e colaborações. Obrigada por explorar este projeto! 

## Contato

<a href = "mailto:gabimabento@gmail.com"><img align="center" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/gabriella-maurea-bento-b7908a240/" target="_blank"><img align="center" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 


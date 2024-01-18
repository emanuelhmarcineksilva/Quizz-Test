const perguntas = [
        `<div class="quizzCaixa">
            <h2>Quantos estados tem no Brasil?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">17</button>
                <button class="btnResposta acertou" onclick="acertou()">26</button>
                <button class="btnResposta errou" onclick="errou()">32</button>
                <button class="btnResposta errou" onclick="errou()">44</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Qual é o animal que tem 3 corações?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Minhoca</button>
                <button class="btnResposta errou" onclick="errou()">Araia</button>
                <button class="btnResposta acertou" onclick="acertou()">Polvo</button>
                <button class="btnResposta errou" onclick="errou()">Lagartixa</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Quantos litros de sangue uma pessoa tem?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">4 a 6</button>
                <button class="btnResposta errou" onclick="errou()">7 a 9</button>
                <button class="btnResposta errou" onclick="errou()">10 a 12</button>
                <button class="btnResposta errou" onclick="errou()">12 a 14</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Qual é o menor país do mundo?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Londres</button>
                <button class="btnResposta errou" onclick="errou()">Escócia</button>
                <button class="btnResposta errou" onclick="errou()">Malta</button>
                <button class="btnResposta acertou" onclick="acertou()">Vaticano</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Quanto tempo demora para a luz do sol chegar na terra?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">10 horas</button>
                <button class="btnResposta errou" onclick="errou()">1 dia</button>
                <button class="btnResposta acertou" onclick="acertou()">8 min</button>
                <button class="btnResposta errou" onclick="errou()">20 seg</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Qual é a montanha mais alta do Brasil?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Pico Maior de Friburgo</button>
                <button class="btnResposta acertou" onclick="acertou()">Pico da Neblina</button>
                <button class="btnResposta errou" onclick="errou()">Monte Roraima</button>
                <button class="btnResposta errou" onclick="errou()">Pico da Bandeira</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Qual desses países é trascontinental? (Pertence a mais de um continente)</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">Rússia</button>
                <button class="btnResposta errou" onclick="errou()">Filipinas</button>
                <button class="btnResposta errou" onclick="errou()">Marrocos</button>
                <button class="btnResposta errou" onclick="errou()">Groelândia</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Qual tipo sanguíneo é o doador universal?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Tipo AB</button>
                <button class="btnResposta errou" onclick="errou()">Tipo B</button>
                <button class="btnResposta acertou" onclick="acertou()">Tipo O</button>
                <button class="btnResposta errou" onclick="errou()">Tipo A</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Quais são os cromossomos que determinam o sexo feminino?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Y</button>
                <button class="btnResposta acertou" onclick="acertou()">X</button>
                <button class="btnResposta errou" onclick="errou()">V</button>
                <button class="btnResposta errou" onclick="errou()">W</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Qual é o maior arquipélago da terra?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">A Finlândia</button>
                <button class="btnResposta errou" onclick="errou()">As Bahamas</button>
                <button class="btnResposta errou" onclick="errou()">A Filipinas</button>
                <button class="btnResposta acertou" onclick="acertou()">A Indonésia</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Qual metal tem como símbolo químico o Au?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Prata</button>
                <button class="btnResposta errou" onclick="errou()">Cobre</button>
                <button class="btnResposta acertou" onclick="acertou()">Ouro</button>
                <button class="btnResposta errou" onclick="errou()">Ferro</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Quais desses orgãos pertence ao sistema repiratório?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Esôfago e Brônquios</button>
                <button class="btnResposta errou" onclick="errou()">Pâncreas e Vasos sanguíneos</button>
                <button class="btnResposta errou" onclick="errou()">Pulmões e Faringe</button>
                <button class="btnResposta acertou" onclick="acertou()">Laringe e Traqueia</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Quantos ossos há no corpo humano?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">304</button>
                <button class="btnResposta errou" onclick="errou()">125</button>
                <button class="btnResposta acertou" onclick="acertou()">206</button>
                <button class="btnResposta errou" onclick="errou()">403</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
        `<div class="quizzCaixa">
            <div class="img">
                <img src="quiz.ico" alt="Quiz Test">
            </div>
            <h2>Parabéns!!! Você concluiu o Test Quizz!</h2>
            <p class="avaliar">Avalie-nos</p>
            <div class="respostasAvaliacao">
                <a onclick="avaliacao1()" class="estrelas e1">⭐</a>
                <a onclick="avaliacao2()" class="estrelas e2">⭐</a>
                <a onclick="avaliacao3()" class="estrelas e3">⭐</a>
                <a onclick="avaliacao4()" class="estrelas e4">⭐</a>
                <a onclick="avaliacao5()" class="estrelas e5">⭐</a>
            </div>
        </div>`
];

const simPronto = document.querySelector('.sim')
const todosCaixotes1 = document.querySelector('.todosCaixotes1')
const todosCaixotes2 = document.querySelector('.todosCaixotes2')
const chance = document.querySelector('.chanceCaixa')
const acertouResposta = document.querySelector('.acertou')
const errouResposta = document.querySelector('.errou')
const perguntaLocal = document.querySelector('.quizzCaixaFlex')
const textoCaixaPrimaria = document.querySelector('.h3')
const botoesCaixaPrimaria = document.querySelector('.botoes')
const caixaDeAvaliacao = document.querySelector('.caixaAvaliacao')
const obrigadoPelaAvalicao = document.querySelector('.avali')

const outrosBotoes = '<button class="btnCaixote sim" onclick="estouPronto(), colocarPergunta()">SIM</button> <button class="btnCaixote nao" onclick="desvia(this)" onmouseover="desvia(this)">NÃO</button>';



//////// Iniciar

function estouPronto() {
    todosCaixotes1.style.display = 'none';
}

//////// certeza

const convencer = [
    `<h3>Não quer mesmo?</h3>`,
    `<h3>Vamos! Não custa tentar!</h3>`,
    `<h3>Te dou até mais uma chance!</h3>`,
    `<h3>Vai mudar de ideia?</h3>`,
    `<h3>Hum... vou te dar uma mãozinha... vamos para o Test Quiz?</h3>`
]

var certeza = 5;
let proximaTentativa = 0;

function temCerteza() {
    if (certeza != 0) {
        textoCaixaPrimaria.innerHTML = convencer[proximaTentativa]; 
        certeza = certeza - 1;
        proximaTentativa = proximaTentativa + 1;
        
        if (proximaTentativa == 3) {
            aumentarChance()
        }
    }else{
        botoesCaixaPrimaria.innerHTML = outrosBotoes;
    }

}


//////// Desviar

function desvia(botao) {
    const btn = botao;
    btn.style.position = 'absolute';
    btn.style.bottom = numeroAleatorio(15, 90);
    btn.style.left = numeroAleatorio(0, 78);
}

function numeroAleatorio(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}


//////// Chances

var quantidadeChances = 2;

function verChances() {

    let chances = `<p class="chance">CHANCES: ${quantidadeChances} </p>`;

    chance.innerHTML = chances;
}

verChances()

function errou() {
    if (quantidadeChances == 0) {
        acabouChances()
    } else {
        quantidadeChances = quantidadeChances - 1;

        verChances()
    }
}

function aumentarChance() {
    quantidadeChances = quantidadeChances + 1;

    verChances()
}

function acabouChances() {
    todosCaixotes2.style.display = 'flex'
}


//////// Perguntas

let proximaPergunta = 0;

function colocarPergunta() {
    perguntaLocal.innerHTML = perguntas[proximaPergunta]

    proximaPergunta = proximaPergunta + 1;
}

function acertou() {
    colocarPergunta()
}


//////// Pulou

function pulouPergunta() {
    if (quantidadeChances == 0) {
        acabouChances()
    } else {
        quantidadeChances = quantidadeChances - 1;

        verChances()

        colocarPergunta()
    }
}


//////// Recomeçar

function denovo() {
    location.reload()
}


//////// Avaliação

function avaliacao1() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐</p>`;
}
function avaliacao2() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐</p>`;
}
function avaliacao3() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐</p>`;
}
function avaliacao4() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐⭐</p>`;
}
function avaliacao5() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐⭐⭐</p>`;
}



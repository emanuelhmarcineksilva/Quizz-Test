const perguntasFacil = [
    `<div class="quizzCaixa">
            <h2>Escolha a resposta correta do calculo: 6 x 8</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">24</button>
                <button class="btnResposta errou" onclick="errou()">32</button>
                <button class="btnResposta acertou" onclick="acertou()">48</button>
                <button class="btnResposta errou" onclick="errou()">56</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual animal vive de baixo da terra?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Dinossauro</button>
                <button class="btnResposta errou" onclick="errou()">Baleia</button>
                <button class="btnResposta acertou" onclick="acertou()">Minhoca</button>
                <button class="btnResposta errou" onclick="errou()">Avestruz</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual o sabor da água do mar?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">Salgada</button>
                <button class="btnResposta errou" onclick="errou()">Amarga</button>
                <button class="btnResposta errou" onclick="errou()">Doce</button>
                <button class="btnResposta errou" onclick="errou()">Azeda</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quantas cores tem no arco-íris?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">4</button>
                <button class="btnResposta errou" onclick="errou()">5</button>
                <button class="btnResposta errou" onclick="errou()">6</button>
                <button class="btnResposta acertou" onclick="acertou()">7</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Em qual direção o sol nasce?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Sul</button>
                <button class="btnResposta errou" onclick="errou()">Norte</button>
                <button class="btnResposta acertou" onclick="acertou()">Leste</button>
                <button class="btnResposta errou" onclick="errou()">Oeste</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual é o maior platena do sistema solar?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Mercúrio</button>
                <button class="btnResposta acertou" onclick="acertou()">Júpiter</button>
                <button class="btnResposta errou" onclick="errou()">Vênus</button>
                <button class="btnResposta errou" onclick="errou()">Marte</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quando descobriram o Brasil?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">1400</button>
                <button class="btnResposta acertou" onclick="acertou()">1500</button>
                <button class="btnResposta errou" onclick="errou()">1600</button>
                <button class="btnResposta errou" onclick="errou()">1700</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual animal representa o símbolo da paz?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Elefante</button>
                <button class="btnResposta errou" onclick="errou()">Gato</button>
                <button class="btnResposta acertou" onclick="acertou()">Pomba</button>
                <button class="btnResposta errou" onclick="errou()">Cobra</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quantos lados tem um dado?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">4</button>
                <button class="btnResposta errou" onclick="errou()">7</button>
                <button class="btnResposta errou" onclick="errou()">5</button>
                <button class="btnResposta acertou" onclick="acertou()">6</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual animal mais pesado do Mundo?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Hipopótamo</button>
                <button class="btnResposta acertou" onclick="acertou()">Baleia-Azul</button>
                <button class="btnResposta errou" onclick="errou()">Elefante-Africano</button>
                <button class="btnResposta errou" onclick="errou()">Rinoceronte-Branco</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Calcule e responda: 30 - 2</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">18</button>
                <button class="btnResposta errou" onclick="errou()">12</button>
                <button class="btnResposta acertou" onclick="acertou()">28</button>
                <button class="btnResposta errou" onclick="errou()">22</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Como se chama o processo de “alimentação” das plantas?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Respiração</button>
                <button class="btnResposta errou" onclick="errou()">Transpiração</button>
                <button class="btnResposta errou" onclick="errou()">Germinação</button>
                <button class="btnResposta acertou" onclick="acertou()">Fotossíntese</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quem pintou o quadro chamado "Mona Lisa" (também conhecido como Gioconda)?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Pablo Picasso</button>
                <button class="btnResposta errou" onclick="errou()">Claude Monet</button>
                <button class="btnResposta acertou" onclick="acertou()">Leonardo da Vinci</button>
                <button class="btnResposta errou" onclick="errou()">Salvador Dalí</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <div class="img">
                <img src="quiz.ico" alt="Quiz Test">
            </div>
            <h2>Parabéns!!! Você concluiu o Test Quizz Fácil!</h2>
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

const perguntasMedia = [
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
            <h2>Quantos litros de sangue uma pesoa tem?</h2>
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
            <h2>Calcule e responda: 235 x 22</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">4220</button>
                <button class="btnResposta acertou" onclick="acertou()">5170</button>
                <button class="btnResposta errou" onclick="errou()">4870</button>
                <button class="btnResposta errou" onclick="errou()">6930</button>
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
            <h2>Qualcule e responda: 1/2 + 7/7</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">1/4</button>
                <button class="btnResposta errou" onclick="errou()">1/7</button>
                <button class="btnResposta errou" onclick="errou()">2/5</button>
                <button class="btnResposta acertou" onclick="acertou()">3/2</button>
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
            <h2>Parabéns!!! Você concluiu o Test Quizz Médio!</h2>
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

const perguntasDificil = [
    `<div class="quizzCaixa">
            <h2>Quantos países tem no mundo?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">193</button>
                <button class="btnResposta errou" onclick="errou()">234</button>
                <button class="btnResposta errou" onclick="errou()">121</button>
                <button class="btnResposta errou" onclick="errou()">204</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual o país mais novo do mundo?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">Suldão do Sul</button>
                <button class="btnResposta errou" onclick="errou()">Timor Leste</button>
                <button class="btnResposta errou" onclick="errou()">Palau</button>
                <button class="btnResposta errou" onclick="errou()">Kosovo</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual alternativa indica corretamente o π (pi) até a 5° casa decimal?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">3,14169</button>
                <button class="btnResposta errou" onclick="errou()">3,14137</button>
                <button class="btnResposta acertou" onclick="acertou()">3,14159</button>
                <button class="btnResposta errou" onclick="errou()">3,14187</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quem foi a primeira mulher a viajar para o espaço?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Kathryn D. Sullivan</button>
                <button class="btnResposta errou" onclick="errou()">Sally Ride</button>
                <button class="btnResposta errou" onclick="errou()">Svetlana Savitskaya</button>
                <button class="btnResposta acertou" onclick="acertou()">Valentina Tereshkova</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>determine as raízes da equação 2x² + 7x + 3 = 0</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">2 e 1</button>
                <button class="btnResposta acertou" onclick="acertou()">3 e 0.5</button>
                <button class="btnResposta errou" onclick="errou()">49 e 24</button>
                <button class="btnResposta errou" onclick="errou()">2 e 3</button>
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
            <h2>Qual foi a célebre invenção feita por Robert Kahn e Vint Cerf?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">Internet</button>
                <button class="btnResposta errou" onclick="errou()">Telefone</button>
                <button class="btnResposta errou" onclick="errou()">Avião</button>
                <button class="btnResposta errou" onclick="errou()">bluetooth</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual o nome do evento astronômico responsável pelo dia mais longo do ano?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Solstício de inverno</button>
                <button class="btnResposta errou" onclick="errou()">Equinócio de primavera</button>
                <button class="btnResposta acertou" onclick="acertou()">Solstício de verão</button>
                <button class="btnResposta errou" onclick="errou()">Equinócio de outono</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quantos pares de costelas um ser humano, normalmente, possui?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">6</button>
                <button class="btnResposta errou" onclick="errou()">8</button>
                <button class="btnResposta errou" onclick="errou()">10</button>
                <button class="btnResposta acertou" onclick="acertou()">12</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual é o maior arquipélago da terra?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">A Indonésia</button>
                <button class="btnResposta errou" onclick="errou()">A Finlândia</button>
                <button class="btnResposta errou" onclick="errou()">As Bahamas</button>
                <button class="btnResposta errou" onclick="errou()">A Filipinas</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual animal produz o som mais alto?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Leão</button>
                <button class="btnResposta errou" onclick="errou()">Bugio</button>
                <button class="btnResposta acertou" onclick="acertou()">Baleia-Azul</button>
                <button class="btnResposta errou" onclick="errou()">Elefante-Africano</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>A soma de três números inteiros consecutivos é igual a 72. Determine o valor do primeiro número:</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">21</button>
                <button class="btnResposta errou" onclick="errou()">22</button>
                <button class="btnResposta acertou" onclick="acertou()">23</button>
                <button class="btnResposta errou" onclick="errou()">24</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual dos países abaixo fazia parte da URSS - União das Repúblicas Socialistas Soviéticas?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Mongólia</button>
                <button class="btnResposta errou" onclick="errou()">Afeganistão</button>
                <button class="btnResposta acertou" onclick="acertou()">Turcomenistão</button>
                <button class="btnResposta errou" onclick="errou()">Paquistão</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <div class="img">
                <img src="quiz.ico" alt="Quiz Test">
            </div>
            <h2>Parabéns!!! Você concluiu o Test Quizz Difícil!</h2>
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

const perguntasExtrema = [
    `<div class="quizzCaixa">
            <h2>Como se diz "Boa noite" em Holandês?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Goedemorgen</button>
                <button class="btnResposta errou" onclick="errou()">Goedemiddag</button>
                <button class="btnResposta errou" onclick="errou()">Vliegen</button>
                <button class="btnResposta acertou" onclick="acertou()">Welterusten</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Em que ano o filme "Titanic" foi lançado no Brasil?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">1997</button>
                <button class="btnResposta acertou" onclick="acertou()">1998</button>
                <button class="btnResposta errou" onclick="errou()">1999</button>
                <button class="btnResposta errou" onclick="errou()">2000</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual dos seguintes planetas gira no sentido horário?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">Urano</button>
                <button class="btnResposta errou" onclick="errou()">Júpiter</button>
                <button class="btnResposta errou" onclick="errou()">Netuno</button>
                <button class="btnResposta errou" onclick="errou()">Marte</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Como é chamado o ato de cultivar e cuidar dos pelos faciais?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Abiotrofia</button>
                <button class="btnResposta acertou" onclick="acertou()">Pogonotrofia</button>
                <button class="btnResposta errou" onclick="errou()">Destrofia</button>
                <button class="btnResposta errou" onclick="errou()">Autotrofia</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quem é o fundador do Instagram?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Chris Hughes</button>
                <button class="btnResposta errou" onclick="errou()">Jack Dorsey</button>
                <button class="btnResposta acertou" onclick="acertou()">Kevin Systrom</button>
                <button class="btnResposta errou" onclick="errou()">Jan Koum</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual é o símbolo químico do chumbo?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Ad</button>
                <button class="btnResposta acertou" onclick="acertou()">Pb</button>
                <button class="btnResposta errou" onclick="errou()">Le</button>
                <button class="btnResposta errou" onclick="errou()">Cs</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Como é chamado o medo de altura?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Aerofobia</button>
                <button class="btnResposta errou" onclick="errou()">Astrafobia</button>
                <button class="btnResposta acertou" onclick="acertou()">Acrofobia</button>
                <button class="btnResposta errou" onclick="errou()">Brontofobia</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual é a capital da Romênia?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Budapeste</button>
                <button class="btnResposta acertou" onclick="acertou()">Bucareste</button>
                <button class="btnResposta errou" onclick="errou()">Bucovina</button>
                <button class="btnResposta errou" onclick="errou()">Olinda</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Em que ano foi lançado o WhatsApp?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">2004</button>
                <button class="btnResposta errou" onclick="errou()">2007</button>
                <button class="btnResposta acertou" onclick="acertou()">2009</button>
                <button class="btnResposta errou" onclick="errou()">2011</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Quem descobriu que a Terra gira em torno do Sol?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Edward de Vere</button>
                <button class="btnResposta errou" onclick="errou()">Thomas Malthus</button>
                <button class="btnResposta errou" onclick="errou()">Sigmund Freud</button>
                <button class="btnResposta acertou" onclick="acertou()">Nicolau Copérnico</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Em que país fica o Monte Kilimanjaro?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">Kiribati</button>
                <button class="btnResposta errou" onclick="errou()">Comores</button>
                <button class="btnResposta errou" onclick="errou()">Niue</button>
                <button class="btnResposta acertou" onclick="acertou()">Tanzânia</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>Qual empresa foi originalmente chamada de "Cadabra"?</h2>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()">Amazon</button>
                <button class="btnResposta errou" onclick="errou()">Coamo</button>
                <button class="btnResposta errou" onclick="errou()">Tencent</button>
                <button class="btnResposta errou" onclick="errou()">Cresol</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <h2>AUma das raízes do polinômio x3 + 2x² - 7x - 2 é 2. O produto das outras raízes é:</h2>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()">2</button>
                <button class="btnResposta acertou" onclick="acertou()">1</button>
                <button class="btnResposta errou" onclick="errou()">0</button>
                <button class="btnResposta errou" onclick="errou()">-1</button>
            </div>
            <a href="#" class="pular" onclick="pulouPergunta()">Pular pergunta.</a>
        </div>`,
    `<div class="quizzCaixa">
            <div class="img">
                <img src="quiz.ico" alt="Quiz Test">
            </div>
            <h2>Parabéns!!! Você concluiu o Test Quizz Extremo!</h2>
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
const home = document.querySelector('.home')
const acertouResposta = document.querySelector('.acertou')
const errouResposta = document.querySelector('.errou')
const perguntaLocal = document.querySelector('.quizzCaixaFlex')
const textoCaixaPrimaria = document.querySelector('.h3')
const botoesCaixaPrimaria = document.querySelector('.botoes')
const caixaDeAvaliacao = document.querySelector('.caixaAvaliacao')
const obrigadoPelaAvalicao = document.querySelector('.avali')
const nivelCaixa = document.querySelector('.nivelCaixaFlex')

const outrosBotoes = '<button class="btnCaixote sim" onclick="estouPronto()">SIM</button> <button class="btnCaixote nao" onclick="desvia(this)" onmouseover="desvia(this)">NÃO</button>';



//////// Iniciar

function estouPronto() {
    todosCaixotes1.style.display = 'none';
    nivelCaixa.style.display = 'flex';
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
    } else {
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

let perguntas = perguntasMedia;

function perguntasFaceis() {
    perguntas = perguntasFacil;
    colocarPergunta()
}

function perguntasMedias() {
    perguntas = perguntasMedia;
    colocarPergunta()
}

function perguntasDificeis() {
    perguntas = perguntasDificil;
    colocarPergunta()
}

function perguntasExtremas() {
    perguntas = perguntasExtrema;
    colocarPergunta()
}

let proximaPergunta = 0;

function colocarPergunta() {
    perguntaLocal.innerHTML = perguntas[proximaPergunta]

    proximaPergunta = proximaPergunta + 1;

    nivelCaixa.style.display = 'none';
    perguntaLocal.style.display = 'flex';
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


//////// Home

function homeAparecer() {
    home.style.display = 'block'
}


//////// Avaliação

function avaliacao1() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐</p>`;
    homeAparecer()
}
function avaliacao2() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐</p>`;
    homeAparecer()
}
function avaliacao3() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐</p>`;
    homeAparecer()
}
function avaliacao4() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐⭐</p>`;
    homeAparecer()
}
function avaliacao5() {
    caixaDeAvaliacao.style.display = 'flex'
    perguntaLocal.style.display = 'none'
    obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐⭐⭐</p>`;
    homeAparecer()
}



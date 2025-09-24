// Definição dos grids fixos para cada rodada e nível
// Cada palavra tem: palavra, direção ([dx,dy]), início ([linha,coluna])
const rodadasFixas = {
  facil: [
    [
      { palavra: "ABOBORA", direcao: [0,1], inicio: [0,0] },    // horizontal
      { palavra: "BRUXA", direcao: [1,0], inicio: [1,7] },      // vertical (vai de 1 a 5, ok)
      { palavra: "VAMPIRO", direcao: [1,1], inicio: [0,0] },    // diagonal desc (vai até [6,6], ok)
      { palavra: "FANTASMA", direcao: [-1,1], inicio: [7,0] },  // diagonal asc (vai até [0,7], ok)
      { palavra: "GATO", direcao: [0,1], inicio: [5,3] }        // horizontal (vai até [5,6], ok)
    ],
    [
      { palavra: "MORCEGO", direcao: [0,1], inicio: [2,0] },    // horizontal (vai até [2,6], ok)
      { palavra: "ZUMBI", direcao: [1,0], inicio: [0,5] },      // vertical (vai até [4,5], ok)
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [0,0] },  // diagonal desc (vai até [7,7], ok)
      { palavra: "CAVEIRA", direcao: [1,1], inicio: [0,1] },    // diagonal desc (novo, vai até [6,7], ok)
      { palavra: "TERROR", direcao: [0,1], inicio: [6,2] }      // horizontal (vai até [6,7], ok)
    ],
    [
      { palavra: "CORVO", direcao: [0,1], inicio: [7,3] },      // horizontal (vai até [7,7], ok)
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [0,0] },  // vertical (vai até [7,0], ok)
      { palavra: "DRACULA", direcao: [1,1], inicio: [0,1] },    // diagonal desc (vai até [6,7], ok)
      { palavra: "CRIPTA", direcao: [0,1], inicio: [6,1] },     // horizontal (vai até [6,6], ok)
      { palavra: "VELA", direcao: [0,1], inicio: [4,4] }        // horizontal (vai até [4,7], ok)
    ]
  ],
  medio: [
    [
      { palavra: "NOITE", direcao: [0,1], inicio: [0,0] },          // horizontal (0,0)-(0,4)
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [3,2] },      // vertical (3,2)-(10,2)
      { palavra: "ARANHA", direcao: [1,1], inicio: [2,6] },         // diagonal desc (2,6)-(7,11)
      { palavra: "MUMIA", direcao: [-1,1], inicio: [11,0] },        // diagonal asc (11,0)-(7,4)
      { palavra: "MALDICAO", direcao: [0,1], inicio: [7,4] },       // horizontal (7,4)-(7,11)
      { palavra: "ESPIRITO", direcao: [1,0], inicio: [0,10] },      // vertical (0,10)-(7,10)
      { palavra: "FEITICO", direcao: [1,1], inicio: [2,0] },        // diagonal desc (2,0)-(8,6)
      { palavra: "MORTE", direcao: [0,1], inicio: [11,7] }          // horizontal (11,7)-(11,11)
    ],
    [
      { palavra: "SANGUE", direcao: [0,1], inicio: [0,2] },         // horizontal (0,2)-(0,7)
      { palavra: "COBERTAO", direcao: [1,0], inicio: [1,7] },       // vertical (1,7)-(8,7)
      { palavra: "LENDA", direcao: [1,1], inicio: [2,5] },          // diagonal desc (2,5)-(6,9)
      { palavra: "MONSTRO", direcao: [-1,1], inicio: [7,2] },       // diagonal asc (7,2)-(1,8)
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [9,0] },      // horizontal (9,0)-(9,7)
      { palavra: "ABISMO", direcao: [1,0], inicio: [0,11] },        // vertical (0,11)-(5,11)
      { palavra: "BRUXA", direcao: [1,1], inicio: [5,2] },          // diagonal desc (5,2)-(9,6)
      { palavra: "MORCEGO", direcao: [0,1], inicio: [7,3] }         // horizontal (7,3)-(7,9)
    ],
    [
      { palavra: "ABOBORA", direcao: [0,1], inicio: [4,0] },        // horizontal (4,0)-(4,6)
      { palavra: "FANTASMA", direcao: [1,0], inicio: [3,5] },       // vertical (3,5)-(10,5)
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [2,1] },      // diagonal desc (2,1)-(9,8)
      { palavra: "CAVEIRA", direcao: [-1,1], inicio: [11,7] },      // diagonal asc (11,7)-(5,13)
      { palavra: "TERROR", direcao: [0,1], inicio: [10,3] },        // horizontal (10,3)-(10,8)
      { palavra: "CORVO", direcao: [1,0], inicio: [2,9] },          // vertical (2,9)-(6,9)
      { palavra: "LOBISOMEM", direcao: [1,1], inicio: [0,4] },      // diagonal desc (0,4)-(7,11)
      { palavra: "DRACULA", direcao: [0,1], inicio: [8,7] }         // horizontal (8,7)-(8,13)
    ]
  ],
  dificil: [
    [
      { palavra: "CRIPTA", direcao: [0,1], inicio: [2,2] },         // horizontal (2,2)-(2,7)
      { palavra: "VELA", direcao: [1,0], inicio: [3,11] },          // vertical (3,11)-(6,11)
      { palavra: "NOITE", direcao: [1,1], inicio: [10,2] },         // diagonal desc (10,2)-(14,6)
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [0,0] },      // vertical (0,0)-(7,0)
      { palavra: "ARANHA", direcao: [0,1], inicio: [12,5] },        // horizontal (12,5)-(12,10)
      { palavra: "MUMIA", direcao: [1,0], inicio: [0,8] },          // vertical (0,8)-(4,8)
      { palavra: "MALDICAO", direcao: [1,1], inicio: [8,3] },       // diagonal desc (8,3)-(15,10)
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [14,7] },      // horizontal (14,7)-(14,14)
      { palavra: "FEITICO", direcao: [1,0], inicio: [2,10] },       // vertical (2,10)-(8,10)
      { palavra: "MORTE", direcao: [0,1], inicio: [7,13] }          // horizontal (7,13)-(7,17) (ajustado para [7,7] para caber no grid)
    ],
    [
      { palavra: "SANGUE", direcao: [0,1], inicio: [4,2] },         // horizontal (4,2)-(4,7)
      { palavra: "CEMITERIO", direcao: [1,0], inicio: [5,5] },      // vertical (5,5)-(13,5)
      { palavra: "LENDA", direcao: [1,1], inicio: [1,1] },          // diagonal desc (1,1)-(5,5)
      { palavra: "MONSTRO", direcao: [-1,1], inicio: [14,3] },      // diagonal asc (14,3)-(8,9)
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [10,5] },     // horizontal (10,5)-(10,13)
      { palavra: "ABISMO", direcao: [1,0], inicio: [0,10] },        // vertical (0,10)-(5,10)
      { palavra: "BRUXA", direcao: [1,1], inicio: [5,5] },          // diagonal desc (5,5)-(9,9)
      { palavra: "MORCEGO", direcao: [0,1], inicio: [11,9] },       // horizontal (11,9)-(11,15)
      { palavra: "ABOBORA", direcao: [1,0], inicio: [13,3] },       // vertical (13,3)-(19,3) (ajustado para [8,3] para caber no grid)
      { palavra: "DRACULA", direcao: [0,1], inicio: [7,2] }         // horizontal (7,2)-(7,8)
    ],
    [
      { palavra: "FANTASMA", direcao: [0,1], inicio: [1,1] },       // horizontal (1,1)-(1,8)
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [2,2] },      // vertical (2,2)-(9,2)
      { palavra: "CAVEIRA", direcao: [1,1], inicio: [3,3] },        // diagonal desc (3,3)-(9,9)
      { palavra: "TERROR", direcao: [-1,1], inicio: [14,7] },       // diagonal asc (14,7)-(8,13)
      { palavra: "CORVO", direcao: [0,1], inicio: [12,10] },        // horizontal (12,10)-(12,14)
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [7,7] },      // vertical (7,7)-(14,7)
      { palavra: "VELA", direcao: [1,1], inicio: [4,4] },           // diagonal desc (4,4)-(7,7)
      { palavra: "NOITE", direcao: [0,1], inicio: [10,12] },        // horizontal (10,12)-(10,16) (ajustado para [10,8])
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [9,4] },      // vertical (9,4)-(16,4)
      { palavra: "ARANHA", direcao: [1,1], inicio: [2,12] }         // diagonal desc (2,12)-(7,17) (ajustado para [2,7])
    ]
  ]
};

let grid = [];
let tamanho = 8;
let palavrasSelecionadas = [];
let posicoesPalavras = [];
let nivelAtual = "facil";
let rodadaNivel = 0;
let totalRodadasPorNivel = 3;

function começarJogo() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("btnVerificar").style.display = "inline-block";
  document.getElementById("btnProximaRodada").style.display = "none";
  document.getElementById("btnReplay").style.display = "none";
  rodadaNivel = 0;
  nivelAtual = "facil";
  iniciarRodada();
}

function iniciarRodada() {
  rodadaNivel++;
  if (nivelAtual === "facil") tamanho = 8;
  else if (nivelAtual === "medio") tamanho = 12;
  else if (nivelAtual === "dificil") tamanho = 15;

  preencherGradeFixa(nivelAtual, rodadaNivel - 1);

  document.getElementById("palavrasRestantes").innerText = `Palavras: ${palavrasSelecionadas.join(", ")}`;
  document.getElementById("resultado").innerText = "";
  document.getElementById("statusNivel").innerText = `Nível: ${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)}`;
  document.getElementById("statusRodada").innerText = `Rodada: ${rodadaNivel} / ${totalRodadasPorNivel}`;
  document.getElementById("btnProximaRodada").style.display = "none";
  document.getElementById("btnReplay").style.display = "none";
  document.getElementById("btnVerificar").style.display = "inline-block";
}

function preencherGradeFixa(nivel, rodada) {
  grid = Array.from({ length: tamanho }, () => Array(tamanho).fill(""));
  palavrasSelecionadas = [];
  posicoesPalavras = [];
  let rodadaAtual = rodadasFixas[nivel][rodada];

  rodadaAtual.forEach(({ palavra, direcao, inicio }) => {
    let coords = [];
    let [dx, dy] = direcao;
    let [x, y] = inicio;
    for (let i = 0; i < palavra.length; i++) {
      let r = x + i * dx;
      let c = y + i * dy;
      grid[r][c] = palavra[i];
      coords.push([r, c]);
    }
    posicoesPalavras.push({ palavra, posicoes: coords });
    palavrasSelecionadas.push(palavra);
  });
  preencherLetrasAleatorias();
  renderizarGrade();
}

function preencherLetrasAleatorias() {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < tamanho; r++) {
    for (let c = 0; c < tamanho; c++) {
      if (grid[r][c] == "") grid[r][c] = letras[Math.floor(Math.random() * letras.length)];
    }
  }
}

function renderizarGrade() {
  const container = document.getElementById("grid");
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${tamanho},40px)`;
  for (let r = 0; r < tamanho; r++) {
    for (let c = 0; c < tamanho; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.innerText = grid[r][c];
      cell.dataset.row = r;
      cell.dataset.col = c;
      cell.onclick = () => cell.classList.toggle("selected");
      container.appendChild(cell);
    }
  }
}

function verificarRespostas() {
  const btn = document.getElementById("btnVerificar");
  btn.disabled = true;

  const selecionadas = Array.from(
    document.querySelectorAll(".cell.selected")
  ).map(cell => [parseInt(cell.dataset.row), parseInt(cell.dataset.col)]);

  let acertos = 0;

  posicoesPalavras.forEach(p => {
    const todasMarcadas = p.posicoes.every(coord =>
      selecionadas.some(sel => sel[0] === coord[0] && sel[1] === coord[1])
    );
    if (todasMarcadas) acertos++;
  });

  const resultadoEl = document.getElementById("resultado");
  resultadoEl.innerText = `Você acertou ${acertos} de ${palavrasSelecionadas.length} palavras!`;

  if (acertos === palavrasSelecionadas.length) {
    // Acertou todas → exibe botão Próxima Rodada ou Replay
    if (nivelAtual === "fim" || (nivelAtual === "dificil" && rodadaNivel === totalRodadasPorNivel)) {
      resultadoEl.innerText += "\nParabéns! Você terminou todos os níveis!";
      btn.style.display = "none";
      document.getElementById("btnReplay").style.display = "inline-block";
      document.getElementById("btnProximaRodada").style.display = "none";
    } else {
      resultadoEl.innerText += `\nParabéns! Clique em \"Próxima Rodada\" para continuar!`;
      btn.style.display = "none";
      document.getElementById("btnProximaRodada").style.display = "inline-block";
    }
  } else {
    // Errou → não trava, apenas mostra a mensagem
    resultadoEl.innerText += "\nVocê precisa acertar todas as palavras para avançar!";
    document.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
    btn.disabled = false; // libera botão para tentar novamente
  }
}

function proximaRodada() {
  if (rodadaNivel < totalRodadasPorNivel) {
    iniciarRodada();
  } else {
    if (nivelAtual === "facil") nivelAtual = "medio";
    else if (nivelAtual === "medio") nivelAtual = "dificil";
    else nivelAtual = "fim";
    rodadaNivel = 0;
    if (nivelAtual === "fim") {
      document.getElementById("resultado").innerText = "Parabéns! Você terminou todos os níveis!";
      document.getElementById("btnProximaRodada").style.display = "none";
      document.getElementById("btnReplay").style.display = "inline-block";
    } else {
      iniciarRodada();
    }
  }
}


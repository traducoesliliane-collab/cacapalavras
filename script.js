// Definição dos grids fixos para cada rodada e nível
// Cada palavra tem: palavra, direção ([dx,dy]), início ([linha,coluna])
const rodadasFixas = {
  facil: [
    [
      { palavra: "ABOBORA", direcao: [0,1], inicio: [0,0] },    // horizontal
      { palavra: "BRUXA", direcao: [1,0], inicio: [1,7] },      // vertical
      { palavra: "VAMPIRO", direcao: [1,1], inicio: [2,0] },    // diagonal desc
      { palavra: "FANTASMA", direcao: [-1,1], inicio: [7,0] },  // diagonal asc
      { palavra: "GATO", direcao: [0,1], inicio: [5,3] }        // horizontal
    ],
    [
      { palavra: "MORCEGO", direcao: [0,1], inicio: [2,0] },
      { palavra: "ZUMBI", direcao: [1,0], inicio: [0,5] },
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [0,0] },
      { palavra: "CAVEIRA", direcao: [-1,1], inicio: [7,1] },
      { palavra: "TERROR", direcao: [0,1], inicio: [6,2] }
    ],
    [
      { palavra: "CORVO", direcao: [0,1], inicio: [7,3] },
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [0,0] },
      { palavra: "DRACULA", direcao: [1,1], inicio: [0,1] },
      { palavra: "CRIPTA", direcao: [-1,1], inicio: [6,0] },
      { palavra: "VELA", direcao: [0,1], inicio: [4,4] }
    ]
  ],
  medio: [
    [
      { palavra: "NOITE", direcao: [0,1], inicio: [0,0] },
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [3,2] },
      { palavra: "ARANHA", direcao: [1,1], inicio: [2,6] },
      { palavra: "MUMIA", direcao: [-1,1], inicio: [11,0] },
      { palavra: "MALDICAO", direcao: [0,1], inicio: [7,4] },
      { palavra: "ESPIRITO", direcao: [1,0], inicio: [0,10] },
      { palavra: "FEITICO", direcao: [1,1], inicio: [5,0] },
      { palavra: "MORTE", direcao: [0,1], inicio: [11,7] }
    ],
    [
      { palavra: "SANGUE", direcao: [0,1], inicio: [0,2] },
      { palavra: "COBERTAO", direcao: [1,0], inicio: [1,7] },
      { palavra: "LENDA", direcao: [1,1], inicio: [2,5] },
      { palavra: "MONSTRO", direcao: [-1,1], inicio: [11,2] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [9,0] },
      { palavra: "ABISMO", direcao: [1,0], inicio: [0,5] },
      { palavra: "BRUXA", direcao: [1,1], inicio: [5,2] },
      { palavra: "MORCEGO", direcao: [0,1], inicio: [7,8] }
    ],
    [
      { palavra: "ABOBORA", direcao: [0,1], inicio: [4,0] },
      { palavra: "FANTASMA", direcao: [1,0], inicio: [5,6] },
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [2,1] },
      { palavra: "CAVEIRA", direcao: [-1,1], inicio: [11,7] },
      { palavra: "TERROR", direcao: [0,1], inicio: [10,3] },
      { palavra: "CORVO", direcao: [1,0], inicio: [2,9] },
      { palavra: "LOBISOMEM", direcao: [1,1], inicio: [0,4] },
      { palavra: "DRACULA", direcao: [0,1], inicio: [8,7] }
    ]
  ],
  dificil: [
    [
      { palavra: "CRIPTA", direcao: [0,1], inicio: [2,2] },
      { palavra: "VELA", direcao: [1,0], inicio: [3,11] },
      { palavra: "NOITE", direcao: [1,1], inicio: [10,2] },
      { palavra: "ESCURIDAO", direcao: [-1,1], inicio: [14,0] },
      { palavra: "ARANHA", direcao: [0,1], inicio: [12,5] },
      { palavra: "MUMIA", direcao: [1,0], inicio: [0,8] },
      { palavra: "MALDICAO", direcao: [1,1], inicio: [8,3] },
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [14,7] },
      { palavra: "FEITICO", direcao: [1,0], inicio: [2,10] },
      { palavra: "MORTE", direcao: [1,1], inicio: [0,14] }
    ],
    [
      { palavra: "SANGUE", direcao: [0,1], inicio: [4,2] },
      { palavra: "CEMITERIO", direcao: [1,0], inicio: [7,8] },
      { palavra: "LENDA", direcao: [1,1], inicio: [1,1] },
      { palavra: "MONSTRO", direcao: [-1,1], inicio: [12,3] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [10,5] },
      { palavra: "ABISMO", direcao: [1,0], inicio: [0,10] },
      { palavra: "BRUXA", direcao: [1,1], inicio: [5,5] },
      { palavra: "MORCEGO", direcao: [0,1], inicio: [11,9] },
      { palavra: "ABOBORA", direcao: [1,0], inicio: [13,3] },
      { palavra: "DRACULA", direcao: [0,1], inicio: [7,2] }
    ],
    [
      { palavra: "FANTASMA", direcao: [0,1], inicio: [1,1] },
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [2,2] },
      { palavra: "CAVEIRA", direcao: [1,1], inicio: [3,3] },
      { palavra: "TERROR", direcao: [-1,1], inicio: [14,7] },
      { palavra: "CORVO", direcao: [0,1], inicio: [12,10] },
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [7,7] },
      { palavra: "VELA", direcao: [1,1], inicio: [4,4] },
      { palavra: "NOITE", direcao: [0,1], inicio: [10,12] },
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [9,4] },
      { palavra: "ARANHA", direcao: [1,1], inicio: [2,12] }
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

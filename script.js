// Definição dos grids fixos para cada rodada e nível
// Cada palavra tem: palavra, direção ([dx,dy]), início ([linha,coluna])
const rodadasFixas = {
  facil: [
    [
      { palavra: "GATO", direcao: [0,1], inicio: [0,0] },
      { palavra: "VELA", direcao: [1,0], inicio: [3,7] },
      { palavra: "MUMIA", direcao: [1,1], inicio: [5,2] },
      { palavra: "NOITE", direcao: [0,1], inicio: [7,8] },
      { palavra: "ARANHA", direcao: [1,0], inicio: [10,10] },
      { palavra: "CORVO", direcao: [0,1], inicio: [14,6] }
    ],
    [
      { palavra: "TERROR", direcao: [0,1], inicio: [2,2] },
      { palavra: "LOBISOMEM", direcao: [1,1], inicio: [0,4] },
      { palavra: "CAVEIRA", direcao: [1,0], inicio: [6,12] },
      { palavra: "MORCEGO", direcao: [0,1], inicio: [10,0] },
      { palavra: "ESPIRITO", direcao: [1,1], inicio: [5,6] },
      { palavra: "DRACULA", direcao: [0,1], inicio: [12,8] }
    ],
    [
      { palavra: "ZUMBI", direcao: [1,0], inicio: [0,13] },
      { palavra: "BRUXA", direcao: [1,1], inicio: [9,2] },
      { palavra: "SANGUE", direcao: [0,1], inicio: [11,2] },
      { palavra: "CRIPTA", direcao: [1,0], inicio: [7,7] },
      { palavra: "CALDEIRAO", direcao: [0,1], inicio: [13,3] },
      { palavra: "FEITICO", direcao: [1,1], inicio: [5,5] }
    ]
  ],
  medio: [
    [
      { palavra: "MALDICAO", direcao: [0,1], inicio: [0,4] },
      { palavra: "MONSTRO", direcao: [1,1], inicio: [3,9] },
      { palavra: "FANTASMA", direcao: [1,0], inicio: [8,7] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [13,1] },
      { palavra: "ABOBORA", direcao: [1,0], inicio: [2,11] },
      { palavra: "ESCURIDAO", direcao: [1,1], inicio: [6,2] },
      { palavra: "LENDA", direcao: [1,0], inicio: [15,14] }
    ],
    [
      { palavra: "LOBISOMEM", direcao: [1,1], inicio: [0,0] },
      { palavra: "CALDEIRAO", direcao: [0,1], inicio: [7,9] },
      { palavra: "CEMITERIO", direcao: [1,0], inicio: [7,3] },
      { palavra: "CAVEIRA", direcao: [0,1], inicio: [14,8] },
      { palavra: "VELA", direcao: [1,0], inicio: [10,15] },
      { palavra: "FEITICO", direcao: [1,1], inicio: [12,3] },
      { palavra: "ABISMO", direcao: [0,1], inicio: [16,2] }
    ],
    [
      { palavra: "FANTASMA", direcao: [0,1], inicio: [3,2] },
      { palavra: "SANGUE", direcao: [1,0], inicio: [2,9] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [4,4] },
      { palavra: "MONSTRO", direcao: [0,1], inicio: [12,9] },
      { palavra: "ESPIRITO", direcao: [1,0], inicio: [11,11] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [9,8] },
      { palavra: "ABOBORA", direcao: [1,1], inicio: [4,10] }
    ]
  ],
  dificil: [
    [
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [3,3] },
      { palavra: "LOBISOMEM", direcao: [0,1], inicio: [15,4] },
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [4,8] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [9,10] },
      { palavra: "ABOBORA", direcao: [1,0], inicio: [12,11] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [7,12] },
      { palavra: "MONSTRO", direcao: [0,1], inicio: [19,2] },
      { palavra: "ASSOMBRO", direcao: [1,0], inicio: [0,17] }
    ],
    [
      { palavra: "FANTASMA", direcao: [1,1], inicio: [1,1] },
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [0,9] },
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [12,4] },
      { palavra: "ABOBORA", direcao: [0,1], inicio: [10,2] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [6,6] },
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [2,15] },
      { palavra: "ESCURIDAO", direcao: [0,1], inicio: [17,7] },
      { palavra: "URUCUBACA", direcao: [1,1], inicio: [14,5] }
    ],
    [
      { palavra: "FANTASMA", direcao: [1,1], inicio: [8,7] },
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [13,13] },
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [18,5] },
      { palavra: "ABOBORA", direcao: [0,1], inicio: [19,0] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [13,7] },
      { palavra: "LOBISOMEM", direcao: [0,1], inicio: [16,10] },
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [3,18] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [17,8] }
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
  if (nivelAtual === "facil") tamanho = 15;
  else if (nivelAtual === "medio") tamanho = 17;
  else if (nivelAtual === "dificil") tamanho = 20;

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




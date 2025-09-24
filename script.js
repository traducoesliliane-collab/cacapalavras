function getGridSize(nivel) {
  if (nivel === "facil") return 10;
  if (nivel === "medio") return 15;
  if (nivel === "dificil") return 17;
  return 10;
}

const rodadasFixas = {
  facil: [
    [
      { palavra: "GATO", direcao: [0,1], inicio: [0,0] },        // horizontal
      { palavra: "VELA", direcao: [1,0], inicio: [2,5] },        // vertical
      { palavra: "MUMIA", direcao: [1,1], inicio: [0,6] },       // diagonal desc
      { palavra: "NOITE", direcao: [0,1], inicio: [5,0] },       // horizontal
      { palavra: "ARANHA", direcao: [1,0], inicio: [1,9] }       // vertical
    ],
    [
      { palavra: "TERROR", direcao: [0,1], inicio: [0,2] },
      { palavra: "CAVEIRA", direcao: [1,0], inicio: [3,10] },
      { palavra: "MORCEGO", direcao: [0,1], inicio: [7,0] },
      { palavra: "ESPIRITO", direcao: [1,1], inicio: [0,7] },
      { palavra: "DRACULA", direcao: [0,1], inicio: [9,5] }
    ],
    [
      { palavra: "ZUMBI", direcao: [1,0], inicio: [0,8] },
      { palavra: "BRUXA", direcao: [1,1], inicio: [2,0] },
      { palavra: "SANGUE", direcao: [0,1], inicio: [6,3] },
      { palavra: "CRIPTA", direcao: [1,0], inicio: [4,6] },
      { palavra: "FEITICO", direcao: [1,1], inicio: [0,2] }
    ]
  ],
  medio: [
    [
      { palavra: "MALDICAO", direcao: [0,1], inicio: [0,0] },
      { palavra: "MONSTRO", direcao: [1,1], inicio: [4,2] },
      { palavra: "FANTASMA", direcao: [1,0], inicio: [7,10] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [10,0] },
      { palavra: "ABOBORA", direcao: [1,0], inicio: [2,12] },
      { palavra: "ESCURIDAO", direcao: [1,1], inicio: [6,4] },
      { palavra: "LENDA", direcao: [1,0], inicio: [14,7] }
    ],
    [
      { palavra: "LOBISOMEM", direcao: [1,1], inicio: [0,5] },
      { palavra: "CALDEIRAO", direcao: [0,1], inicio: [6,0] },
      { palavra: "CEMITERIO", direcao: [1,0], inicio: [9,6] },
      { palavra: "CAVEIRA", direcao: [0,1], inicio: [14,4] },
      { palavra: "VELA", direcao: [1,0], inicio: [13,10] },
      { palavra: "FEITICO", direcao: [1,1], inicio: [8,8] },
      { palavra: "ABISMO", direcao: [0,1], inicio: [12,13] }
    ],
    [
      { palavra: "FANTASMA", direcao: [0,1], inicio: [2,0] },
      { palavra: "SANGUE", direcao: [1,0], inicio: [4,12] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [6,2] },
      { palavra: "MONSTRO", direcao: [0,1], inicio: [13,5] },
      { palavra: "ESPIRITO", direcao: [1,0], inicio: [11,0] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [9,9] },
      { palavra: "ABOBORA", direcao: [1,1], inicio: [3,11] }
    ]
  ],
  dificil: [
    [
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [0,0] },
      { palavra: "LOBISOMEM", direcao: [0,1], inicio: [15,0] },
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [4,9] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [11,12] },
      { palavra: "ABOBORA", direcao: [1,0], inicio: [12,4] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [7,6] },
      { palavra: "MONSTRO", direcao: [0,1], inicio: [16,13] },
      { palavra: "ASSOMBRO", direcao: [1,0], inicio: [2,14] }
    ],
    [
      { palavra: "FANTASMA", direcao: [1,1], inicio: [1,3] },
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [0,12] },
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [13,5] },
      { palavra: "ABOBORA", direcao: [0,1], inicio: [10,0] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [6,9] },
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [2,16] },
      { palavra: "ESCURIDAO", direcao: [0,1], inicio: [17,3] },
      { palavra: "URUCUBACA", direcao: [1,1], inicio: [14,7] }
    ],
    [
      { palavra: "FANTASMA", direcao: [1,1], inicio: [8,3] },
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [13,0] },
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [16,6] },
      { palavra: "ABOBORA", direcao: [0,1], inicio: [16,14] },
      { palavra: "CEMITERIO", direcao: [1,1], inicio: [12,5] },
      { palavra: "LOBISOMEM", direcao: [0,1], inicio: [15,9] },
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [3,0] },
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [17,10] }
    ]
  ]
};

let grid = [];
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
  let tamanho = getGridSize(nivelAtual);
  preencherGradeFixa(nivelAtual, rodadaNivel - 1, tamanho);

  document.getElementById("palavrasRestantes").innerText = `Palavras: ${palavrasSelecionadas.join(", ")}`;
  document.getElementById("resultado").innerText = "";
  document.getElementById("statusNivel").innerText = `Nível: ${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)}`;
  document.getElementById("statusRodada").innerText = `Rodada: ${rodadaNivel} / ${totalRodadasPorNivel}`;
  document.getElementById("btnProximaRodada").style.display = "none";
  document.getElementById("btnReplay").style.display = "none";
  document.getElementById("btnVerificar").style.display = "inline-block";
}

function preencherGradeFixa(nivel, rodada, tamanho) {
  grid = Array.from({ length: tamanho }, () => Array(tamanho).fill(""));
  palavrasSelecionadas = [];
  posicoesPalavras = [];
  let rodadaAtual = rodadasFixas[nivel][rodada];

  rodadaAtual.forEach(({ palavra, direcao, inicio }) => {
    let coords = [];
    let [dx, dy] = direcao;
    let [x, y] = inicio;
    let cabe = true;
    for (let i = 0; i < palavra.length; i++) {
      let r = x + i * dx;
      let c = y + i * dy;
      if (r < 0 || r >= tamanho || c < 0 || c >= tamanho) {
        console.error(`Palavra "${palavra}" sai do grid em [${r},${c}] no nível ${nivel}, rodada ${rodada + 1}.`);
        cabe = false;
        break;
      }
      coords.push([r, c]);
    }
    if (cabe) {
      coords.forEach((pos, i) => grid[pos[0]][pos[1]] = palavra[i]);
      posicoesPalavras.push({ palavra, posicoes: coords });
      palavrasSelecionadas.push(palavra);
    }
  });
  preencherLetrasAleatorias(tamanho);
  renderizarGrade(tamanho);
}

function preencherLetrasAleatorias(tamanho) {
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let r = 0; r < tamanho; r++) {
    for (let c = 0; c < tamanho; c++) {
      if (grid[r][c] == "") grid[r][c] = letras[Math.floor(Math.random() * letras.length)];
    }
  }
}

function renderizarGrade(tamanho) {
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
    if (nivelAtual === "fim" || (nivelAtual === "dificil" && rodadaNivel === totalRodadasPorNivel)) {
      resultadoEl.innerText += "\nParabéns! Você terminou todos os níveis!";
      btn.style.display = "none";
      document.getElementById("btnReplay").style.display = "inline-block";
      document.getElementById("btnProximaRodada").style.display = "none";
    } else {
      resultadoEl.innerText += `\nParabéns! Clique em "Próxima Rodada" para continuar!`;
      btn.style.display = "none";
      document.getElementById("btnProximaRodada").style.display = "inline-block";
    }
  } else {
    resultadoEl.innerText += "\nVocê precisa acertar todas as palavras para avançar!";
    document.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
    btn.disabled = false;
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


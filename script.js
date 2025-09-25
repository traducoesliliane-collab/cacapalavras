function getGridSize(nivel) {
  if (nivel === "facil") return 10;
  if (nivel === "medio") return 15;
  if (nivel === "dificil") return 17;
  return 10;
}

const rodadasFixas = {
  facil: [
    [
      { palavra: "GATO", direcao: [0,1], inicio: [0,0] },
      { palavra: "VELA", direcao: [1,0], inicio: [2,5] },
      { palavra: "MUMIA", direcao: [1,1], inicio: [0,4] },
      { palavra: "NOITE", direcao: [0,1], inicio: [5,0] },
      { palavra: "RATO", direcao: [1,0], inicio: [1,9] }
    ],
    [
      { palavra: "TERROR", direcao: [0,1], inicio: [0,2] },
      { palavra: "OSSOS", direcao: [1,0], inicio: [3,7] },
      { palavra: "MORCEGO", direcao: [0,1], inicio: [7,0] },
      { palavra: "BRUXA", direcao: [0,1], inicio: [9,0] },
      { palavra: "MEDO", direcao: [0,1], inicio: [8,5] }
    ],
    [
      { palavra: "ZUMBI", direcao: [1,0], inicio: [0,8] },
      { palavra: "FOGAO", direcao: [1,1], inicio: [2,0] },
      { palavra: "SANGUE", direcao: [0,1], inicio: [6,3] },
      { palavra: "CRIPTA", direcao: [1,0], inicio: [4,0] },
      { palavra: "MORTE", direcao: [1,1], inicio: [0,2] }
    ]
  ]
  // Você pode adicionar as rodadas médio e difícil aqui também...
};

let grid = [];
let palavrasSelecionadas = [];
let posicoesPalavras = [];
let nivelAtual = "facil";
let rodadaNivel = 0;
let totalRodadasPorNivel = 3;

function comecarJogo() {
  rodadaNivel = 0;
  nivelAtual = "facil";
  iniciarRodada();
}

function iniciarRodada() {
  let tamanho = getGridSize(nivelAtual);
  preencherGradeFixa(nivelAtual, rodadaNivel, tamanho);
  document.getElementById("palavrasRestantes").innerText = `Palavras: ${palavrasSelecionadas.join(", ")}`;
  document.getElementById("resultado").innerText = "";
  document.getElementById("statusNivel").innerText = `Nível: ${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)}`;
  document.getElementById("statusRodada").innerText = `Rodada: ${rodadaNivel + 1} / ${totalRodadasPorNivel}`;

  document.getElementById("btnProximaRodada").style.display = "none";
  document.getElementById("btnReplay").style.display = "none";

  document.getElementById("btnVerificar").style.display = "inline-block";
  document.getElementById("btnVerificar").disabled = false;
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
        cabe = false;
        break;
      }
      if (grid[r][c] !== "" && grid[r][c] !== palavra[i]) {
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
      if (grid[r][c] === "") grid[r][c] = letras[Math.floor(Math.random() * letras.length)];
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
    setTimeout(proximaRodada, 1000);
  } else {
    document.getElementById("btnTenteNovamente").style.display = "inline-block";
  }
}

function proximaRodada() {
  rodadaNivel++;
  if (rodadaNivel < totalRodadasPorNivel) {
    iniciarRodada();
  }
}

window.onload = comecarJogo;


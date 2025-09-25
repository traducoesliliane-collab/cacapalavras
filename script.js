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
      { palavra: "DRACULA", direcao: [0,1], inicio: [9,1] }
    ],
    [
      { palavra: "ZUMBI", direcao: [1,0], inicio: [0,8] },
      { palavra: "FOGAO", direcao: [1,1], inicio: [2,0] },
      { palavra: "SANGUE", direcao: [0,1], inicio: [6,3] },
      { palavra: "CRIPTA", direcao: [1,0], inicio: [4,0] },
      { palavra: "MORTE", direcao: [1,1], inicio: [0,2] }
    ]
  ],
  medio: [
    [
      { palavra: "MALDICAO", direcao: [0,1], inicio: [0,0] },
      { palavra: "MONSTRO", direcao: [1,1], inicio: [4,2] },
      { palavra: "FANTASMA", direcao: [1,0], inicio: [7,5] },
      { palavra: "BRUXARIA", direcao: [0,1], inicio: [10,0] },
      { palavra: "ABOBORA", direcao: [1,0], inicio: [2,7] },
      { palavra: "SOMBRA", direcao: [1,1], inicio: [6,4] },
      { palavra: "LENDA", direcao: [1,0], inicio: [14,7] }
    ],
    [
      { palavra: "LOBO", direcao: [1,1], inicio: [0,5] },
      { palavra: "CALDEIRAO", direcao: [0,1], inicio: [6,0] },
      { palavra: "TUMULO", direcao: [1,0], inicio: [9,3] },
      { palavra: "OSSOS", direcao: [0,1], inicio: [14,4] },
      { palavra: "VELA", direcao: [1,0], inicio: [13,10] },
      { palavra: "FANTASMA", direcao: [1,1], inicio: [8,8] },
      { palavra: "ABISMO", direcao: [0,1], inicio: [12,13] }
    ],
    [
      { palavra: "ZUMBI", direcao: [0,1], inicio: [2,0] },
      { palavra: "SANGUE", direcao: [1,0], inicio: [4,12] },
      { palavra: "TUMULO", direcao: [1,1], inicio: [6,2] },
      { palavra: "MONSTRO", direcao: [0,1], inicio: [13,5] },
      { palavra: "ESPANTO", direcao: [1,0], inicio: [11,0] },
      { palavra: "BRUXA", direcao: [0,1], inicio: [9,9] },
      { palavra: "ABOBORA", direcao: [1,1], inicio: [3,11] }
    ]
  ],
  dificil: [
    [
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [0,0] },
      { palavra: "LOBO", direcao: [0,1], inicio: [15,0] },
      { palavra: "SOMBRA", direcao: [1,0], inicio: [4,9] },
      { palavra: "ALMAS", direcao: [0,1], inicio: [11,12] },
      { palavra: "ABOBORA", direcao: [1,0], inicio: [12,4] },
      { palavra: "TUMULO", direcao: [1,1], inicio: [7,6] },
      { palavra: "MONSTRO", direcao: [0,1], inicio: [16,6] },
      { palavra: "ASSOMBRO", direcao: [1,0], inicio: [2,14] }
    ],
    [
      { palavra: "FANTASMA", direcao: [1,1], inicio: [1,3] },
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [0,12] },
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [13,5] },
      { palavra: "ABOBORA", direcao: [0,1], inicio: [10,0] },
      { palavra: "TUMULO", direcao: [1,1], inicio: [6,9] },
      { palavra: "LOBO", direcao: [1,0], inicio: [2,8] },
      { palavra: "TREVAS", direcao: [0,1], inicio: [15,3] },
      { palavra: "ALMAS", direcao: [1,1], inicio: [14,7] }
    ],
    [
      { palavra: "FANTASMA", direcao: [1,1], inicio: [8,3] },
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [13,0] },
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [16,6] },
      { palavra: "ABOBORA", direcao: [0,1], inicio: [16,10] },
      { palavra: "TUMULO", direcao: [1,1], inicio: [12,5] },
      { palavra: "LOBO", direcao: [0,1], inicio: [8,14] },
      { palavra: "ASSOMBRO", direcao: [1,0], inicio: [3,0] },
      { palavra: "MORTE", direcao: [0,1], inicio: [10,14] }
    ]
  ]
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
  document.getElementById("btnVerificar").style.display = "inline-block";
  document.getElementById("btnVerificar").disabled = false;
  document.getElementById("btnProximaRodada").style.display = "none";
  document.getElementById("btnReplay").style.display = "none";
  document.getElementById("btnTenteNovamente").style.display = "none";
  document.getElementById("resultado").innerText = "";
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
  document.getElementById("btnTenteNovamente").style.display = "none";
  // Reset do botão enviar resposta
  const btnVerificar = document.getElementById("btnVerificar");
  btnVerificar.disabled = false;
  btnVerificar.style.display = "inline-block";
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
      if (r < 0 || r >= tamanho || c < 0 || c >= tamanho || (grid[r][c] !== "" && grid[r][c] !== palavra[i])) {
        cabe = false;
        break;
      }
      coords.push([r, c]);
    }

    if (!cabe) {
      let encontrou = false;
      for (let attempt = 0; attempt < 100; attempt++) {
        let nx = Math.floor(Math.random() * tamanho);
        let ny = Math.floor(Math.random() * tamanho);
        coords = [];
        cabe = true;
        for (let i = 0; i < palavra.length; i++) {
          let r = nx + i * dx;
          let c = ny + i * dy;
          if (r < 0 || r >= tamanho || c < 0 || c >= tamanho || (grid[r][c] !== "" && grid[r][c] !== palavra[i])) {
            cabe = false;
            break;
          }
          coords.push([r, c]);
        }
        if (cabe) {
          encontrou = true;
          break;
        }
      }
      if (!cabe) {
        console.warn(`Não foi possível colocar a palavra "${palavra}" no nível ${nivel}, rodada ${rodada+1}`);
        return;
      }
    }

    coords.forEach((pos, i) => grid[pos[0]][pos[1]] = palavra[i]);
    posicoesPalavras.push({ palavra, posicoes: coords });
    palavrasSelecionadas.push(palavra);
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
    btn.style.display = "none";
    document.getElementById("btnTenteNovamente").style.display = "none";
    document.getElementById("btnProximaRodada").style.display = "inline-block";
  } else {
    resultadoEl.innerText += "\nVocê precisa acertar todas as palavras para avançar!";
    document.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
    document.getElementById("btnTenteNovamente").style.display = "inline-block";
    btn.disabled = false; // reabilita se errou
  }
}

function proximaRodada() {
  rodadaNivel++;
  if (rodadaNivel < totalRodadasPorNivel) {
    iniciarRodada();
  } else {
    if (nivelAtual === "facil") nivelAtual = "medio";
    else if (nivelAtual === "medio") nivelAtual = "dificil";
    else nivelAtual = "fim";
    rodadaNivel = 0;
    if (nivelAtual !== "fim") {
      iniciarRodada();
    } else {
      document.getElementById("resultado").innerText = "Parabéns! Você terminou todos os níveis!";
      document.getElementById("btnProximaRodada").style.display = "none";
      document.getElementById("btnReplay").style.display = "inline-block";
      document.getElementById("btnVerificar").style.display = "none";
      document.getElementById("btnTenteNovamente").style.display = "none";
    }
  }
}

window.onload = comecarJogo;

// Definição dos grids fixos para cada rodada e nível
// Cada palavra tem: palavra, direção ([dx,dy]), início ([linha,coluna])
const rodadasFixas = {
  facil: [
    [
      { palavra: "ABOBORA", direcao: [0,1], inicio: [0,0] },
      { palavra: "BRUXA", direcao: [1,0], inicio: [1,7] },
      { palavra: "VAMPIRO", direcao: [1,1], inicio: [1,0] },
      { palavra: "FANTASMA", direcao: [-1,1], inicio: [7,0] },
      { palavra: "GATO", direcao: [0,1], inicio: [5,3] }
    ],
    [
      { palavra: "MORCEGO", direcao: [0,1], inicio: [2,0] },
      { palavra: "ZUMBI", direcao: [1,0], inicio: [3,0] },
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [0,1] },
      { palavra: "CAVEIRA", direcao: [-1,1], inicio: [7,1] },
      { palavra: "TERROR", direcao: [0,1], inicio: [6,2] }
    ],
    [
      { palavra: "CORVO", direcao: [0,1], inicio: [7,3] },
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [0,4] },
      { palavra: "DRACULA", direcao: [1,1], inicio: [0,1] },
      { palavra: "CRIPTA", direcao: [-1,1], inicio: [5,2] },
      { palavra: "VELA", direcao: [0,1], inicio: [4,4] }
    ]
  ],
  medio: [
    [
      // NOITE: horizontal, [0,0] a [0,4]
      { palavra: "NOITE", direcao: [0,1], inicio: [0,0] },
      // ESCURIDAO: vertical, [2,2] a [10,2]
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [2,2] },
      // ARANHA: diagonal desc, [2,6] a [7,11]
      { palavra: "ARANHA", direcao: [1,1], inicio: [2,6] },
      // MUMIA: diagonal asc, [11,0] a [7,4]
      { palavra: "MUMIA", direcao: [-1,1], inicio: [11,0] },
      // MALDICAO: horizontal, [7,4] a [7,11]
      { palavra: "MALDICAO", direcao: [0,1], inicio: [7,4] },
      // ESPIRITO: vertical, [0,10] a [7,10]
      { palavra: "ESPIRITO", direcao: [1,0], inicio: [0,10] },
      // FEITICO: diagonal desc, [2,0] a [8,6]
      { palavra: "FEITICO", direcao: [1,1], inicio: [2,0] },
      // MORTE: horizontal, [11,7] a [11,11]
      { palavra: "MORTE", direcao: [0,1], inicio: [11,7] }
    ],
    [
      // SANGUE: horizontal, [0,2] a [0,7]
      { palavra: "SANGUE", direcao: [0,1], inicio: [0,2] },
      // COBERTAO: vertical, [1,7] a [8,7]
      { palavra: "COBERTAO", direcao: [1,0], inicio: [1,7] },
      // LENDA: diagonal desc, [2,5] a [6,9]
      { palavra: "LENDA", direcao: [1,1], inicio: [2,5] },
      // MONSTRO: diagonal asc, [7,2] a [1,8]
      { palavra: "MONSTRO", direcao: [-1,1], inicio: [7,2] },
      // URUCUBACA: horizontal, [9,0] a [9,7]
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [9,0] },
      // ABISMO: vertical, [0,11] a [5,11]
      { palavra: "ABISMO", direcao: [1,0], inicio: [0,11] },
      // BRUXA: diagonal desc, [5,2] a [9,6]
      { palavra: "BRUXA", direcao: [1,1], inicio: [5,2] },
      // MORCEGO: horizontal, [7,3] a [7,9]
      { palavra: "MORCEGO", direcao: [0,1], inicio: [7,3] }
    ],
    [
      // ABOBORA: horizontal, [4,0] a [4,6]
      { palavra: "ABOBORA", direcao: [0,1], inicio: [4,0] },
      // FANTASMA: vertical, [3,5] a [10,5]
      { palavra: "FANTASMA", direcao: [1,0], inicio: [3,5] },
      // CALDEIRAO: diagonal desc, [2,1] a [9,8]
      { palavra: "CALDEIRAO", direcao: [1,1], inicio: [2,1] },
      // CAVEIRA: diagonal asc, [11,7] a [5,13]
      { palavra: "CAVEIRA", direcao: [-1,1], inicio: [11,7] },
      // TERROR: horizontal, [10,3] a [10,8]
      { palavra: "TERROR", direcao: [0,1], inicio: [10,3] },
      // CORVO: vertical, [2,9] a [6,9]
      { palavra: "CORVO", direcao: [1,0], inicio: [2,9] },
      // LOBISOMEM: diagonal desc, [0,4] a [7,11]
      { palavra: "LOBISOMEM", direcao: [1,1], inicio: [0,4] },
      // DRACULA: horizontal, [8,7] a [8,13]
      { palavra: "DRACULA", direcao: [0,1], inicio: [8,7] }
    ]
  ],
  dificil: [
    [
      // CRIPTA: horizontal, [2,2] a [2,7]
      { palavra: "CRIPTA", direcao: [0,1], inicio: [2,2] },
      // VELA: vertical, [3,11] a [6,11]
      { palavra: "VELA", direcao: [1,0], inicio: [3,11] },
      // NOITE: diagonal desc, [10,2] a [14,6]
      { palavra: "NOITE", direcao: [1,1], inicio: [10,2] },
      // ESCURIDAO: vertical, [0,0] a [7,0]
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [0,0] },
      // ARANHA: horizontal, [12,5] a [12,10]
      { palavra: "ARANHA", direcao: [0,1], inicio: [12,5] },
      // MUMIA: vertical, [0,8] a [4,8]
      { palavra: "MUMIA", direcao: [1,0], inicio: [0,8] },
      // MALDICAO: diagonal desc, [8,3] a [15,10]
      { palavra: "MALDICAO", direcao: [1,1], inicio: [8,3] },
      // ESPIRITO: horizontal, [14,7] a [14,14]
      { palavra: "ESPIRITO", direcao: [0,1], inicio: [14,7] },
      // FEITICO: vertical, [2,10] a [8,10]
      { palavra: "FEITICO", direcao: [1,0], inicio: [2,10] },
      // MORTE: horizontal, [7,7] a [7,11]
      { palavra: "MORTE", direcao: [0,1], inicio: [7,7] }
    ],
    [
      // SANGUE: horizontal, [4,2] a [4,7]
      { palavra: "SANGUE", direcao: [0,1], inicio: [4,2] },
      // CEMITERIO: vertical, [5,5] a [13,5]
      { palavra: "CEMITERIO", direcao: [1,0], inicio: [5,5] },
      // LENDA: diagonal desc, [1,1] a [5,5]
      { palavra: "LENDA", direcao: [1,1], inicio: [1,1] },
      // MONSTRO: diagonal asc, [14,3] a [8,9]
      { palavra: "MONSTRO", direcao: [-1,1], inicio: [14,3] },
      // URUCUBACA: horizontal, [10,5] a [10,13]
      { palavra: "URUCUBACA", direcao: [0,1], inicio: [10,5] },
      // ABISMO: vertical, [0,10] a [5,10]
      { palavra: "ABISMO", direcao: [1,0], inicio: [0,10] },
      // BRUXA: diagonal desc, [5,7] a [9,11]
      { palavra: "BRUXA", direcao: [1,1], inicio: [5,7] },
      // MORCEGO: horizontal, [11,9] a [11,15]
      { palavra: "MORCEGO", direcao: [0,1], inicio: [11,9] },
      // ABOBORA: vertical, [8,3] a [14,3]
      { palavra: "ABOBORA", direcao: [1,0], inicio: [8,3] },
      // DRACULA: horizontal, [7,2] a [7,8]
      { palavra: "DRACULA", direcao: [0,1], inicio: [7,2] }
    ],
    [
      // FANTASMA: horizontal, [1,1] a [1,8]
      { palavra: "FANTASMA", direcao: [0,1], inicio: [1,1] },
      // CALDEIRAO: vertical, [2,2] a [9,2]
      { palavra: "CALDEIRAO", direcao: [1,0], inicio: [2,2] },
      // CAVEIRA: diagonal desc, [3,3] a [9,9]
      { palavra: "CAVEIRA", direcao: [1,1], inicio: [3,3] },
      // TERROR: diagonal asc, [14,7] a [8,13]
      { palavra: "TERROR", direcao: [-1,1], inicio: [14,7] },
      // CORVO: horizontal, [12,10] a [12,14]
      { palavra: "CORVO", direcao: [0,1], inicio: [12,10] },
      // LOBISOMEM: vertical, [7,7] a [14,7]
      { palavra: "LOBISOMEM", direcao: [1,0], inicio: [7,7] },
      // VELA: diagonal desc, [4,4] a [7,7]
      { palavra: "VELA", direcao: [1,1], inicio: [4,4] },
      // NOITE: horizontal, [10,8] a [10,12]
      { palavra: "NOITE", direcao: [0,1], inicio: [10,8] },
      // ESCURIDAO: vertical, [9,4] a [16,4]
      { palavra: "ESCURIDAO", direcao: [1,0], inicio: [9,4] },
      // ARANHA: diagonal desc, [2,7] a [7,12]
      { palavra: "ARANHA", direcao: [1,1], inicio: [2,7] }
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



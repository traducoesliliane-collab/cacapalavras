const palavrasHalloween = [
  "ABOBORA","FANTASMA","BRUXA","VAMPIRO","MORCEGO",
  "ZUMBI","CALDEIRAO","CAVEIRA","TERROR","ASSOMBRO",
  "CORVO","LOBISOMEM","DRACULA","CRIPTA","GATO",
  "NOITE","ESCURIDAO","ARANHA","MUMIA","MALDICAO",
  "ESPIRITO","FEITICO","MORTE","SANGUE","VELA",
  "COBERTAO","LENDA","MONSTRO","URUCUBACA","ABISMO"
];

let grid = [];
let tamanho = 8;
let palavrasSelecionadas = [];
let posicoesPalavras = [];
let qtdPalavras = 5;

let nivelAtual = "facil"; 
let rodadaNivel = 0;       
let totalRodadasPorNivel = 3;
let direcoes = [
  [0,1],   // horizontal
  [1,0],   // vertical
  [1,1],   // diagonal descendente
  [-1,1]   // diagonal ascendente
];
let direcoesNome = [
  "horizontal",
  "vertical",
  "diagonalDesc",
  "diagonalAsc"
];

function começarJogo(){
  document.getElementById("menu").style.display="none";
  document.getElementById("btnVerificar").style.display="inline-block";
  document.getElementById("btnProximaRodada").style.display="none";
  document.getElementById("btnReplay").style.display="none";
  rodadaNivel = 0;
  nivelAtual = "facil";
  iniciarRodada();
}

function iniciarRodada(){
  rodadaNivel++;
  if(nivelAtual==="facil"){tamanho=8;qtdPalavras=5;}
  else if(nivelAtual==="medio"){tamanho=12;qtdPalavras=8;}
  else if(nivelAtual==="dificil"){tamanho=15;qtdPalavras=10;}

  grid = Array.from({length:tamanho},()=>Array(tamanho).fill(""));
  palavrasSelecionadas=[];
  posicoesPalavras=[];

  // Selecionar ao menos uma palavra para cada direção, se possível
  let palavrasParaUsar = [...palavrasHalloween].sort(()=>0.5-Math.random());
  let palavrasPorDirecao = [];
  for (let i = 0; i < direcoes.length; i++) {
    if (palavrasParaUsar.length > 0) {
      palavrasPorDirecao.push(palavrasParaUsar.pop());
    }
  }
  let restantes = palavrasParaUsar.slice(0, qtdPalavras - palavrasPorDirecao.length);
  let sorteadas = palavrasPorDirecao.concat(restantes);

  // Embaralhar as palavras finais
  sorteadas = sorteadas.sort(()=>0.5-Math.random());

  // Inserir cada palavra, garantindo pelo menos uma por direção diferente
  let direcoesUsadas = [];
  for (let i = 0; i < sorteadas.length; i++) {
    let palavra = sorteadas[i];
    let direcao;
    if (i < direcoes.length) {
      direcao = direcoes[i];
      direcoesUsadas.push(i);
    } else {
      // Escolher direção aleatória
      direcao = direcoes[Math.floor(Math.random()*direcoes.length)];
    }
    inserirPalavra(palavra, direcao);
  }

  preencherLetrasAleatorias();
  renderizarGrade();

  document.getElementById("palavrasRestantes").innerText=`Palavras: ${sorteadas.join(", ")}`;
  document.getElementById("resultado").innerText="";
  document.getElementById("statusNivel").innerText = `Nível: ${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)}`;
  document.getElementById("statusRodada").innerText = `Rodada: ${rodadaNivel} / ${totalRodadasPorNivel}`;
  document.getElementById("btnProximaRodada").style.display = "none";
  document.getElementById("btnReplay").style.display = "none";
  document.getElementById("btnVerificar").style.display = "inline-block";
}

// Insere palavra no grid, se possível na direção desejada
function inserirPalavra(palavra, direcaoPreferida=null){
  let direcoesParaTentar = direcaoPreferida ? [direcaoPreferida].concat(direcoes.filter(d=>d!==direcaoPreferida)) : [...direcoes];
  let colocado = false;
  while(!colocado){
    for(let d=0; d<direcoesParaTentar.length; d++){
      const dir = direcoesParaTentar[d];
      const linha = Math.floor(Math.random()*tamanho);
      const col = Math.floor(Math.random()*tamanho);
      let coords=[];
      let cabe=true;

      for(let i=0;i<palavra.length;i++){
        const r=linha+i*dir[0];
        const c=col+i*dir[1];
        if(r<0||r>=tamanho||c<0||c>=tamanho){cabe=false;break;}
        if(grid[r][c]!=""&&grid[r][c]!==palavra[i]){cabe=false;break;}
        coords.push([r,c]);
      }

      if(cabe){
        coords.forEach((pos,i)=>grid[pos[0]][pos[1]]=palavra[i]);
        posicoesPalavras.push({palavra,posicoes:coords});
        palavrasSelecionadas.push(palavra);
        colocado=true;
        break;
      }
    }
  }
}

function preencherLetrasAleatorias(){
  const letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for(let r=0;r<tamanho;r++){
    for(let c=0;c<tamanho;c++){
      if(grid[r][c]=="") grid[r][c]=letras[Math.floor(Math.random()*letras.length)];
    }
  }
}

function renderizarGrade(){
  const container=document.getElementById("grid");
  container.innerHTML="";
  container.style.gridTemplateColumns=`repeat(${tamanho},40px)`;
  for(let r=0;r<tamanho;r++){
    for(let c=0;c<tamanho;c++){
      const cell=document.createElement("div");
      cell.className="cell";
      cell.innerText=grid[r][c];
      cell.dataset.row=r;
      cell.dataset.col=c;
      cell.onclick=()=>cell.classList.toggle("selected");
      container.appendChild(cell);
    }
  }
}

function verificarRespostas(){
  const btn = document.getElementById("btnVerificar");
  btn.disabled = true;

  const selecionadas = Array.from(
    document.querySelectorAll(".cell.selected")
  ).map(cell=>[parseInt(cell.dataset.row),parseInt(cell.dataset.col)]);

  let acertos=0;

  posicoesPalavras.forEach(p=>{
    const todasMarcadas=p.posicoes.every(coord=>
      selecionadas.some(sel=>sel[0]===coord[0] && sel[1]===coord[1])
    );
    if(todasMarcadas) acertos++;
  });

  const resultadoEl = document.getElementById("resultado");
  resultadoEl.innerText=`Você acertou ${acertos} de ${palavrasSelecionadas.length} palavras!`;

  if(acertos===palavrasSelecionadas.length){
    // Acertou todas → exibe botão Próxima Rodada ou Replay
    if(nivelAtual==="fim" || (nivelAtual==="dificil" && rodadaNivel===totalRodadasPorNivel)){
      resultadoEl.innerText+="\nParabéns! Você terminou todos os níveis!";
      btn.style.display="none";
      document.getElementById("btnReplay").style.display="inline-block";
      document.getElementById("btnProximaRodada").style.display="none";
    } else {
      resultadoEl.innerText+=`\nParabéns! Clique em "Próxima Rodada" para continuar!`;
      btn.style.display="none";
      document.getElementById("btnProximaRodada").style.display="inline-block";
    }
  } else {
    // Errou → não trava, apenas mostra a mensagem
    resultadoEl.innerText+="\nVocê precisa acertar todas as palavras para avançar!";
    document.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
    btn.disabled = false; // libera botão para tentar novamente
  }
}

function proximaRodada(){
  // Avança rodada ou nível
  if(rodadaNivel<totalRodadasPorNivel){
    iniciarRodada();
  } else {
    if(nivelAtual==="facil") nivelAtual="medio";
    else if(nivelAtual==="medio") nivelAtual="dificil";
    else nivelAtual="fim";
    rodadaNivel=0;
    if(nivelAtual==="fim"){
      document.getElementById("resultado").innerText = "Parabéns! Você terminou todos os níveis!";
      document.getElementById("btnProximaRodada").style.display="none";
      document.getElementById("btnReplay").style.display="inline-block";
    } else {
      iniciarRodada();
    }
  }
}

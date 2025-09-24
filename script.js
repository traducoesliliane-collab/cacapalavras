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

// Começar o jogo
function começarJogo(){
  document.getElementById("menu").style.display="none";
  document.getElementById("btnVerificar").style.display="inline-block";
  iniciarRodada();
}

// Inicia uma rodada no nível atual
function iniciarRodada(){
  rodadaNivel++;
  if(nivelAtual==="facil"){tamanho=8;qtdPalavras=5;}
  else if(nivelAtual==="medio"){tamanho=12;qtdPalavras=8;}
  else if(nivelAtual==="dificil"){tamanho=15;qtdPalavras=10;}

  grid = Array.from({length:tamanho},()=>Array(tamanho).fill(""));
  palavrasSelecionadas=[];
  posicoesPalavras=[];

  const sorteadas = [...palavrasHalloween].sort(()=>0.5-Math.random()).slice(0,qtdPalavras);
  sorteadas.forEach(p=>inserirPalavra(p));
  preencherLetrasAleatorias();
  renderizarGrade();

  document.getElementById("palavrasRestantes").innerText=`Palavras: ${sorteadas.join(", ")}`;
  document.getElementById("resultado").innerText="";
  document.getElementById("statusNivel").innerText = `Nível: ${nivelAtual.charAt(0).toUpperCase() + nivelAtual.slice(1)}`;
  document.getElementById("statusRodada").innerText = `Rodada: ${rodadaNivel} / ${totalRodadasPorNivel}`;
}

// Insere palavra no grid com mix de direções
function inserirPalavra(palavra){
  const direcoes=[[0,1],[1,0],[1,1],[-1,1]]; // horizontal, vertical, diagonal desc, diagonal asc
  let colocado=false;

  // Embaralha direções para cada palavra
  const direcoesEmbaralhadas = direcoes.sort(()=>0.5-Math.random());

  while(!colocado){
    for(let d=0; d<direcoesEmbaralhadas.length; d++){
      const dir = direcoesEmbaralhadas[d];
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

// Verifica respostas e atualiza mensagem na tela
function verificarRespostas(){
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
    // Acertou todas → próxima rodada ou nível
    if(rodadaNivel<totalRodadasPorNivel){
      resultadoEl.innerText+=`\nParabéns! Próximo caça-palavras do nível ${nivelAtual}`;
      iniciarRodada();
    } else {
      // Avança nível
      if(nivelAtual==="facil") nivelAtual="medio";
      else if(nivelAtual==="medio") nivelAtual="dificil";
      else nivelAtual="fim";

      rodadaNivel=0;

      if(nivelAtual==="fim"){
        resultadoEl.innerText+="\nParabéns! Você terminou todos os níveis!";
        document.getElementById("btnVerificar").style.display="none";
        document.getElementById("btnReplay").style.display="inline-block";
      } else {
        resultadoEl.innerText+=`\nParabéns! Agora você passa para o nível ${nivelAtual}`;
        iniciarRodada();
      }
    }
  } else {
    // Errou → não trava, apenas mostra a mensagem
    resultadoEl.innerText+="\nVocê precisa acertar todas as palavras para avançar!";
    // Remove seleção para o jogador tentar novamente
    document.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
  }
}

/* ============ PODACI: ČETIRI SUSTAVA (e4, d4, c4, S) ============ */
const SYSTEMS = [
  {
    key:'e4',
    label:'1.e4',
    tree:
      { move:'e4', name:'Kraljev pješak', desc:'Najpopularniji prvi potez — bijeli odmah osvaja centar i otvara dijagonale lovcu i dami.', children:[
        { move:'e5', name:'Otvorene igre', desc:'Klasičan simetričan odgovor — vodi u Ruy Lopez, Talijansku igru, Škotsku.', children:[
          { move:'Sf3', name:null, desc:null, children:[
            { move:'Sc6', name:null, desc:null, children:[
              { move:'Lb5', name:'Ruy Lopez (Španjolska igra)', desc:'Jedno od najstarijih i najviše proučavanih otvaranja — bijeli gradi dugoročan pritisak preko lovca usmjerenog prema skakaču c6.', children:[
                { move:'a6', name:'Morphyjeva obrana', desc:'Najčešći odgovor crnog — odmah pita lovca za namjeru prije daljnjeg razvoja.', children:[
                  { move:'La4', name:'Zatvorena Španjolska', desc:'Bijeli zadržava lovca na dijagonali a4–e8, glavna linija cijelog otvaranja.', children:[] }
                ]},
                { move:'Sf6', name:'Berlinska obrana', desc:'Crni odmah protunapada e4 umjesto da pita lovca — vodi u vrlo solidne, teško dobitne pozicije za bijelog ("Berlinski zid").', children:[] }
              ]}
            ]}
          ]}
        ]},
        { move:'c5', name:'Sicilijanska odbrana', desc:'Najpopularniji odgovor na vrhunskom nivou — crni odmah bori za d4 s krila.', children:[] },
        { move:'e6', name:'Francuska odbrana', desc:'Solidna, ali lovac c8 ostaje zarobljen dok se struktura ne otvori.', children:[] },
        { move:'c6', name:'Karo-Kan odbrana', desc:'Slično Francuskoj, ali lovac c8 ostaje slobodan — crni sprema ...d5 bez zatvaranja svog lovca.', children:[
          { move:'d4', name:null, desc:null, children:[
            { move:'d5', name:null, desc:'Crni odmah izaziva bijeli centar.', children:[
              { move:'Sc3', name:'Klasična varijanta', desc:'Crni obično igra ...dxe4 i razvija lovca na f5 ili g4 prije ...e6.', children:[
                { move:'dxe4', name:null, desc:null, children:[
                  { move:'Sxe4', name:'Klasična varijanta — glavna linija', desc:'Crni razvija lovca prije ...e6, izbjegavajući "lošeg lovca" tipičnog za Francusku odbranu.', children:[] }
                ]}
              ]},
              { move:'exd5', name:'Razmjenska varijanta', desc:'Simetrična, mirna struktura.', children:[
                { move:'cxd5', name:null, desc:null, children:[
                  { move:'c4', name:'Panov-Botvinik napad', desc:'Bijeli žrtvuje pješačku strukturu za brz razvoj i prostor, slično Daminom gambitu.', children:[] }
                ]}
              ]},
              { move:'e5', name:'Napredna varijanta', desc:'Bijeli zauzima prostor; crni igra ...Lf5 i kasnije udara centar sa ...c5.', children:[] }
            ]}
          ]}
        ]},
        { move:'d5', name:'Skandinavska odbrana', desc:'Crni odmah izaziva centar, dama se vraća na d6 ili d8 nakon uzimanja.', children:[] },
        { move:'Sf6', name:'Aljehinova odbrana', desc:'Crni namamljuje bijele pješake naprijed da ih kasnije napadne.', children:[
          { move:'e5', name:null, desc:null, children:[
            { move:'Sd5', name:null, desc:null, children:[
              { move:'d4', name:null, desc:null, children:[
                { move:'d6', name:null, desc:'Crni odmah napada napredni pješački lanac s krila.', children:[
                  { move:'Sf3', name:'Aljehinova odbrana — glavna linija', desc:'Bijeli gradi veliki pješački centar, a crni ga cijelo vrijeme napada s krila i iz pozadine.', children:[] }
                ]}
              ]}
            ]}
          ]}
        ]}
      ]}
  },
  {
    key:'d4',
    label:'1.d4',
    tree:
      { move:'d4', name:'Zatvorena otvaranja', desc:'Bijeli gradi centar mirnije, često uz kasniji c4.', children:[
        { move:'d5', name:'Uvod u Damin gambit', desc:'Simetričan odgovor u centru.', children:[
          { move:'c4', name:'Damin gambit', desc:'Bijeli nudi pješaka c4 da otvori linije za brz razvoj.', children:[] },
          { move:'Sf3', name:null, desc:null, children:[
            { move:'Sf6', name:null, desc:null, children:[
              { move:'Lf4', name:'Londonski sistem', desc:'Popularan sustavski pristup — bijeli razvija lovca na f4 prije e3, gradeći gotovo identičnu postavu bez obzira na to što crni igra.', children:[
                { move:'e6', name:'Londonski sistem — glavna postava', desc:'Bijeli nastavlja s e3, Ld3 i c3, gradeći čvrst i lako pamtljiv raspored figura.', children:[
                  { move:'e3', name:null, desc:null, children:[
                    { move:'Ld6', name:null, desc:'Crni izaziva bijelog lovca prije nego što se on skloni s aktivne dijagonale.', children:[
                      { move:'Lg3', name:null, desc:null, children:[
                        { move:'O-O', name:null, desc:null, children:[
                          { move:'Ld3', name:'Londonski sistem — glavna linija', desc:'Bijeli dovršava klasičnu postavu i priprema c3 te kratku rokadu, spreman za srednju igru.', children:[] }
                        ]}
                      ]}
                    ]}
                  ]}
                ]}
              ]}
            ]}
          ]}
        ]},
        { move:'Sf6', name:'Uvod u indijske odbrane', desc:'Crni ne igra odmah ...d5, već razvija skakača i gradi pritisak na centar figurama.', children:[
          { move:'c4', name:null, desc:null, children:[
            { move:'g6', name:null, desc:'Crni sprema fijanketo lovca prema g7.', children:[
              { move:'Sc3', name:null, desc:null, children:[
                { move:'Lg7', name:'Kraljev-indijska odbrana', desc:'Crni pušta bijelog da zauzme centar, pa ga napada sa ...e5 ili ...c5. Oštra, strateški bogata igra.', children:[] },
                { move:'d5', name:'Grünfeld odbrana', desc:'Hibrid — crni pušta veliki centar, pa ga odmah napada. Dinamična i teorijski zahtjevna.', children:[] }
              ]}
            ]},
            { move:'e6', name:null, desc:'Crni zadržava fleksibilnost prije nego otkrije plan.', children:[
              { move:'Sc3', name:null, desc:null, children:[
                { move:'Lb4', name:'Nimcovičeva odbrana', desc:'Lovac vezuje skakača na c3, prijeteći udvostručenjem bijelih pješaka. Jedna od teorijski najsolidnijih odbrana.', children:[
                  { move:'e3', name:'Glavna, mirna linija', desc:'Bijeli sprema Ld3, Sf3 i brz razvoj bez ranih komplikacija.', children:[] },
                  { move:'Db3', name:'Linija sa Db3', desc:'Dama brani skakača umjesto pješaka, izbjegava udvostručenje.', children:[] },
                  { move:'Dc2', name:'Moderna linija', desc:'Bijeli štiti skakača damom i sprema e4 kasnije — igrali Kramnik, Karjakin.', children:[] },
                  { move:'a3', name:'Zemiš varijanta', desc:'Bijeli odmah tjera lovca umjesto da ga trpi na b4.', children:[
                    { move:'Lxc3', name:null, desc:null, children:[
                      { move:'bxc3', name:'Zemiš varijanta — glavna linija', desc:'Bijeli dobija par lovaca i jak centar, ali udvostručene pješake — oštra, neuravnotežena igra.', children:[] }
                    ]}
                  ]}
                ]}
              ]},
              { move:'Sf3', name:null, desc:null, children:[
                { move:'b6', name:'Damin-indijska odbrana', desc:'Fijanketo lovca na b7, pritisak na dijagonalu a8–h1. Mirnija, pozicijska igra.', children:[] }
              ]}
            ]},
            { move:'c5', name:'Benoni odbrana', desc:'Neuravnotežena, borbena struktura sa asimetričnim pješačkim lancima.', children:[] }
          ]},
          { move:'Sf3', name:null, desc:null, children:[
            { move:'e6', name:null, desc:null, children:[
              { move:'Lg5', name:'Torre napad', desc:'Sustavno otvaranje po Carlosu Torreu — lovac vezuje skakača f6, bijeli igra gotovo istu postavu bez obzira na odgovor crnog.', children:[] }
            ]},
            { move:'d5', name:null, desc:null, children:[
              { move:'Lg5', name:'Torre napad protiv d5', desc:'Ista ideja u strukturi sličnoj Daminom gambitu.', children:[] }
            ]},
            { move:'g6', name:null, desc:null, children:[
              { move:'Lg5', name:'Torre napad protiv fijanketa', desc:'Rjeđe igrano — lovac nema jasnu metu protiv crnog fijanketa.', children:[] }
            ]}
          ]}
        ]},
        { move:'f5', name:'Holandska odbrana', desc:'Crni odmah bori za polje e4 s krila — oštra, rijetko viđena struktura.', children:[] },
        { move:'e6', name:'Fleksibilan odgovor', desc:'Može voditi u Francusku strukturu ili u Damin-indijsku, ovisno o nastavku.', children:[] }
      ]}
  },
  {
    key:'c4',
    label:'1.c4',
    tree:
      { move:'c4', name:'Englesko otvaranje', desc:'Bijeli počinje s krila, često transponirajući u pozicije Daminog gambita ili indijskih sustava.', children:[
        { move:'c5', name:'Simetrična varijanta', desc:'Crni odgovara istim potezom — uravnotežena borba za centar.', children:[] },
        { move:'e5', name:'Obrnuta Sicilijanska', desc:'Crni preuzima ulogu bijelog iz Sicilijanske odbrane.', children:[] },
        { move:'Sf6', name:'Prelaz u indijske sustave', desc:'Otvara put prema strukturama sličnim indijskim odbranama.', children:[] }
      ]}
  },
  {
    key:'sf3',
    label:'1.Sf3 (S)',
    tree:
      { move:'Sf3', name:'Reti otvaranje', desc:'Fleksibilan potez kojim bijeli odgađa odluku o centru — često transponira u Englesko otvaranje ili Kraljevsko-indijski napad.', children:[
        { move:'d5', name:null, desc:'Crni odmah zauzima centar dok bijeli još nije obavezan.', children:[
          { move:'c4', name:'Reti otvaranje — napad na d5', desc:'Bijeli napada pješaka d5 s krila umjesto direktno u centru.', children:[] },
          { move:'g3', name:'Kraljevsko-indijski napad', desc:'Bijeli fijanketira lovca na g2 i gradi postavu neovisno o crnovom rasporedu.', children:[] }
        ]},
        { move:'Sf6', name:'Simetrični Réti', desc:'Obje strane odgađaju odluku o centru, često vodi u englesko-indijske strukture obrnutih boja.', children:[] },
        { move:'c5', name:null, desc:'Crni odmah traži englesku strukturu obrnutih boja.', children:[] }
      ]}
  }
];

/* ============ ŠAHOVSKI POKRETAČ ============ */
const START_BOARD = {
  a8:'bT',b8:'bS',c8:'bL',d8:'bD',e8:'bK',f8:'bL',g8:'bS',h8:'bT',
  a7:'bP',b7:'bP',c7:'bP',d7:'bP',e7:'bP',f7:'bP',g7:'bP',h7:'bP',
  a2:'wP',b2:'wP',c2:'wP',d2:'wP',e2:'wP',f2:'wP',g2:'wP',h2:'wP',
  a1:'wT',b1:'wS',c1:'wL',d1:'wD',e1:'wK',f1:'wL',g1:'wS',h1:'wT'
};
function fileIdx(c){ return c.charCodeAt(0)-97; }
function rankIdx(c){ return parseInt(c,10)-1; }
function sqCoord(sq){ return [fileIdx(sq[0]), rankIdx(sq[1])]; }
function pathClear(board, f1,r1,f2,r2){
  const df = Math.sign(f2-f1), dr = Math.sign(r2-r1);
  let f=f1+df, r=r1+dr;
  while(f!==f2 || r!==r2){
    const sq = String.fromCharCode(97+f)+(r+1);
    if(board[sq]) return false;
    f+=df; r+=dr;
  }
  return true;
}
function canReach(pieceType, from, to, board){
  const [f1,r1] = sqCoord(from), [f2,r2] = sqCoord(to);
  const df = Math.abs(f2-f1), dr = Math.abs(r2-r1);
  switch(pieceType){
    case 'S': return (df===1&&dr===2)||(df===2&&dr===1);
    case 'L': return df===dr && df>0 && pathClear(board,f1,r1,f2,r2);
    case 'T': return (df===0||dr===0) && (df+dr>0) && pathClear(board,f1,r1,f2,r2);
    case 'D': return (df===dr || df===0 || dr===0) && (df+dr>0) && pathClear(board,f1,r1,f2,r2);
    case 'K': return df<=1 && dr<=1 && (df+dr>0);
    default: return false;
  }
}
function applyMove(board, san, color){
  const nb = Object.assign({}, board);
  let clean = san.replace(/[+#!?]/g,'');
  if(clean==='O-O'){
    if(color==='w'){ nb['g1']='wK'; delete nb['e1']; nb['f1']='wT'; delete nb['h1']; }
    else { nb['g8']='bK'; delete nb['e8']; nb['f8']='bT'; delete nb['h8']; }
    return nb;
  }
  if(clean==='O-O-O'){
    if(color==='w'){ nb['c1']='wK'; delete nb['e1']; nb['d1']='wT'; delete nb['a1']; }
    else { nb['c8']='bK'; delete nb['e8']; nb['d8']='bT'; delete nb['a8']; }
    return nb;
  }
  let pieceType='P', rest=clean;
  if('SLTDK'.includes(clean[0])){ pieceType = clean[0]; rest = clean.slice(1); }
  const capture = rest.includes('x');
  const restNoX = rest.replace('x','');
  const dest = restNoX.slice(-2);
  const disambig = restNoX.slice(0, restNoX.length-2);
  const [df,dr] = sqCoord(dest);

  if(pieceType==='P'){
    if(capture){
      const srcFile = disambig;
      const srcRank = color==='w' ? dr-1 : dr+1;
      const srcSq = srcFile + (srcRank+1);
      delete nb[srcSq];
      nb[dest] = color+'P';
    } else {
      const destFile = dest[0];
      let chosen=null;
      for(const sq in board){
        if(board[sq]===color+'P' && sq[0]===destFile){
          const [sf,sr] = sqCoord(sq);
          const stepDir = color==='w' ? 1 : -1;
          const distance = (dr - sr) * stepDir;
          if(distance===1){ chosen=sq; break; }
          if(distance===2 && ((color==='w'&&sr===1)||(color==='b'&&sr===6))){
            const midSq = destFile + (sr+stepDir+1);
            if(!board[midSq]){ chosen=sq; break; }
          }
        }
      }
      if(chosen){ delete nb[chosen]; nb[dest] = color+'P'; }
    }
    return nb;
  } else {
    const candidates = [];
    for(const sq in board){
      if(board[sq]===color+pieceType && canReach(pieceType, sq, dest, board)){
        candidates.push(sq);
      }
    }
    let chosen = candidates[0];
    if(candidates.length>1 && disambig){
      const filtered = candidates.filter(sq => sq.includes(disambig));
      if(filtered.length) chosen = filtered[0];
    }
    if(chosen){ delete nb[chosen]; nb[dest] = color+pieceType; }
    return nb;
  }
}

/* ============ IKONE FIGURA ============ */
const PIECE_ICON = {
  wP:'♙', wS:'♘', wL:'♗', wT:'♖', wD:'♕', wK:'♔',
  bP:'♟', bS:'♞', bL:'♝', bT:'♜', bD:'♛', bK:'♚'
};
function moveIcon(san, color){
  let type='P';
  if('SLTDK'.includes(san[0])) type = san[0];
  return PIECE_ICON[color+type];
}
function formatSAN(san){
  if('SLTDK'.includes(san[0])) return san.slice(1);
  return san;
}

/* ============ STANJE APLIKACIJE ============ */
let activeSystem = null;
let path = [];

function rootNode(){ return activeSystem===null ? null : SYSTEMS[activeSystem].tree; }
function currentNode(){
  if(activeSystem===null) return null;
  return path.length ? path[path.length-1] : rootNode();
}
function boardAtPath(){
  let board = Object.assign({}, START_BOARD);
  let color = 'w';
  for(const node of path){
    board = applyMove(board, node.move, color);
    color = color==='w' ? 'b' : 'w';
  }
  return board;
}
function colorToMoveAtDepth(depth){ return depth % 2 === 0 ? 'w' : 'b'; }

/* ============ RENDER: SYSTEM PICKER ============ */
const pickerEl = document.getElementById('systemPicker');
function renderPicker(){
  pickerEl.innerHTML='';
  SYSTEMS.forEach((sys, idx)=>{
    const btn=document.createElement('button');
    btn.className='sys-btn' + (activeSystem===idx?' active':'');
    btn.textContent = sys.label;
    btn.addEventListener('click', ()=>{
      activeSystem = idx;
      path = [ sys.tree ];
      renderAll();
    });
    pickerEl.appendChild(btn);
  });
}

/* ============ RENDER: PLOČA ============ */
const boardEl = document.getElementById('board');
const filesEl = document.getElementById('files');
const ranksEl = document.getElementById('ranks');
const FILES = ['a','b','c','d','e','f','g','h'];
FILES.forEach(f=>{ const s=document.createElement('span'); s.textContent=f; filesEl.appendChild(s); });
for(let r=8;r>=1;r--){ const s=document.createElement('span'); s.textContent=r; ranksEl.appendChild(s); }

function renderBoard(){
  const board = boardAtPath();
  boardEl.innerHTML='';
  for(let r=8;r>=1;r--){
    for(let f=0;f<8;f++){
      const file = FILES[f];
      const sq = file+r;
      const div = document.createElement('div');
      const isLight = (f+r)%2===1;
      div.className = 'sq ' + (isLight?'light':'dark');
      const piece = board[sq];
      if(piece){
        const span = document.createElement('span');
        span.textContent = PIECE_ICON[piece];
        span.className = piece[0]==='w' ? 'piece-w' : 'piece-b';
        div.appendChild(span);
      }
      boardEl.appendChild(div);
    }
  }
}

/* ============ RENDER: LEDGER ============ */
function renderLedger(){
  const el = document.getElementById('ledgerMoves');
  if(path.length===0){
    el.innerHTML = '<span class="ledger-empty">Odaberi otvaranje iznad da započneš.</span>';
    return;
  }
  let html='';
  for(let i=0;i<path.length;i++){
    const color = colorToMoveAtDepth(i);
    if(color==='w'){
      const moveNum = Math.floor(i/2)+1;
      html += '<span class="movenum">'+moveNum+'.</span> ';
    }
    html += formatSAN(path[i].move) + ' ';
  }
  el.innerHTML = html;
}

/* ============ RENDER: TURN INDICATOR ============ */
function renderTurn(){
  const depth = path.length;
  const color = colorToMoveAtDepth(depth);
  document.getElementById('turnText').textContent = color==='w' ? 'Bijeli na potezu' : 'Crni na potezu';
  document.getElementById('turnDot').className = 'turn-dot' + (color==='b' ? ' black' : '');
  const moveNum = Math.floor(depth/2)+1;
  document.getElementById('plyText').textContent = depth===0 ? 'Početni položaj' : ('Potez ' + moveNum);
}

/* ============ RENDER: DESNI PANEL ============ */
function collectNamedTrail(){
  return path.filter(n=>n.name).map(n=>n.name);
}

function renderSide(){
  const side = document.getElementById('side');
  side.innerHTML='';

  if(activeSystem===null){
    const intro=document.createElement('div');
    intro.className='intro-card';
    intro.innerHTML = '<h2>Odaberi otvaranje</h2><p>Klikni jedan od četiri sustava iznad ploče — 1.e4, 1.d4, 1.c4 ili 1.Sf3 — da vidiš njegov razvoj potez po potez, s objašnjenjima uz svaku granu.</p>';
    side.appendChild(intro);
    return;
  }

  const node = currentNode();
  const depth = path.length;
  const colorToMove = colorToMoveAtDepth(depth);

  const trail = collectNamedTrail();
  if(trail.length){
    const trailWrap = document.createElement('div');
    trailWrap.className='name-trail';
    trail.forEach((n,i)=>{
      const chip=document.createElement('span');
      chip.className='name-chip' + (i===trail.length-1?' current':'');
      chip.textContent = n;
      trailWrap.appendChild(chip);
    });
    side.appendChild(trailWrap);
  }

  if(node.name){
    const card=document.createElement('div');
    card.className='named-card';
    card.innerHTML = '<div class="kicker">Prepoznato otvaranje</div><h3>'+node.name+'</h3>' + (node.desc?('<p>'+node.desc+'</p>'):'');
    side.appendChild(card);
  }

  const children = node.children || [];
  if(children.length){
    const label=document.createElement('div');
    label.className='section-label';
    label.style.margin = '6px 0 2px';
    label.textContent = 'Moguć nastavak';
    side.appendChild(label);

    const grid=document.createElement('div');
    grid.className='choices';
    children.forEach(child=>{
      const btn=document.createElement('button');
      btn.className='choice-btn';
      const icon = moveIcon(child.move, colorToMove);
      const moveNum = Math.floor(depth/2)+1;
      const prefix = colorToMove==='w' ? (moveNum+'.') : (moveNum+'...');
      let inner = '<div class="choice-top"><span class="choice-icon '+(colorToMove==='w'?'pw':'pb')+'">'+icon+'</span>' +
                  '<span class="choice-san">'+prefix+' '+formatSAN(child.move)+'</span></div>';
      if(child.name){ inner += '<span class="choice-name">'+child.name+'</span>'; }
      if(child.desc){ inner += '<span class="choice-desc">'+child.desc+'</span>'; }
      btn.innerHTML = inner;
      btn.addEventListener('click', ()=>{
        path.push(child);
        renderAll();
      });
      grid.appendChild(btn);
    });
    side.appendChild(grid);
  } else {
    const note=document.createElement('div');
    note.className='end-note';
    note.textContent = 'Došao/la si do kraja ove linije. Klikni „Natrag” da isprobaš drugu granu, ili odaberi drugo otvaranje iznad ploče.';
    side.appendChild(note);
  }
}

/* ============ GLAVNI RENDER + KONTROLE ============ */
function renderAll(){
  renderPicker();
  renderBoard();
  renderLedger();
  renderTurn();
  renderSide();
  document.getElementById('backBtn').disabled = path.length<=1;
}
document.getElementById('backBtn').addEventListener('click', ()=>{
  if(path.length>1){ path.pop(); renderAll(); }
});
document.getElementById('resetBtn').addEventListener('click', ()=>{
  activeSystem = null; path = []; renderAll();
});

renderAll();
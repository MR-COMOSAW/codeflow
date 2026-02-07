const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "01<>/{}[]functionconstletvar".split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = [];

for(let x=0;x<columns;x++) drops[x]=Math.random()*canvas.height;

function draw(){
  ctx.fillStyle="rgba(0,0,0,0.1)";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  ctx.fillStyle="#00ffcc";
  ctx.font=fontSize+"px monospace";

  for(let i=0;i<drops.length;i++){
    const text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);

    if(drops[i]*fontSize>canvas.height && Math.random()>0.975){
      drops[i]=0;
    }
    drops[i]++;
  }
}

setInterval(draw,33);

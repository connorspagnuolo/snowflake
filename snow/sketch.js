let symmetry = 6
let angle = 360/symmetry;

function setup() {
  createCanvas(800, 600);
   background(0);
  angleMode(DEGREES);
  translate(width/2,height/2);
  stroke(255,0,0);
   
  for (let i = 0; i<symmetry;i++)  {
    rotate(angle);
    line(0,0,width,0);
  }
}

  
  
 
  



 

function draw() {
  
  translate(width/2,height/2);
  
  let mx = mouseX - width/2;
   let my = mouseY -height/2;
  let pmx = mouseX - width/2;
   let pmy = mouseY -height/2;
  
  
  
  if (mouseIsPressed) {
    stroke(255,100);
    let angle = 360/12;
    
  for (let i = 0; i<12;i++)  {
    push();
    rotate(i*angle);
    if (i % 2 == 1){
     scale(-1,1) ;
      
      
      
    }
    let d = dist(mx,my,pmx,pmy);
  
    let sw = map(d,0,20,20,1);
   
    strokeWeight(sw);
   push();
    line(mx,my,pmx,pmy);
    pop();
     push();
    scale(1,-1);
    line(mx,my,pmx,pmy);
    pop();
    
   }
    pop();
  }
  
}
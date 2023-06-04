function setup() {
    // crear el lienzo
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
  
    push(); //serie uno (rosa)
  
    fill(230, 200, 240);
    ellipse(120, 120, 120, 120);
  
    fill(200, 120, 200);
    ellipse(120, 120, 90, 90);
  
    fill(60, 50, 80);
    ellipse(120, 120, 50, 50);
  
  
  
    pop();
  
    push(); //serie dos (violeta)
  
    fill(60, 50, 80);
    ellipse(280, 120, 120, 120);
  
    fill(200, 120, 200);
    ellipse(280, 120, 90, 90);
  
    fill(230, 200, 240);
    ellipse(280, 120, 50, 50);
  
  
    pop();
  
    push(); //serie tres (azul)
  
    fill(30, 60, 90);
    ellipse(120, 280, 120, 120);
  
    fill(50, 80, 200);
    ellipse(120, 280, 90, 90);
  
    fill(160, 200, 200);
    ellipse(120, 280, 50, 50);
  
  
  
    pop();
  
    push(); //serie cuatro (celeste)
  
    fill(160, 200, 200);
    ellipse(280, 280, 120, 120);
  
    fill(50, 80, 200);
    ellipse(280, 280, 90, 90);
  
    fill(30, 60, 90);
    ellipse(280, 280, 50, 50);
  
  
    pop();
  
    push();
  
    //bordes
    fill(160, 200, 200);
    rect(1, 20, 40, 400);
  
    fill(230, 200, 240);
    rect(1, 1, 400, 20);
  
    fill(60, 50, 80);
    rect(360, 1, 40, 400);
  
    fill(30, 60, 90);
    rect(42, 380, 400, 300);
  
    pop();
  }
  
var scene = 0;

var earth_move_down;
var count_down;
var rocket_take_off;
var alert;
var asteroid_hit_earth;
function preload() {
  earth_move_down = loadSound("assets/169867__halgrimm__swoosh.wav");
  count_down = loadSound("assets/216383__rsilveira-88__count-down-clock.wav");
  rocket_take_off = loadSound("assets/126507__cydon__rocket-shoot-002.wav");
  alert = loadSound("assets/270643__hoerspielwerkstatt-hef__alarm5.wav");
  asteroid_hit_earth = loadSound("assets/329029__humanoide7000__meteor-flyby.wav");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
}

function draw() {
    // your "draw loop" code goes here
    if (scene == 0) {
      draw_scene0();
    } else if (scene == 0.5) {
      animation_scene01();
    } else if (scene == 1) {
      draw_scene1();
    } else if (scene == 2) {
      draw_scene2();
    } else if (scene == 3) {
      draw_scene3();
    } else if (scene == 4) {
      draw_scene4();
    } else if (scene == 4.5) {
      draw_scene45();
    } else if (scene == 5) {
      draw_scene5();
    } else if (scene == 5.5) {
      draw_scene56();
    } else if (scene == 6) {
      draw_scene6();
    } else if (scene == 6.5) {
      draw_scene67();
    } else {
      draw_scene_end();
    }
}

function draw_scene0() {
  draw_space();
  draw_earth(width/2, height/2);
  push();
  fill(255);
  stroke(255)
  strokeWeight(abs(sin(frameCount/20))*5);
  textSize(width/20);
  textAlign(CENTER, CENTER);
  text("Click to Start", width/2, height/2);
  pop();
}

var frame_scene1 = 0.01;
function draw_scene1() {
  draw_space();
  draw_earth(width/2, height-height/4);
  draw_bar();
  push();
  fill(241, 247, 244);
  textAlign(CENTER, CENTER);
  textSize(width/50);
  if (frame_scene1 >= 0) {
    text("We're going to run out of resources in 60 years!!!", width/2, height*3/20);
  }
  if (frame_scene1 >= 180) {
    text("What should we do?", width/2, height*4/20);
  }
  if (frame_scene1 >= 360) {
    text("What about asteroid mining?", width/2, height*5/20);
  }
  if (frame_scene1 >= 540) {
    text("Click on the earth to send a rocket.", width/2, height*6/20);
  }
  pop();
  frame_scene1++;
}

function draw_scene2() {
  draw_space();
  if (frame_send_rocket < 180) {
    animation_send_rocket(width/2, height-height/4);
  } else if (frame_send_rocket >= 180 && frame_send_rocket < 360) {
    var move = map(frame_send_rocket, 180, 360, 0, 3*width/20);
    push();
    translate(0, move);
    draw_astroid1(width*1/6, -width/19);
    draw_astroid2(width*2/6, -width/11);
    draw_astroid3(width*3/6, -width/17);
    draw_astroid4(width*4/6, -width/13);
    draw_astroid5(width*5/6, -width/15);
    animation_send_rocket(width/2, height-height/4);
    pop();
  } else {
    push();
    translate(0, 3*width/20);
    draw_astroid1(width*1/6, -width/19);
    draw_astroid2(width*2/6, -width/11);
    draw_astroid3(width*3/6, -width/17);
    draw_astroid4(width*4/6, -width/13);
    draw_astroid5(width*5/6, -width/15);
    pop();
    animation_send_rocket(width/2, height-height/4+3*width/20, width*1/6, -width/19+3*width/20);
  }
}

var send_rocket = 0;
var frame_scene3 = 0.01;
function draw_scene3() {
  draw_space();
  draw_bar();
  push();
  translate(0, 3*width/20);
  draw_astroid1(width*1/6, -width/19);
  draw_astroid2(width*2/6, -width/11);
  draw_astroid3(width*3/6, -width/17);
  draw_astroid4(width*4/6, -width/13);
  draw_astroid5(width*5/6, -width/15);
  pop();
  if (send_rocket == 1) {
    animation_send_rocket(width/2, height-height/4+3*width/20, mouseX, mouseY);
  } else {
    draw_earth(width/2, height-height/4+3*width/20);
  }
  if (frame_scene3 < 360) {
    push();
    fill(241, 247, 244);
    textAlign(CENTER, CENTER);
    textSize(width/50);
    text("Now, try to start mining on every astroid.", width/2, width*4/20);
    pop();
  }
  frame_scene3 += 1;
  if (landed >= 5) {
    frame_scene3 = 0.01;
    scene = 4;
  }
}

var frame_scene4 = 0.01;
function draw_scene4() {
  draw_space();
  draw_earth(width/2, height-height/4+3*width/20);
  draw_bar();
  push();
  translate(0, 3*width/20);
  draw_astroid1(width*1/6, -width/19);
  draw_astroid2(width*2/6, -width/11);
  draw_astroid3(width*3/6, -width/17);
  draw_astroid4(width*4/6, -width/13);
  draw_astroid5(width*5/6, -width/15);
  pop();
  push();
  fill(241, 247, 244);
  textAlign(CENTER, CENTER);
  textSize(width/50);
  if (frame_scene4 < 180) {
    text("Well done.", width/2, width*4/20);
  } else if (frame_scene4 >= 180 && frame_scene4 < 540) {
    text("Have you noticed the consuming speed of resources on the earth slow down?", width/2, width*4/20);
  } else if (frame_scene4 >= 540 && frame_scene4 < 900) {
    text("But how can we use the resources on the earth?", width/2, width*4/20);
  } else if (frame_scene4 >= 900 && frame_scene4 < 1260) {
    text("One way is to send the processed resources back to earth.", width/2, width*4/20);
  } else {
    text("Try to click on an astroid to send the resources back.", width/2, width*4/20);
  }
  pop();
  frame_scene4 += 1;
}

var pressed_x;
var pressed_y;
function draw_scene45() {
  draw_space();
  draw_bar();
  push();
  translate(0, 3*width/20);
  draw_astroid1(width*1/6, -width/19);
  draw_astroid2(width*2/6, -width/11);
  draw_astroid3(width*3/6, -width/17);
  draw_astroid4(width*4/6, -width/13);
  draw_astroid5(width*5/6, -width/15);
  pop();
  animation_send_rocket(width/2, height-height/4+3*width/20, pressed_x, pressed_y);
}

var frame_scene5 = 0.01;
function draw_scene5() {
  draw_space();
  draw_earth(width/2, height-height/4+3*width/20);
  draw_bar();
  push();
  translate(0, 3*width/20);
  draw_astroid1(width*1/6, -width/19);
  draw_astroid2(width*2/6, -width/11);
  draw_astroid3(width*3/6, -width/17);
  draw_astroid4(width*4/6, -width/13);
  draw_astroid5(width*5/6, -width/15);
  pop();
  push();
  fill(241, 247, 244);
  textAlign(CENTER, CENTER);
  textSize(width/50);
  if (frame_scene5 < 180) {
    text("Excellent.", width/2, width*4/20);
  } else if (frame_scene5 >= 180 && frame_scene5 < 360) {
    text("Another way is to use the asteroid as a rest point to Mars.", width/2, width*4/20);
  } else {
    text("Try to click on an astroid to send a rocket to Mars.", width/2, width*4/20);
  }
  pop();
  frame_scene5 += 1;
}

var frame_scene56 = 0.01;
function draw_scene56() {
  draw_space();
  draw_bar();
  var move = map(frame_scene56, 0, 360, 0, width/2);
  push();
  translate(0, move);
  draw_earth(width/2, height-height/4+3*width/20);
  draw_mars(width/2, -height/2);
  push();
  translate(0, 3*width/20);
  draw_astroid1(width*1/6, -width/19);
  draw_astroid2(width*2/6, -width/11);
  draw_astroid3(width*3/6, -width/17);
  draw_astroid4(width*4/6, -width/13);
  draw_astroid5(width*5/6, -width/15);
  pop();
  animation_rocket_mars(pressed_x, pressed_y, width/2, -height/2);
  pop();
  if (frame_scene56 < 360) {
    frame_scene56 += 1;
  } else {
    frame_scene56 = 0.01;
    scene = 6;
  }
}

var frame_scene6 = 0.01;
function draw_scene6() {
  draw_space();
  draw_bar();
  push();
  translate(0, width/2);
  draw_earth(width/2, height-height/4+3*width/20);
  draw_mars(width/2, -height/2);
  push();
  translate(0, 3*width/20);
  draw_astroid1(width*1/6, -width/19);
  draw_astroid2(width*2/6, -width/11);
  draw_astroid3(width*3/6, -width/17);
  draw_astroid4(width*4/6, -width/13);
  draw_astroid5(width*5/6, -width/15);
  pop();
  pop();
  if (frame_scene6 < 180) {
    push();
    fill(241, 247, 244);
    textAlign(CENTER, CENTER);
    textSize(width/50);
    text("But we shall never ignore the risk of ...", width/2, width*8/20);
    pop();
  }
  if (frame_scene6 >= 180 && frame_scene6 < 480) {
    draw_danger(frame_scene6-180);
  }
  if (frame_scene6 >= 480) {
    push();
    fill(241, 247, 244);
    textAlign(CENTER, CENTER);
    textSize(width/50);
    text("Astroids' orbits have changed!", width/2, width*8/20);
    pop();
  }
  if (frame_scene6 < 660) {
    frame_scene6 += 1;
  } else {
    frame_scene6 = 0.01;
    scene = 6.5;
    a1_status = 2;
    a2_status = 2;
    a3_status = 2;
    a4_status = 2;
    a5_status = 2;
  }
}

var frame_scene67 = 0.01;
function draw_scene67() {
  draw_space();
  draw_bar();
  var move = map(frame_scene67, 0, 360, width/2, 0);
  push();
  translate(0, move);
  draw_earth(width/2, height-height/4+3*width/20);
  draw_mars(width/2, -height/2);
  push();
  translate(0, 3*width/20);
  var earthx = width/2;
  var earthy = height-height/4+3*width/20;
  var move1x = map(frame_scene67, 0, 700, 0, earthx-width*1/6);
  var move1y = map(frame_scene67, 0, 700, 0, earthy-(-width/19));
  push();
  translate(move1x, move1y);
  draw_astroid1(width*1/6, -width/19);
  pop();
  var move2x = map(frame_scene67, 0, 700, 0, earthx-width*2/6);
  var move2y = map(frame_scene67, 0, 700, 0, earthy-(-width/11));
  push();
  translate(move2x, move2y);
  draw_astroid2(width*2/6, -width/11);
  pop();
  var move3x = map(frame_scene67, 0, 700, 0, earthx-width*3/6);
  var move3y = map(frame_scene67, 0, 700, 0, earthy-(-width/17));
  push();
  translate(move3x, move3y);
  draw_astroid3(width*3/6, -width/17);
  pop();
  var move4x = map(frame_scene67, 0, 700, 0, earthx-width*4/6);
  var move4y = map(frame_scene67, 0, 700, 0, earthy-(-width/13));
  push();
  translate(move4x, move4y);
  draw_astroid4(width*4/6, -width/13);
  pop();
  var move5x = map(frame_scene67, 0, 700, 0, earthx-width*5/6);
  var move5y = map(frame_scene67, 0, 700, 0, earthy-(-width/15));
  push();
  translate(move5x, move5y);
  draw_astroid5(width*5/6, -width/15);
  pop();
  pop();
  pop();
  if (frame_scene67 < 360) {
    frame_scene67 += 1;
  } else {
    frame_scene67 = 0.01;
    scene = 7;
  }
}

var frame_scene_end = 0.01;
function draw_scene_end() {
  draw_space();
  push();
  fill(241, 247, 244);
  textAlign(CENTER, CENTER);
  textSize(width/10);
  if (scene == 7) {
    text("Fin.", width/2, height/2);
  } else {
    text("Game Over", width/2, height/2);
  }
  pop();
  if (frame_scene_end < 360) {
    frame_scene_end += 1;
  } else {
    frame_scene_end = 0.01;
    scene = 0;
    a1_status = 0;
    a2_status = 0;
    a3_status = 0;
    a4_status = 0;
    a5_status = 0;
    remain = 60;
  }
}

// Drawing details

function draw_space() {
  push();
  background(37, 35, 35);
  pop();
}

function draw_earth(x, y) {
  push();
  noStroke();
  fill(23, 124, 230);
  ellipse(x, y, width/3, width/3);
  fill(35, 190, 31);
  triangle(x-width/6.5, y-width/20, x-width/50, y, x-width/15, y+width/7);
  triangle(x+width/11.45, y-width/7.05, x+width/7, y, x+width/20, y-width/30);
  triangle(x+width/6.8, y-width/25, x+width/11, y+width/8, x+width/6.5, y+width/16);
  arc(x, y, width/3, width/3, -QUARTER_PI*1.3, QUARTER_PI*0.5, CHORD);
  arc(x, y, width/3, width/3, -PI*0.9, -(QUARTER_PI+HALF_PI)*0.9, CHORD);
  arc(x, y, width/3, width/3, HALF_PI*0.85, (HALF_PI+QUARTER_PI)*0.85, CHORD);
  pop();
}

var remain = 60;
var landed = 0;
function draw_bar() {
  var x = width-width/10;
  var y = height/10;
  push();
  noStroke();
  var w = (width - x) / 2;
  var h = height - 2 * y;
  fill(241, 247, 244);
  rect(x, y, w, h, 20, 20, 0, 0);
  var r = map(remain, 0, 60, 0, h);
  fill(218, 204, 24);
  rect(x, y+h-r, w, r, 20, 20, 0, 0);
  pop();
  if (frameCount % (60*(landed+1)) == 0 && remain > 0) {
    remain--;
  }
  if (remain == 0) {
    scene = 8;
  }
  push();
  fill(241, 247, 244);
  textSize(width/100);
  textAlign(CENTER, BOTTOM);
  text("Resources", width-width*1.5/20, (height/10)*0.6);
  text("on Earth", width-width*1.5/20, (height/10)*0.8);
  text("(time)", width-width*1.5/20, height/10);
  textAlign(LEFT, TOP);
  text("60 years", width-width*0.9/20, height/10);
  textAlign(LEFT, CENTER);
  text("30 years", width-width*0.9/20, height/2);
  textAlign(LEFT, BOTTOM);
  text("0 year", width-width*0.9/20, height-height/10);
  pop();
}

var a1_status = 0;
function draw_astroid1(x, y) {
  push();
  noStroke();
  fill(153, 146, 134);
  ellipse(x, y, width/10, width/10);
  fill(106, 108, 100);
  ellipse(x-width/60, y-width/60, width/40, width/40);
  ellipse(x+width/40, y, width/40, width/40);
  ellipse(x-width/100, y+width/40, width/40, width/40);
  pop();
  if (a1_status == 1) {
    draw_sign(x, y);
  }
  if (a1_status == 2) {
    push();
    noStroke();
    fill(201, 37, 21, 0.83*255);
    ellipse(x, y-width/20, width/7, width/5);
    pop();
  }
}

var a2_status = 0;
function draw_astroid2(x, y) {
  push();
  noStroke();
  fill(85, 113, 185);
  ellipse(x, y, width/10, width/10);
  fill(26, 89, 171);
  ellipse(x-width/60, y-width/60, width/40, width/40);
  ellipse(x+width/40, y, width/40, width/40);
  ellipse(x-width/100, y+width/40, width/40, width/40);
  pop();
  if (a2_status == 1) {
    draw_sign(x, y);
  }
  if (a2_status == 2) {
    push();
    noStroke();
    fill(201, 37, 21, 0.83*255);
    ellipse(x, y-width/20, width/7, width/5);
    pop();
  }
}

var a3_status = 0;
function draw_astroid3(x, y) {
  push();
  noStroke();
  fill(201, 138, 53);
  ellipse(x, y, width/10, width/10);
  fill(182, 115, 46);
  ellipse(x-width/60, y-width/60, width/40, width/40);
  ellipse(x+width/40, y, width/40, width/40);
  ellipse(x-width/100, y+width/40, width/40, width/40);
  pop();
  if (a3_status == 1) {
    draw_sign(x, y);
  }
  if (a3_status == 2) {
    push();
    noStroke();
    fill(201, 37, 21, 0.83*255);
    ellipse(x, y-width/20, width/7, width/5);
    pop();
  }
}

var a4_status = 0;
function draw_astroid4(x, y) {
  push();
  noStroke();
  fill(71, 209, 89);
  ellipse(x, y, width/10, width/10);
  fill(25, 161, 38);
  ellipse(x-width/60, y-width/60, width/40, width/40);
  ellipse(x+width/40, y, width/40, width/40);
  ellipse(x-width/100, y+width/40, width/40, width/40);
  pop();
  if (a4_status == 1) {
    draw_sign(x, y);
  }
  if (a4_status == 2) {
    push();
    noStroke();
    fill(201, 37, 21, 0.83*255);
    ellipse(x, y-width/20, width/7, width/5);
    pop();
  }
}

var a5_status = 0;
function draw_astroid5(x, y) {
  push();
  noStroke();
  fill(157, 62, 196);
  ellipse(x, y, width/10, width/10);
  fill(158, 19, 157);
  ellipse(x-width/60, y-width/60, width/40, width/40);
  ellipse(x+width/40, y, width/40, width/40);
  ellipse(x-width/100, y+width/40, width/40, width/40);
  pop();
  if (a5_status == 1) {
    draw_sign(x, y);
  }
  if (a5_status == 2) {
    push();
    noStroke();
    fill(201, 37, 21, 0.83*255);
    ellipse(x, y-width/20, width/7, width/5);
    pop();
  }
}

function draw_rocket(x, y) {
  push();
  if (reverse_flag == 1) {
    translate(x, y);
    rotate(PI);
    translate(-x, -y);
  }
  push();
  noStroke();
  fill(237, 37, 9);
  triangle(x, y-width/12, x-width/60, y-width/24, x+width/60, y-width/24);
  fill(229, 226, 237);
  rect(x-width/60, y-width/24, width/30, width/12);
  fill(232, 136, 23);
  triangle(x-width/60, y+width/24, x, y+width/24, x-width/60, y+width/12);
  triangle(x-width/120, y+width/24, x+width/120, y+width/24, x, y+width/12);
  triangle(x, y+width/24, x+width/60, y+width/24, x+width/60, y+width/12);
  pop();
  pop();
}

function draw_opening_earth(x, y, degree) {
  push();
  noStroke();
  fill(23, 124, 230);
  arc(x, y, width/3, width/3, -HALF_PI+degree, -HALF_PI-degree, PIE);
  fill(35, 190, 31);
  triangle(x-width/6.5, y-width/20, x-width/50, y, x-width/15, y+width/7);
  triangle(x+width/11.45, y-width/7.05, x+width/7, y, x+width/20, y-width/30);
  triangle(x+width/6.8, y-width/25, x+width/11, y+width/8, x+width/6.5, y+width/16);
  arc(x, y, width/3, width/3, -QUARTER_PI*1.3, QUARTER_PI*0.5, CHORD);
  arc(x, y, width/3, width/3, -PI*0.9, -(QUARTER_PI+HALF_PI)*0.9, CHORD);
  arc(x, y, width/3, width/3, HALF_PI*0.85, (HALF_PI+QUARTER_PI)*0.85, CHORD);
  pop();
}

function draw_sign(x, y) {
  push();
  noStroke();
  fill(237, 222, 14);
  ellipse(x, y, width/20, width/20);
  fill(21, 22, 17);
  arc(x, y, width/30, width/30, -HALF_PI, 0, CHORD);
  triangle(x+width*0.7/60, y-width*0.7/60, x-0.8*width/60, y+0.6*width/60, x-0.6*width/60, y+0.8*width/60);
  pop();
}

function draw_mars(x, y) {
  push();
  fill(184, 111, 92);
  ellipse(x, y, width/6, width/6);
  pop();
}

function draw_danger(f) {
  if (f < 1) {
    alert.play();
  }
  if (f > 299) {
    asteroid_hit_earth.play();
  }
  var alpha;
  if (f < 30) {
    alpha = map(f, 0, 30, 0, 200);
  } else if (f >= 30 && f < 60) {
    alpha = map(f, 30, 60, 151, 1.1);
  } else if (f >= 60 && f < 90) {
    alpha = map(f, 60, 90, 1.1, 151);
  } else if (f >= 90 && f < 120) {
    alpha = map(f, 90, 120, 151, 1.1);
  } else if (f >= 120 && f < 150) {
    alpha = map(f, 120, 150, 1.1, 151);
  } else if (f >= 150 && f < 180) {
    alpha = map(f, 150, 180, 151, 1.1);
  } else if (f >= 180 && f < 210) {
    alpha = map(f, 180, 210, 1.1, 151);
  } else if (f >= 210 && f < 240) {
    alpha = map(f, 210, 240, 151, 1.1);
  } else if (f >= 240 && f < 270) {
    alpha = map(f, 240, 270, 1.1, 151);
  } else {
    alpha = map(f, 270, 300, 151, 0);
  }
  push();
  noStroke();
  fill(205, 14, 14, alpha);
  rect(0, 0, width, height);
  fill(17, 14, 13, alpha);
  for (var i = 0; i < 5; i++) {
    quad(i*2*width/8, 0, (i*2+1)*width/8, 0, i*2*width/8, height/4, (i*2-1)*width/8, height/4);
  }
  for (var i = 0; i < 5; i++) {
    quad(i*2*width/8, height*3/4, (i*2+1)*width/8, height*3/4, i*2*width/8, height, (i*2-1)*width/8, height);
  }
  textSize(width/5);
  textAlign(CENTER, CENTER);
  text("DANGER", width/2, height/2);
  pop();
}

// Animation

var frame_scene01 = 0.01;
function animation_scene01() {
  var move = map(frame_scene01, 0, 180, 0, height/4);
  draw_space();
  push();
  translate(0, move);
  draw_earth(width/2, height/2);
  pop();
  if (frame_scene01 < 180) {
    frame_scene01 += 1;
  } else {
    frame_scene01 = 0.01;
    scene = 1;
    count_down.play();
  }
}

var send_rocket_music = 0;
var frame_send_rocket = 0.01;
var reverse_setup = 0;
var reverse_flag = 0;
function animation_send_rocket(x, y, desX, desY) {
  if (frame_send_rocket < 1 && reverse_flag == 0) {
    rocket_take_off.play();
  }
  if (reverse_setup == 1) {
    frame_send_rocket += 540;
    reverse_setup = 0;
    rocket_take_off.play();
  }
  if (frame_send_rocket < 180) {
    var move = map(frame_send_rocket, 0, 180, 0, width/6);
    var degree = map(frame_send_rocket, 0, 180, 0, PI/6);
    push();
    translate(0, -move);
    draw_rocket(x, y);
    pop();
    draw_opening_earth(x, y, degree);
  } else if (frame_send_rocket >= 180 && frame_send_rocket < 360) {
    var move = map(frame_send_rocket, 180, 360, 0, 3*width/20);
    var degree = map(frame_send_rocket, 180, 360, PI/6, 0);
    push();
    translate(0, -move);
    translate(0, -width/6);
    draw_rocket(x, y);
    pop();
    draw_opening_earth(x, y, degree);
  } else {
    draw_earth(x, y);
    var x0 = x;
    var y0 = y-width/6-3*width/20;
    var degree;
    if (desY < y0) {
      degree = map(frame_send_rocket, 360, 540, 0, atan((x0-desX)/(y0-desY)));
    } else {
      if (desX < x0) {
        degree = map(frame_send_rocket, 360, 540, 0, atan((x0-desX)/(y0-desY))+PI);
      } else {
        degree = map(frame_send_rocket, 360, 540, 0, atan((x0-desX)/(y0-desY))-PI);
      }
    }
    var movex = map(frame_send_rocket, 360, 540, 0, x0-desX);
    var movey = map(frame_send_rocket, 360, 540, 0, y0-desY);
    var percent = map(frame_send_rocket, 360, 540, 1, 0.1);
    push();
    translate(-movex, -movey);
    translate(x0, y0);
    scale(percent);
    rotate(-degree);
    translate(-x, -y);
    draw_rocket(x, y);
    pop();
  }
  if (frame_send_rocket < 540 && reverse_flag == 0) {
    frame_send_rocket += 1;
  } else if (frame_send_rocket > 1 && reverse_flag == 1) {
    frame_send_rocket -= 1;
  } else {
    frame_send_rocket = 0.01;
    if (scene == 2) {
      scene = 3;
    }
    if (a1_status == 0) {
      a1_status = 1;
      landed++;
    }
    if (send_rocket == 1) {
      send_rocket = 0;
    }
    if (dist(mouseX, mouseY, width*2/6, -width/11+3*width/20) <= width/20 && a2_status == 0) {
      a2_status = 1;
      landed++;
    } else if (dist(mouseX, mouseY, width*3/6, -width/17+3*width/20) <= width/20 && a3_status == 0) {
      a3_status = 1;
      landed++;
    } else if (dist(mouseX, mouseY, width*4/6, -width/13+3*width/20) <= width/20 && a4_status == 0) {
      a4_status = 1;
      landed++;
    } else if (dist(mouseX, mouseY, width*5/6, -width/15+3*width/20) <= width/20 && a5_status == 0) {
      a5_status = 1;
      landed++;
    }
    if (reverse_flag == 1) {
      reverse_flag = 0;
      scene = 5;
    }
  }
}

function animation_rocket_mars(startx, starty, desx, desy) {
  if (frame_scene56 == 0.01) {
    rocket_take_off.play();
  }
  var movex = map(frame_scene56, 0, 360, 0, desx-startx);
  var movey = map(frame_scene56, 0, 360, 0, desy-starty);
  var degree = map(frame_scene56, 0, 360, 0, atan((startx-desx)/(starty-desy)));
  var scale_rate;
  if (frame_scene56 < 180) {
    scale_rate = map(frame_scene56, 0, 180, 0.1, 1);
  } else {
    scale_rate = map(frame_scene56, 180, 360, 1, 0.1);
  }
  push();
  translate(movex, movey);
  translate(startx, starty)
  scale(scale_rate);
  rotate(-degree);
  translate(-startx, -starty);
  draw_rocket(startx, starty);
  pop();
}

// Control

function mousePressed() {
  if (scene == 0) {
    scene = 0.5;
    earth_move_down.play();
  } else if (scene == 1 && dist(mouseX, mouseY, width/2, height-height/4) <= width/6) {
    frame_scene1 = 0.01;
    scene = 2;
  } else if (scene == 3 && dist(mouseX, mouseY, width/2, height-height/4+3*width/20) <= width/6) {
    send_rocket = 1;
  } else if (scene == 4 || scene == 5) {
    var yes = 0;
    if (dist(mouseX, mouseY, width*1/6, -width/19+3*width/20) <= width/20) {
      yes = 1;
      pressed_x = width*1/6;
      pressed_y = -width/19+3*width/20;
    } else if (dist(mouseX, mouseY, width*2/6, -width/11+3*width/20) <= width/20) {
      yes = 1;
      pressed_x = width*2/6;
      pressed_y = -width/11+3*width/20;
    } else if (dist(mouseX, mouseY, width*3/6, -width/17+3*width/20) <= width/20) {
      yes = 1;
      pressed_x = width*3/6;
      pressed_y = -width/17+3*width/20;
    } else if (dist(mouseX, mouseY, width*4/6, -width/13+3*width/20) <= width/20) {
      yes = 1;
      pressed_x = width*4/6;
      pressed_y = -width/13+3*width/20;
    } else if (dist(mouseX, mouseY, width*5/6, -width/15+3*width/20) <= width/20) {
      yes = 1;
      pressed_x = width*5/6;
      pressed_y = -width/15+3*width/20;
    }
    if (yes == 1) {
      if (scene == 4) {
        scene = 4.5;
        frame_scene4 = 0.01;
        reverse_setup = 1;
        reverse_flag = 1;
      } else if (scene == 5) {
        scene = 5.5;
        frame_scene5 = 0.01;
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

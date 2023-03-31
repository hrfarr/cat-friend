//
//
let healthlvl = 650;
let hungerlvl = 650;
let happylvl = 487.5;
let img;

let meows = [];
let crunches = [];

let speechBubbles = [];
let currentSpeech = null;

let speechbubbleVisible = false;
let speechbubbleTimer = 0;

let x = 400;
let y = 1050;
let diameter = 80;
let isMoving = false;
// let score = 0;

let playGUI = false;
let shopGUI = false;
let itemsGUI = false;
let radioGUI = false;

let nature;
let mousepresssfx;

let catAlive = true;
let catDead = false;

// let playerPaddle, computerPaddle, ball;
// let Score = 0;

//button clickable lets//
let kibbleClickable = false;
let fishClickable = false;
let medicineClickable = false;
let elixirClickable = false;

let cd0Clickable = false;
let cd1Clickable = false;
let cd2Clickable = false;
let cd3Clickable = false;
let cd4Clickable = false;
let cd5Clickable = false;
let cd6Clickable = false;
let cd7Clickable = false;
let cd8Clickable = false;
let cd9Clickable = false;
let cd10Clickable = false;
let cd11Clickable = false;
let cd12Clickable = false;
let cd13Clickable = false;
let cd14Clickable = false;
let cd15Clickable = false;
let cd16Clickable = false;
let cd17Clickable = false;
let cd18Clickable = false;
let cd19Clickable = false;
let cd20Clickable = false;
let cd21Clickable = false;

let vMuteClickable = false;
let vUpClickable = false;
let vDownClickable = false;

let cdVolume = 0.2;



function preload() {
  //images//
  grass = loadImage('assets/ai field and sky.jpg');
  steelBg = loadImage('assets/stainless steel background.png');
  catneutral = loadImage('assets/cat ascii.png');
  catdeadimg = loadImage('assets/cat ascii DEAD.png');
  cursorsymbol = loadImage('assets/Mouse_cursor_outline.png');
  kibble = loadImage('assets/pixelated kibble scoop.png');
  bigfish = loadImage('assets/pixelated fish.png');
  medicine = loadImage('assets/pixelated first aid kit.png');
  elixir = loadImage('assets/elixir of life.png');
  radio = loadImage('assets/cat cd player transparent.png');
  construction = loadImage('assets/under construction 2.png');
  gameCat = loadImage('assets/cat head for playing.png');
  grassLawn = loadImage('assets/grass lawn.png');

  //cd covers
  cd0 = loadImage('assets/smaller cases/small cat cd cases 0.png');
  cd1 = loadImage('assets/smaller cases/small cat cd cases 1.png');
  cd2 = loadImage('assets/smaller cases/small cat cd cases 2.png');
  cd3 = loadImage('assets/smaller cases/small cat cd cases 3.png');
  cd4 = loadImage('assets/smaller cases/small cat cd cases 4.png');
  cd5 = loadImage('assets/smaller cases/small cat cd cases 5.png');
  cd6 = loadImage('assets/smaller cases/small cat cd cases 6.png');
  cd7 = loadImage('assets/smaller cases/small cat cd cases 7.png');
  cd8 = loadImage('assets/smaller cases/small cat cd cases 8.png');
  cd9 = loadImage('assets/smaller cases/small cat cd cases 9.png');
  cd10 = loadImage('assets/smaller cases/small cat cd cases 10.png');
  cd11 = loadImage('assets/smaller cases/small cat cd cases 11.png');
  cd12 = loadImage('assets/smaller cases/small cat cd cases 12.png');
  cd13 = loadImage('assets/smaller cases/small cat cd cases 13.png');
  cd14 = loadImage('assets/smaller cases/small cat cd cases 14.png');
  cd15 = loadImage('assets/smaller cases/small cat cd cases 15.png');
  cd16 = loadImage('assets/smaller cases/small cat cd cases 16.png');
  cd17 = loadImage('assets/smaller cases/small cat cd cases 17.png');
  cd18 = loadImage('assets/smaller cases/small cat cd cases 18.png');
  cd19 = loadImage('assets/smaller cases/small cat cd cases 19.png');
  cd20 = loadImage('assets/smaller cases/small cat cd cases 20.png');
  cd21 = loadImage('assets/smaller cases/small cat cd cases 21.png');

  //hats
  hat1 = loadImage('assets/ranma hat 2.png');
  hat2 = loadImage('assets/straw flower hat.png');
  hat3 = loadImage('assets/top hat.png');
  hat4 = loadImage('assets/640px-Iron_Hat_for_amour.png');

  //icons
  vUp = loadImage('assets/black volume up icon.png');
  vDown = loadImage('assets/black volume down icon.png');
  vMute = loadImage('assets/black mute icon.png');
  soundPause = loadImage('assets/black pause icon.png');
  // vUp = loadImage('assets/sound_add.png');
  // vDown = loadImage ('assets/sound_delete.png');
  // vMute = loadImage ('assets/sound_mute.png')
  // stopSound = loadImage ('assets/control_pause.png');

  //speech bubbles
  speechBubbles.push(loadImage('assets/speech bubbles/meow.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/bark.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/boing!.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/am i a real cat_.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/i want to leave the digital world.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/i’m glad we’re friends.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/i’m having a lot of fun!.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/i’m so hungry i could eat a dog.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/im hungry.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/sometimes i think too much.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/we’re bestfriends. right_.png'));
  speechBubbles.push(loadImage('assets/speech bubbles/yr the best!.png'));

  //font(s)//
  customFont = loadFont("FT88-Expanded.ttf");

  //ambience+sfx//
  mousepresssfx = loadSound('assets/audio/mousepress_sfx2.wav');
  nature = loadSound('assets/audio/ambient nature for cat.mp3');
  silence = loadSound('assets/audio/silence_1.mp3');

  //crunch sfx
  crunches.push(loadSound('assets/audio/crunch.mp3'));
  crunches.push(loadSound('assets/audio/crunch_1.mp3'));
  crunches.push(loadSound('assets/audio/crunch_2.mp3'));

  //music cds//
  // sound = loadSound('button-click.mp3');
  cd0mp3 = loadSound('assets/audio/music/catsongs_catsong1_maintheme.mp3');
  cd1mp3 = loadSound('assets/audio/music/catsongs_catsong3.mp3');
  cd3mp3 = loadSound('assets/audio/music/catsongs_catsong_electropop.mp3');
  cd4mp3 = loadSound('assets/audio/music/catsongs_catsong7.mp3');
  cd5mp3 = loadSound('assets/audio/music/catsongs_catsong_11barguitar.mp3');
  cd6mp3 = loadSound('assets/audio/music/catsongs_catsong2.mp3');
  cd7mp3 = loadSound('assets/audio/music/catsongs_catsong4.mp3');
  cd8mp3 = loadSound('assets/audio/music/catsongs_catsong5.mp3');
  cd9mp3 = loadSound('assets/audio/music/catsongs_catsong6.mp3');
  cd10mp3 = loadSound('assets/audio/music/catsongs_catsong8.mp3');
  cd11mp3 = loadSound('assets/audio/music/catsongs_catsong9.mp3');
  cd12mp3 = loadSound('assets/audio/music/catsongs_catsong10.mp3');
  cd13mp3 = loadSound('assets/audio/music/catsongs_catsong11.mp3');
  cd14mp3 = loadSound('assets/audio/music/catsongs_catsong12.mp3');
  cd15mp3 = loadSound('assets/audio/music/catsongs_catsong13.mp3');
  cd16mp3 = loadSound('assets/audio/music/catsongs_catsong14.mp3');
  cd17mp3 = loadSound('assets/audio/music/catsongs_catsong15.mp3');
  cd18mp3 = loadSound('assets/audio/music/catsongs_catsong_ambientguitar.mp3');
  cd19mp3 = loadSound('assets/audio/music/catsongs_catsong_indierock.mp3');
  cd20mp3 = loadSound('assets/audio/music/catsongs_catsong_noiserock.mp3');
  cd21mp3 = loadSound('assets/audio/music/catsongs_catsong_breaks.mp3');

  //meows
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_1.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_2.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_3.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_4.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_5.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_6.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_7.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_8.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_9.mp3'));
  meows.push(loadSound('assets/meows mp3s/MEOWS_cat_friend_10.mp3'));

  // CDs.push(loadSound('audio1.mp3'));
  // CDs.push(loadSound('audio2.mp3'));
  // CDs.push(loadSound('audio3.mp3'));
}

// var my_button = { x: 10, y: 10, w: 175, h: 50, text: 'PLAY', color: 255, hover_color: 255,
// pressed_color: 'rgb(255,255,128)',
// };

let pbuttonX = 75;
let pbuttonY = 325;
let pbuttonWidth = 200;
let pbuttonHeight = 50;
let pbuttonColor = 255;

let sbuttonX = 300;
let sbuttonY = 325;
let sbuttonWidth = 200;
let sbuttonHeight = 50;
let sbuttonColor = 255;

let ibuttonX = 525;
let ibuttonY = 325;
let ibuttonWidth = 200;
let ibuttonHeight = 50;
let ibuttonColor = 255;

let catlocationX = 350;
let catlocationY = 500;
let catlocationWidth = 125;
let catlocationHeight = 200;

// catneutral, 350, 500, 125, 200
let monies = 50;
let monieMakerSize = 150;
let mMx = 50;
let mMy = 575;
let mMColor = 255;

let bgAudio = true;




function setup() {
  if (bgAudio = true) {
    nature.loop();
  }
  // else { silence.loop()}

mousepresssfx.setVolume(0.55);
nature.setVolume(0.30);
  frameRate(40);
  createCanvas(800, 2250);
  background("blue");

  // input = createInput("name your cat");
  // input.position(20,20);
  // input.size(120);

  textFont(customFont);

  // playMode = 'restart';



  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height

}


function draw() {
  background("blue");
  image(grass, 0, 0, 800, 800);
  time = millis();
  fill(255);
  textSize(12);
  textFont('Times')
  text('cat friend by Henry Farr, beta v1.0. 2023', 600,795)
  let cdVolumeRounded = round(cdVolume, 2);
  // text(cdVolume, 500,500,500)

  textFont(customFont);
  stroke(0);
  fill(255);
  rect(50, 50, 700, 250);
  // rect(50,50,700,50);
  rect(75, 125, 650, 50);
  rect(75, 175, 650, 50);
  rect(75, 225, 650, 50);
  fill('red');
  rect(75, 125, healthlvl, 50);
  fill('yellow');
  rect(75, 175, hungerlvl, 50);
  fill('lime');
  rect(75, 225, happylvl, 50);

  fill(255);
  rect(50, 50,)
  noStroke();
  fill(0);
  textSize(25);
  text('CAT STATS', 75, 100);
  textSize(15);
  text('HEALTH', 100, 155);
  text('HUNGER', 100, 205);
  text('HAPPINESS', 100, 255);

  stroke(0);
  fill(255);
  rect(50, 300, 700, 100)

  //play, shop, items buttons+colors//
  fill(pbuttonColor);
  rect(pbuttonX, pbuttonY, pbuttonWidth, pbuttonHeight);

  fill(sbuttonColor);
  rect(sbuttonX, sbuttonY, sbuttonWidth, sbuttonHeight);

  fill(ibuttonColor);
  rect(ibuttonX, ibuttonY, ibuttonWidth, ibuttonHeight);

  noStroke();
  fill(0);
  textSize(15);
  text('PLAY', 127.5, 355);
  text('SHOP', 357.5, 355);
  text('ITEMS', 570.5, 355);

image(construction, 522,317.5,210,65)

  stroke(0);
  fill(255);
  rect(25, 525, 200, 250);
  fill(mMColor);
  rect(mMx, mMy, monieMakerSize, monieMakerSize);
  image(cursorsymbol, 132, 630, 60, 88);
  noStroke();
  fill(0);
  textSize(15);
  text('MONIES', 60, 555.5);
  text('MAKER', 72.5, 755.5);
  // text('click',72.5,655.5);

  stroke(0);
  fill(255);
  rect(500, 25, 275, 75)
  noStroke();
  fill(0);
  textSize(15);
  text('M$:', 535, 67.5);
  text(monies, 600, 67.5)

  if (speechbubbleVisible) {
    // draw the white rectangle
    if (!currentSpeech) {
      currentSpeech = speechBubbles[Math.floor(Math.random() * speechBubbles.length)];
    }
    
    // display the current image in the center of the canvas
    image(currentSpeech, 500, 435,140,50);
    
    // let randomSpeech = speechBubbles[Math.floor(Math.random() * speechBubbles.length)];
    
    // // play the chosen sound
    // image(randomSpeech, width/2 - randomSpeech.width/2, height/2 - randomSpeech.height/2);
    
  }
    
    // increment the timer
    speechbubbleTimer++;
    
    // hide the rectangle after 5 seconds
    if (speechbubbleTimer > 1 * 60) {
      speechbubbleVisible = false;
      speechbubbleTimer = 0;
      currentSpeech = null;
    }

  //vvv Stat Bar Limits
  if (hungerlvl >= 650) {
    hungerlvl = 650;
  }
  if (hungerlvl <= 0) {
    hungerlvl = 0;
  }
  if (happylvl <= 0) {
    happylvl = 0;
  }
  if (happylvl >= 650) {
    happylvl = 650;
  }
  if (healthlvl <= 0) {
    healthlvl = 0;
  }
  if (healthlvl >= 650) {
    healthlvl = 650;
  }
  //vvv Stat Bar filling rates
  if (millis()) {
    hungerlvl = hungerlvl - 0.1;
  }
  if (millis()) {
    happylvl = happylvl - 0.05;
  }
  if(hungerlvl <= 487.5) {
    healthlvl = healthlvl-0.025;
  }
  if (hungerlvl <= 325) {
    happylvl = happylvl - 0.075;
  }
  if (hungerlvl <= 325) {
    healthlvl = healthlvl - 0.05;
  }
  if (hungerlvl <= 162.5) {
    healthlvl = healthlvl - 0.075;
  }
  if (hungerlvl <= 0) {
    healthlvl = healthlvl - 0.125;
  }
  //^^^

  //cat!!!!//
  // rect(400,500,125,200);
  if (catAlive) {
  image(catneutral, catlocationX, catlocationY, catlocationWidth, catlocationHeight);
  }
  if (healthlvl <= 1) {
    catAlive = false;
    catDead = true;
    }
    if (catDead) {
      image(catdeadimg, catlocationX-75, catlocationY+75,catlocationHeight,catlocationWidth);
  cd0mp3.stop();
  cd1mp3.stop();
  cd3mp3.stop();
  cd4mp3.stop();
  cd5mp3.stop();
  cd6mp3.stop();
  cd7mp3.stop();
  cd8mp3.stop();
  cd9mp3.stop();
  cd10mp3.stop();
  cd11mp3.stop();
  cd12mp3.stop();
  cd13mp3.stop();
  cd14mp3.stop();
  cd15mp3.stop();
  cd16mp3.stop();
  cd17mp3.stop();
  cd18mp3.stop();
  cd19mp3.stop();
  cd20mp3.stop();
  cd21mp3.stop();
    }



  //radio
  image(radio, 600, 575, 100, 100);

  // textSize(32);
  // text(`Score: ${score}`, 10, 30);

  //SHOP GUI//
  if (shopGUI) {
    // radioGUI = false;
    // sbuttonColor = color(255);
    //shop//
    fill(255);
    rect(0, 850, 800, 300);
    stroke(0);
    rect(25, 875, 750, 50);
    // rect(725,875,50,50);
    // line(725,875,775,925);
    // line(775,875,725,925);
    // image(exitsymbol,737.5,887.5,25,25)

    //kibble
    // rect(25,975,125,125);
    // rect(25,950,125,25);
    // rect(25,1100,125,25);
    image(kibble, 17.5, 1000, 145, 80)
    kibbleClickable = !kibbleClickable;

    //fish
    // rect(175,975,250,125);
    // rect(175,950,250,25);
    // rect(175,1100,250,25);
    image(bigfish, 205, 990, 190, 95)
    fishClickable = !fishClickable;

    //medicine
    image(medicine, 445, 1005, 125, 75)
    medicineClickable = !medicineClickable;

    //elixir
    image(elixir, 625,980,105,120)
    elixirClickable = !elixirClickable;

    //shop text//
    fill(0);
    noStroke();
    textSize(15);
    text('SHOP', 357.5, 905);
    textSize(12);
    text('Kibble', 37.5, 967.5);
    text('M$25', 52.5, 1117.5);
    text('One big fish', 199, 967.5);
    text('M$50', 263.5, 1117.5);
    text('Medicine', 437.5, 967.5);
    text('M$100', 465, 1117.5);
    text('Elixir', 625, 967.5);
    text('M$300', 635, 1117.5);
  } else { 
  kibbleClickable = false;
  fishClickable = false;
  medicineClickable = false;
  elixirClickable = false;
}

  //radioGUI//
  if (radioGUI) {
    // shopGUI = false;
    // image(steelBg,0,850,800,1250)
    fill(255);
    rect(0, 850, 800, 1250);
    
    stroke(0);
    rect(25, 875, 750, 50);
    rect(37.5,887.5,212.5,25, 25);
    rect(268.5,887.5,25,25, 25);
    rect(311.5,887.5,25,25, 25);
    rect(354.5,887.5,25,25, 25);
    rect(397.5,887.5,107.5,25, 25);

    // rect(300,887.5,25,25)
    image(soundPause, 268.5,887.5,25,25)
    vMuteClickable = !vMuteClickable;
    image(vDown, 312.5,886,27.5,27.5)
    vDownClickable = !vDownClickable;
    image(vUp, 353.5,886,27.5,27.5)
    vUpClickable = !vUpClickable;

    fill(0);
    noStroke();
    textSize(15);
    text('CD PLAYER', 50, 905);
    textSize (7.5);
    text('(vol sets between songs)', 520, 920);
    textSize(15);
    text(cdVolumeRounded, 407.5,905)

    //+180 between cd x distance
       //+185 between cd y distance
    image(cd0, 50, 965, 150, 150)
    cd0Clickable = !cd0Clickable;
    image(cd1, 230, 965, 150, 150)
    cd1Clickable = !cd1Clickable;
    image(cd2, 410, 965, 150, 150)
    cd2Clickable = !cd2Clickable;
    image(cd3, 590, 965, 150, 150)
    cd3Clickable = !cd3Clickable;
 
    image(cd4, 50, 1150, 150, 150)
    cd4Clickable = !cd4Clickable;
    image(cd5, 230, 1150, 150, 150)
    cd5Clickable = !cd5Clickable;
    image(cd7, 410, 1150, 150, 150)
    cd6Clickable = !cd6Clickable;
    image(cd8, 590, 1150, 150, 150)
    cd7Clickable = !cd7Clickable;

    image(cd9, 50, 1335, 150, 150)
    cd8Clickable = !cd9Clickable;
    image(cd10, 230, 1335, 150, 150)
    cd9Clickable = !cd9Clickable;
    image(cd11, 410, 1335, 150, 150)
    cd10Clickable = !cd10Clickable;
    image(cd12, 590, 1335, 150, 150)
    cd11Clickable = !cd11Clickable;

    image(cd13, 50, 1520, 150, 150)
    cd12Clickable = !cd12Clickable;
    image(cd14, 230, 1520, 150, 150)
    cd13Clickable = !cd13Clickable;
    image(cd15, 410, 1520, 150, 150)
    cd14Clickable = !cd14Clickable;
    image(cd16, 590, 1520, 150, 150)
    cd15Clickable = !cd15Clickable;

    image(cd17, 50, 1705, 150, 150)
    cd16Clickable = !cd16Clickable;
    image(cd18, 230, 1705, 150, 150)
    cd17Clickable = !cd17Clickable;
    image(cd19, 410, 1705, 150, 150)
    cd18Clickable = !cd18Clickable;
    image(cd20, 590, 1705, 150, 150)
    cd19Clickable = !cd19Clickable;

    image(cd21, 50, 1890, 150, 150)
    cd20Clickable = !cd20Clickable;


    fill(0);
    noStroke();
    textSize(12);
    text('M$0', 100, 1125);
    text('M$10', 272.5, 1125);
    text('M$10', 452.5, 1125);
    text('M$10', 632.5, 1125);
    text('M$10', 92.5, 1310);
    text('M$10', 272.5, 1310);
    text('M$10', 452.5, 1310);
    text('M$10', 632.5, 1310);
    text('M$10', 92.5, 1495);
    text('M$10', 272.5, 1495);
    text('M$10', 452.5, 1495);
    text('M$10', 632.5, 1495);
    text('M$10', 92.5, 1680);
    text('M$10', 272.5, 1680);
    text('M$10', 452.5, 1680);
    text('M$10', 632.5, 1680);
    text('M$10', 92.5, 1865);
    text('M$10', 272.5, 1865);
    text('M$10', 452.5, 1865);
    text('M$10', 632.5, 1865);
    text('M$10', 92.5, 2050);
  } else {
    cd0Clickable = false;
    cd1Clickable = false;
    cd2Clickable = false;
    cd3Clickable = false;
    cd4Clickable = false;
    cd5Clickable = false;
    cd6Clickable = false;
    cd7Clickable = false;
    cd8Clickable = false;
    cd9Clickable = false;
    cd10Clickable = false;
    cd11Clickable = false;
    cd12Clickable = false;
    cd13Clickable = false;
    cd14Clickable = false;
    cd15Clickable = false;
    cd16Clickable = false;
    cd17Clickable = false;
    cd18Clickable = false;
    cd19Clickable = false;
    cd20Clickable = false;
    cd21Clickable = false;
    vMuteClickable = false;
    vDownClickable = false;
    vUpClickable = false;
  }

  if (playGUI) {
  
    // Draw the rectangle
    // fill(255);
    // stroke(0);
    // rect(0, 850, 800, 400);
    image(grassLawn,0,850,800,400);
    fill(255);
    stroke(0);
    rect(0, 1250, 800, 40);
    noStroke();
    fill(0);
    text("WASD controls",12.5,1275)
    
    // Draw the circle
    // fill(0);
    // circle(x, y, diameter);
    image(gameCat, x - diameter/2, y - diameter/2, diameter, diameter);
    
    // Move the circle based on arrow key presses
    if (keyIsDown(65) && !isMoving) {
      x -= 40;
      happylvl = happylvl+0.75;
      isMoving = true;
    }
    if (keyIsDown(68) && !isMoving) {
      x += 40;
      happylvl = happylvl+0.75;
      isMoving = true;
    }
    if (keyIsDown(87) && !isMoving) {
      y -= 40;
      happylvl = happylvl+0.75;
      isMoving = true;
    }
    if (keyIsDown(83) && !isMoving) {
      y += 40;
      happylvl = happylvl+0.75;
      isMoving = true;
    }
    
    // Keep the circle inside the rectangle
    if (x < diameter/2) {
      x = diameter/2;
    }
    if (x > 800 - diameter/2) {
      x = 800 - diameter/2;
    }
    if (y < 850 + diameter/2) {
      y = 850 + diameter/2;
    }
    if (y > 1250 - diameter/2) {
      y = 1250 - diameter/2;
    }
  }
   else {

  }
  //fit check
//  image(hat1,372.5,483,125,85);
// image(hat2,365,465,175,100);
// image(hat3,365,450,100,75);
// image(hat4,364,465,100,75);
  
}



function mousePressed() {

  mousepresssfx.play();

//cat sounds
if (mouseX >= catlocationX && mouseX <= catlocationX + catlocationWidth &&
  mouseY >= catlocationY && mouseY <= catlocationY + catlocationHeight) {
 // choose a random sound from our array
 let randomMeow = meows[Math.floor(Math.random() * meows.length)];
    
 // play the chosen sound
 randomMeow.setVolume(0.25);
 randomMeow.play();

 speechbubbleVisible = true;
  }

  //play button//
  if (mouseX >= pbuttonX && mouseX <= pbuttonX + pbuttonWidth &&
    mouseY >= pbuttonY && mouseY <= pbuttonY + pbuttonHeight) {
    pbuttonColor = color(0, 255, 0); 
    playGUI = !playGUI;
    radioGUI = false;
    shopGUI = false;
    //Change button color to yellow
  }

  //shop button//
  if (mouseX >= sbuttonX && mouseX <= sbuttonX + sbuttonWidth && mouseY >= sbuttonY && mouseY <= sbuttonY + sbuttonHeight) {
    sbuttonColor = 'yellow';
    shopGUI = !shopGUI;
    radioGUI = false;
    playGUI = false;
  }

  //buy buttons
  //buy kibble
  if (mouseX >= 17.5 && mouseX <= 162.5 && mouseY >= 1000 && mouseY <= 1080 && monies >= 25 && kibbleClickable) {
    monies -= 25;
    hungerlvl += 75;
    happylvl += 25;
    let randomCrunch = crunches[Math.floor(Math.random() * crunches.length)];
    randomCrunch.setVolume(0.25);
    randomCrunch.play();
    kibbleClickable = !kibbleClickable;
  }
  //buy fish
  if (mouseX >= 205 && mouseX <= 395 && mouseY >= 990 && mouseY <= 1085 && monies >= 50 && fishClickable) {
    monies -= 50;
    hungerlvl += 175;
    happylvl += 50;
    let randomCrunch = crunches[Math.floor(Math.random() * crunches.length)];
    randomCrunch.setVolume(0.25);
    randomCrunch.play();
    fishClickable = !fishClickable;
  }
  //buy meds
  if (mouseX >= 445 && mouseX <= 575 && mouseY >= 1005 && mouseY <= 1080 && monies >= 100 && medicineClickable) {
    monies -= 100;
    healthlvl += 150;
    let randomCrunch = crunches[Math.floor(Math.random() * crunches.length)];
    randomCrunch.setVolume(0.25);
    randomCrunch.play();
  }
 //buy elixir
 if (mouseX >= 625 && mouseX <= 730 && mouseY >= 980 && mouseY <= 1100 && monies >= 300 && elixirClickable) {
  monies -= 300;
  healthlvl += 650;
  hungerlvl += 650;
  happylvl += 325;
  let randomCrunch = crunches[Math.floor(Math.random() * crunches.length)];
  randomCrunch.setVolume(0.25);
  randomCrunch.play();
}
  // 625,980,105,120

  //adjust volume
  //mute
    if (mouseX > 268.5 && mouseX < 293.5 && mouseY > 887.5 && mouseY < 912.5 && vMuteClickable) {
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();
    }
//dec volume
    if (mouseX > 311.5 && mouseX < 336.5 && mouseY > 887.5 && mouseY < 912.5 && vDownClickable) {
      cdVolume = cdVolume - 0.05;
    }
    if(cdVolume <= 0) {
      cdVolume = 0;
    }
    //inc volume
    if (mouseX > 354.5 && mouseX < 379.5 && mouseY > 887.5 && mouseY < 912.5 && vUpClickable) {

      cdVolume = cdVolume + 0.05;
    }
    if(cdVolume >= 0.5) {
      cdVolume = 0.5;
    }

  ////buy cds
  //buy cd0
  if (mouseX > 60 && mouseX < 190 && mouseY > 985 && mouseY < 1125 && monies >= 0 && cd0Clickable) {
    monies -= 0;
    // nature.pause();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();
    cd0mp3.playMode('restart');
    cd0mp3.loop();
    cd0mp3.setVolume(cdVolume);

    // cd0Clickable = !cd0Clickable;
  }
  //buy cd1//
    if (mouseX > 240 && mouseX < 370 && mouseY > 985 && mouseY < 1125 && monies >= 10 && cd1Clickable) {
    monies -= 10;
    // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
 
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    // cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

    cd6mp3.playMode('restart');
    cd6mp3.loop();
    cd6mp3.setVolume(cdVolume);
  
    // cd1Clickable = !cd1Clickable;
  }
//buy cd2//
if (mouseX > 420 && mouseX < 550 && mouseY > 985 && mouseY < 1125 && monies >= 10 && cd2Clickable) {
  monies -= 10;
  // nature.pause();
  cd0mp3.stop();
  // cd1mp3.stop();
  cd3mp3.stop();
  cd4mp3.stop();
  cd5mp3.stop();
  cd6mp3.stop();
  cd7mp3.stop();
  cd8mp3.stop();
  cd9mp3.stop();
  cd10mp3.stop();
  cd11mp3.stop();
  cd12mp3.stop();
  cd13mp3.stop();
  cd14mp3.stop();
  cd15mp3.stop();
  cd16mp3.stop();
  cd17mp3.stop();
  cd18mp3.stop();
  cd19mp3.stop();
  cd20mp3.stop();
  cd21mp3.stop();

  cd1mp3.playMode('restart');
  cd1mp3.loop();
  cd1mp3.setVolume(cdVolume);

  // cd2Clickable = !cd2Clickable;
}
//buy cd3//
if (mouseX > 600 && mouseX < 730 && mouseY > 985 && mouseY < 1125 && monies >= 10 && cd3Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();

    // cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd3mp3.playMode('restart');
  cd3mp3.loop();
  cd3mp3.setVolume(cdVolume);

  // cd3Clickable = !cd3Clickable;
}
//buy cd4//
if (mouseX > 60 && mouseX < 190 && mouseY > 1170 && mouseY < 1310 && monies >= 10 && cd4Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    // cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd19mp3.playMode('restart');
  cd19mp3.loop();
  cd19mp3.setVolume(cdVolume);

  // cd4Clickable = !cd4Clickable;
}
//buy cd5//
if (mouseX > 240 && mouseX < 370 && mouseY > 1170 && mouseY < 1310 && monies >= 10 && cd5Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    // cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();
  cd5mp3.playMode('restart');
  cd5mp3.loop();
  cd5mp3.setVolume(cdVolume);

  // cd5Clickable = !cd5Clickable;
}
//buy cd6//
if (mouseX > 420 && mouseX < 550 && mouseY > 1170 && mouseY < 1310 && monies >= 10 && cd6Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    // cd20mp3.stop();
    cd21mp3.stop();

  cd20mp3.playMode('restart');
  cd20mp3.loop();
  cd20mp3.setVolume(cdVolume);

  // cd6Clickable = !cd6Clickable;
}
//buy cd7//
if (mouseX > 600 && mouseX < 730 && mouseY > 1170 && mouseY < 1310 && monies >= 10 && cd7Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    // cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd18mp3.playMode('restart');
  cd18mp3.loop();
  cd18mp3.setVolume(cdVolume);

  // cd7Clickable = !cd7Clickable;
}
//buy cd8//
if (mouseX > 60 && mouseX < 190 && mouseY > 1355 && mouseY < 1495 && monies >= 10 && cd8Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    // cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd9mp3.playMode('restart');
  cd9mp3.loop();
  cd9mp3.setVolume(cdVolume);

  // cd8Clickable = !cd8Clickable;
}
//buy cd9//
if (mouseX > 240 && mouseX < 370 && mouseY > 1355 && mouseY < 1495 && monies >= 10 && cd9Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    // cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd8mp3.playMode('restart');
  cd8mp3.loop();
  cd8mp3.setVolume(cdVolume);

  // cd9Clickable = !cd9Clickable;
}
//buy cd10//
if (mouseX > 420 && mouseX < 550 && mouseY > 1355 && mouseY < 1495 && monies >= 10 && cd10Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    // cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd4mp3.playMode('restart');
  cd4mp3.loop();
  cd4mp3.setVolume(cdVolume);

  // cd10Clickable = !cd10Clickable;
}
//buy cd11//
if (mouseX > 600 && mouseX < 730 && mouseY > 1355 && mouseY < 1495 && monies >= 10 && cd11Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    // cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd10mp3.playMode('restart');
  cd10mp3.loop();
  cd10mp3.setVolume(cdVolume);

  // cd11Clickable = !cd11Clickable;
}
//buy cd12//
if (mouseX > 60 && mouseX < 190 && mouseY > 1540 && mouseY < 1680 && monies >= 10 && cd12Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    // cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd12mp3.playMode('restart');
  cd12mp3.loop();
  cd12mp3.setVolume(cdVolume);

  // cd12Clickable = !cd12Clickable;
}
//buy cd13//
if (mouseX > 240 && mouseX < 370 && mouseY > 1540 && mouseY < 1680 && monies >= 10 && cd13Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    // cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd13mp3.playMode('restart');
  cd13mp3.loop();
  cd13mp3.setVolume(cdVolume);

  // cd13Clickable = !cd13Clickable;
}
//buy cd14//
if (mouseX > 420 && mouseX < 550 && mouseY > 1540 && mouseY < 1680 && monies >= 10 && cd14Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    // cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd11mp3.playMode('restart');
  cd11mp3.loop();
  cd11mp3.setVolume(cdVolume);

  // cd14Clickable = !cd14Clickable;
}
//buy cd15//
if (mouseX > 600 && mouseX < 730 && mouseY > 1540 && mouseY < 1680 && monies >= 10 && cd15Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    // cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd16mp3.playMode('restart');
  cd16mp3.loop();
  cd16mp3.setVolume(cdVolume);

  // cd15Clickable = !cd15Clickable;
}
//buy cd16//
if (mouseX > 60 && mouseX < 190 && mouseY > 1725 && mouseY < 1865 && monies >= 10 && cd16Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    // cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd14mp3.playMode('restart');
  cd14mp3.loop();
  cd14mp3.setVolume(cdVolume);

  // cd16Clickable = !cd16Clickable;
}
//buy cd17//
if (mouseX > 240 && mouseX < 370 && mouseY > 1725 && mouseY < 1865 && monies >= 10 && cd17Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    // cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd7mp3.playMode('restart');
  cd7mp3.loop();
  cd7mp3.setVolume(cdVolume);

  // cd17Clickable = !cd17Clickable;
}
//buy cd18//
if (mouseX > 420 && mouseX < 550 && mouseY > 1725 && mouseY < 1865 && monies >= 10 && cd18Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    // cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd15mp3.playMode('restart');
  cd15mp3.loop();
  cd15mp3.setVolume(cdVolume);

  // cd18Clickable = !cd18Clickable;
}
//buy cd19//
if (mouseX > 600 && mouseX < 730 && mouseY > 1725 && mouseY < 1865 && monies >= 10 && cd19Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    // cd21mp3.stop();

  cd21mp3.playMode('restart');
  cd21mp3.loop();
  cd21mp3.setVolume(cdVolume);

  // cd19Clickable = !cd19Clickable;
}
//buy cd20//
if (mouseX > 60 && mouseX < 190 && mouseY > 1910 && mouseY < 2050 && monies >= 10 && cd20Clickable) {
  monies -= 10;
  // nature.pause();
    cd0mp3.stop();
    cd1mp3.stop();
    cd3mp3.stop();
    cd4mp3.stop();
    cd5mp3.stop();
    cd6mp3.stop();
    cd7mp3.stop();
    cd8mp3.stop();
    cd9mp3.stop();
    cd10mp3.stop();
    cd11mp3.stop();
    cd12mp3.stop();
    cd13mp3.stop();
    cd14mp3.stop();
    cd15mp3.stop();
    cd16mp3.stop();
    // cd17mp3.stop();
    cd18mp3.stop();
    cd19mp3.stop();
    cd20mp3.stop();
    cd21mp3.stop();

  cd17mp3.playMode('restart');
  cd17mp3.loop();
  cd17mp3.setVolume(cdVolume);

  // cd20Clickable = !cd20Clickable;
}


//50,200,975,1125

//185 between y
//140 cd height



  // if(mouseX >= 737.5 && mouseX <= 787.5 && mouseY >= 887.5 && mouseY <= 937.5 ) {
  //   shopGUI=false;
  // }


  //items button//
  if (mouseX >= ibuttonX && mouseX <= ibuttonX + ibuttonWidth &&
    mouseY >= ibuttonY && mouseY <= ibuttonY + ibuttonHeight) {
    ibuttonColor = color(200, 200, 200);
  }

  //monie clicker button//
  if (mouseX >= mMx && mouseX <= mMx + monieMakerSize && mouseY >= mMy && mouseY <= mMy + monieMakerSize) {
    monies++;
    mMColor = color(0, 255, 0);
  }

  //radio button//
  if (mouseX >= 600 && mouseX <= 600 + 100 && mouseY >= 575 && mouseY <= 575 + 100) {
    radioGUI = !radioGUI;
    shopGUI = false;
    playGUI = false;

  }
}

// button( my_button );
function mouseReleased() {
  mMColor = 255;
  pbuttonColor = 255; // Change button color back to white
  sbuttonColor = 255;
  ibuttonColor = 255;// Change button color back to white
}
function keyReleased() {
  isMoving = false;
}








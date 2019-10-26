/// 2. This code loads the IFrame Player API code asynchronously.
var myCanv,myDiv,myAss;
var tag = document.createElement('script');
let playlistPlayer;
var myPlaylist = ['OdZrFtIGzfU','pqiJ7krbEDM','Oi7WH7_NO9I']
      
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function preload()
{

}
var img;
var begin = 1;
var capture;
var h;
var m;
var canv;
function setup() {
  myCanv=createCanvas(1000, 500);
  myCanv.position(0,0);
  img = loadImage('symbol.png');
  capture = createCapture(VIDEO);
  capture.size(500,500);
  background(0,0,0);
  capture.hide();
  
}


function draw() {
  if(boolean(begin))
  {
    circle(950,450,50);
    image(img, 918, 418, img.width / 8, img.height / 8);   
  }
  else
  {
    background(100,200,255);

    myDiv=createDiv();
    myDiv.size(320,195);
    myDiv.position(680,152);
    myDiv.id('texas');
    playlistPlayer = new YT.Player('texas',{
    width: '320',
    height: '195',
    events: {
   'onReady': onPlayerReady
    }
 });
   myAss=createElement('a','Hatsune Miku');
   myAss.size(250,300);
   myAss.position(0,100);
   myAss.class("twitter-timeline");
   myAss.attribute('href','https://twitter.com/cfm_miku_en');

    h = hour();
    m = minute();
    d = day();
    mon = month();
    y = year();
    background(240,255,255); 
    image(capture,250,50);
    
    if(h>12)
    {
      h= h-12;
    
    if(m<10)
    {
      textSize(32);
      text(h +':0'+ m +' PM', 25,50);
      textSize(16);
      text(mon + '/' + d + '/' + y, 27, 75);
    }
    else
    {
      textSize(32);
      text(h +':'+ m + ' PM', 25,50);
      textSize(16);
      text(mon + '/' + d + '/' + y,27,70);
      
    }
    }
    else
    {
    if(m<10)
    {
      textSize(32);
      text(h +':0'+ m +' AM', 25,50);
      textSize(16);
      text(mon + '/' + d + '/' + y,27,70);
    }
    else
    {
    textSize(32);
    text(h +':'+ m + ' AM', 25,50);
    textSize(16);
    text(mon + '/' + d + '/' + y,27,70);
    }
    }
    
  }
}
function mousePressed()
{
  if(mouseX>925 && mouseX<975 && mouseY>425 && mouseY<475)
  {
    begin = 0;
  }
}
// 4. The API will call this function when the video player is ready
function onPlayerReady(event) {
event.target.cuePlaylist(myPlaylist);
}
        
function stopVideo() {
player.stopVideo();
}



    
 

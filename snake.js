var cvs=document.getElementById("canvas")
var ctx=cvs.getContext("2d");
var snakeW=10;
var snakeH=10;
function  drawsnake(x,y){

 ctx.fillStyle="white";
 ctx.fillRect(x*10,y*10,snakeW,snakeH);
 ctx.fillStyle="black";
 ctx.strokeRect(x*10,y*10,snakeW,snakeH);
 

}
//creat snake
var len=4;
snake=[];


for(var i=len-1; i>=0; i--)
{
       snake.push({
       	x:i,y:0
       })	
}

drawsnake(8,5);
drawsnake(3,4)
for(var i-0; i<snake.length; i++)
{
	var X=snake[i].x;
	var Y=snake[i].y;
	drawsnake(X,Y);
}


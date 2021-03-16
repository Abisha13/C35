var database,position;
var ball;
var ballposition;

function setup(){
    createCanvas(500,500);
    database = firebase.database()
    console.log(database)
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballposition = database.ref('Ball/position');
    ballposition.on("value",readPosition,showError)

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();
}

function changePosition(x,y){
    database.ref('Ball/position').set({
        x:ball.x+x,
    y:ball.y+y
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function readPosition(data){
position=data.val()
ball.x = position.x
ball.y=position.y
}
function showError(){
    console.log("error")
}

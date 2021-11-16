
function startBallPositionAxisX(width){
    return width/2;
}

function startBallPositionAxisY(height){
    return height/2 - 100/2;
}

function startBallDirection(){
    if(Math.random() < 0.5){
        return -5
    }
    else{
        return 5
    }
}
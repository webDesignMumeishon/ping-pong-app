
function startBallPositionAxisX(){
    let max = 650
    let min = 50
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// function startBallPositionAxisY(){
//     let max = 650
//     let min = 50
//     return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }

function startBallDirection(){
    if(Math.random() < 0.5){
        return -5
    }
    else{
        return 5
    }
}
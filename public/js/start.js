const min = 5;
const max = 20;
const initialBallSpeedNum = 15;


export function startBallPosition(app){

    const ball = app.getNode("red-box")

    ball.x = app.width / 2
    ball.y = app.height / 2 - 100 / 2

    let randomNumber = Math.random() * (max - min) + min;

    ball.speed = initialBallSpeedNum
    ball.directionX = randomNumber;
    ball.directionY = -ball.directionX;

}


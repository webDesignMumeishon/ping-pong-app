const min = 5;
const max = 20;
const initialBallSpeedNum = 15;

function startBallPosition(){

    const ball = this.getNode("red-box")

    ball.x = this.width / 2
    ball.y = this.height / 2 - 100 / 2

    let randomNumber = Math.random() * (max - min) + min;

    ball.speed = initialBallSpeedNum
    ball.directionX = randomNumber;
    ball.directionY = -ball.directionX;

}


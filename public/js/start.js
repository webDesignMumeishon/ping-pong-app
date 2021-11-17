const min = 10

function startBallPosition(){

    const ball = this.getNode("red-box")

    ball.x = this.width / 2
    ball.y = this.height / 2 - 100 / 2

    let randomNumber = Math.random() * (20 - min) + min;

    ball.speed = 10
    ball.directionX = randomNumber;
    ball.directionY = -ball.directionX;
}


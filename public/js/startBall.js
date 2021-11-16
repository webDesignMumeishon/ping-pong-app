const min = -10

function startBallPosition(){
    this.getNode('red-box').x = this.canvas.width / 2
    this.getNode('red-box').y = this.canvas.height / 2 - 100 / 2

    let randomNumber = Math.random() * (10 - min) + min

    this.getNode('red-box').directionX = randomNumber;
    this.getNode('red-box').directionY = -randomNumber;
}


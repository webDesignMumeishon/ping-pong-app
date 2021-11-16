const min = -10

function startBallPosition(app){
    app.getNode('red-box').x = app.canvas.width / 2
    app.getNode('red-box').y = app.canvas.height / 2 - 100 / 2

    let randomNumber = Math.random() * (10 - min) + min

    app.getNode('red-box').directionX = randomNumber;
    app.getNode('red-box').directionY = -randomNumber;
}


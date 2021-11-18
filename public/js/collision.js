export function collision(ball, playerPaddle){

    playerPaddle.top = playerPaddle.y
    playerPaddle.bottom = playerPaddle.y + playerPaddle.height
    playerPaddle.left = playerPaddle.x
    playerPaddle.right = playerPaddle.x + playerPaddle.width
    
    ball.top = ball.y - ball.r
    ball.bottom = ball.y + ball.r
    ball.left = ball.x - ball.r
    ball.right = ball.x + ball.r

    return ball.right > playerPaddle.left && ball.top < playerPaddle.bottom && ball.left < playerPaddle.right && ball.bottom > playerPaddle.top
}




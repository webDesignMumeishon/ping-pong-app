const MIN_STARTING_POINT = -10;
const MAX_STARTING_POINT = 10;
const INIT_BALL_SPEED = 15;
const INCREMENT_RANGE = 5
const OUT_RANGE_ONE = -2
const OUT_RANGE_TWO = 2



export function startBallPosition(app){
    const ball = app.getNode("red-box")
    ball.x = app.width / 2
    ball.y = app.height / 2 - 100 / 2

    let ballInitialDirectionX = Math.random() * (MAX_STARTING_POINT - MIN_STARTING_POINT) + MIN_STARTING_POINT 
    let ballInitialDirectionY = Math.random() * (MAX_STARTING_POINT - MIN_STARTING_POINT) + MIN_STARTING_POINT 

    let checkIfBallInitialDirectionIsOutOfRange = ballInitialDirectionX > -2 && ballInitialDirectionX < 2

    ball.speed = INIT_BALL_SPEED
    ball.directionX = checkIfBallInitialDirectionIsOutOfRange ? ballInitialDirectionX + INCREMENT_RANGE : ballInitialDirectionX;
    ball.directionY = ballInitialDirectionY
}


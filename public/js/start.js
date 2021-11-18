const MIN_STARTING_POINT = -10;
const MAX_STARTING_POINT = 10;
const INIT_BALL_SPEED = 15;
const INCREMENT_RANGE = 5
const OUT_RANGE_ONE = -2
const OUT_RANGE_TWO = 2
const BALL_SIZE = 50


export function startBallPosition(app){
    const MIDDLE_OF_COURT_WIDTH = app.width / 2
    const MIDDLE_OF_COURT_HEIGHT = app.height / 2

    const ball = app.getNode("red-box")
    ball.x = MIDDLE_OF_COURT_WIDTH
    ball.y = MIDDLE_OF_COURT_HEIGHT - BALL_SIZE / 2

    let ballInitialDirectionX = Math.random() * (MAX_STARTING_POINT - MIN_STARTING_POINT) + MIN_STARTING_POINT 
    let ballInitialDirectionY = Math.random() * (MAX_STARTING_POINT - MIN_STARTING_POINT) + MIN_STARTING_POINT 

    let checkIfBallInitialDirectionIsOutOfRange = ballInitialDirectionX > OUT_RANGE_ONE && ballInitialDirectionX < OUT_RANGE_TWO

    ball.speed = INIT_BALL_SPEED
    ball.directionX = checkIfBallInitialDirectionIsOutOfRange ? ballInitialDirectionX + INCREMENT_RANGE : ballInitialDirectionX;
    ball.directionY = ballInitialDirectionY
}


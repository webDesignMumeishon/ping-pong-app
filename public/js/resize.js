import {app} from './app.js'

const MARGIN_BOTTOM_HEIGHT = 5  
const PLAYER_PADDLE_WIDTH = 50

export function resize(e){
    let playerTwoPosition = app.getNode("player-two")
    let canvas = document.getElementById('canvas')
    let playerOneScorePosition = app.getNode("player-one-score")
    let playerTwoScorePosition = app.getNode("player-two-score")

    let heigth = window.innerHeight;
    let width = window.innerWidth;

    canvas.width = width
    canvas.height = heigth - MARGIN_BOTTOM_HEIGHT

    app.width = width
    app.height = heigth - MARGIN_BOTTOM_HEIGHT

	playerTwoPosition.x = app.width - PLAYER_PADDLE_WIDTH

    const scoreLocationVartically = app.height / 5
    const scoreLocationPlayerOneHorizontally = app.width / 4
    const scoreLocationPlayerTwoHorizontally = 3 * app.width / 4

    playerOneScorePosition.x = scoreLocationPlayerOneHorizontally
    playerOneScorePosition.y = scoreLocationVartically

    playerTwoScorePosition.x = scoreLocationPlayerTwoHorizontally
    playerTwoScorePosition.y = scoreLocationVartically

}

const playerPaddleWidth = 50
import {app} from './app.js'
const MARGIN_BOTTOM_HEIGHT = 5
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

	playerTwoPosition.x = app.width - playerPaddleWidth

    playerOneScorePosition.x = app.width / 4
    playerOneScorePosition.y = app.height / 5

    playerTwoScorePosition.x = 3 * app.width / 4
    playerTwoScorePosition.y = app.height / 5

}

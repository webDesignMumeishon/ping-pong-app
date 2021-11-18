const playerPaddleWidth = 50
import {app} from './app.js'

export function resize(e){
    let playerTwoPosition = app.getNode("player-two")
    let canvas = document.getElementById('canvas')

    let playerOneScorePosition = app.getNode("player-one-score")
    let playerTwoScorePosition = app.getNode("player-two-score")

    let heigth = window.innerHeight;
    let width = window.innerWidth;

    canvas.width = width
    canvas.heigth = heigth

    app.width = width
    app.heigth = heigth

	playerTwoPosition.x = app.width - playerPaddleWidth

    playerOneScorePosition.x = app.width / 4
    playerOneScorePosition.y = app.height / 5

    playerTwoScorePosition.x = 3 * app.width / 4
    playerTwoScorePosition.y = app.height / 5

}

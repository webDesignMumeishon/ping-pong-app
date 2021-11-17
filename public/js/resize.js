const playerPaddleWidth = 50
import {app} from './app.js'

export function resize(e){
    //setting up variables
    let playerTwoPosition = app.getNode("player-two")
    let canvas = document.getElementById('canvas')
    //scores variables
    let playerOneScorePosition = app.getNode("player-one-score")
    let playerTwoScorePosition = app.getNode("player-two-score")

    let heigth = window.innerHeight;
    let width = window.innerWidth;

    // update width and height of canvas
    canvas.width = width
    canvas.heigth = heigth

    // update width and height app
    app.width = width
    app.heigth = heigth

    // update width of player-two
	playerTwoPosition.x = app.width - playerPaddleWidth

    // update score of player-one
    playerOneScorePosition.x = app.width / 4
    playerOneScorePosition.y = app.height / 5

    // update score of player-two
    playerTwoScorePosition.x = 3 * app.width / 4
    playerTwoScorePosition.y = app.height / 5

}

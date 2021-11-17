const playerPaddleWidth = 50

function resize(e){
    //setting up variables
    let playerTwoPosition = this.getNode("player-two")
    let canvas = document.getElementById('canvas')
    //scores variables
    let playerOneScorePosition = this.getNode("player-one-score")
    let playerTwoScorePosition = this.getNode("player-two-score")

    let heigth = window.innerHeight;
    let width = window.innerWidth;

    // update width and height of canvas
    canvas.width = width
    canvas.heigth = heigth

    // update width and height app
    this.width = width
    this.heigth = heigth

    // update width of player-two
	playerTwoPosition.x = this.width - playerPaddleWidth

    // update score of player-one
    playerOneScorePosition.x = this.width / 4
    playerOneScorePosition.y = this.height / 5

    // update score of player-two
    playerTwoScorePosition.x = 3 * this.width / 4
    playerTwoScorePosition.y = app.height / 5

}
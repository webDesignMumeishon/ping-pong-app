function resize(e){
    let heigth = window.innerHeight;
    let width = window.innerWidth;

    // update width and height of canvas
    let canvas = document.getElementById('canvas')
    canvas.width = width
    canvas.heigth = heigth

    // update width and height app
    this.width = width
    this.heigth = heigth

    // update width of player-two
	this.getNode("player-two").x = this.width - 50

    // update score of player-one
    this.getNode("player-one-score").x = this.width / 4
    this.getNode("player-one-score").x = this.height / 5

    // update score of player-one
    this.getNode("player-two-score").x = 3 * this.width / 4
    this.getNode("player-two-score").y = app.height / 5

}
const speedOfPaddle = 50


let playersMoves = function(e){
    // W
    if(e.keycode === 87 || e.which == 87){
        this.getNode('player-one').y += -speedOfPaddle
    }
    // S
    if(e.keycode === 83 || e.which == 83){
        this.getNode('player-one').y += speedOfPaddle
    }
    //Up
    if(e.keycode === 38 || e.which == 38){
        this.getNode('player-two').y += -speedOfPaddle
    }
    //Down
    if(e.keycode === 40 || e.which == 40){
        this.getNode('player-two').y += speedOfPaddle
    }
    // Space
    if(e.keycode === 32 || e.which == 32){
        console.log("SPACE", speedOfPaddle);
        // this.onInit()
    }
}



const speedOfPaddle = 50


let playersMoves = function(e){
    // W
    if(e.keycode === 87 || e.which == 87){
        this.getNode('player-one').y += -speedOfPaddle
    }
    // S
    else if(e.keycode === 83 || e.which == 83){
        this.getNode('player-one').y += speedOfPaddle
    }
    //Up
    else if(e.keycode === 38 || e.which == 38){
        this.getNode('player-two').y += -speedOfPaddle
    }
    //Down
    else if(e.keycode === 40 || e.which == 40){
        this.getNode('player-two').y += speedOfPaddle
    }
    // Space
    else if(e.keycode === 32 || e.which == 32){
        this.pause()
    }
    else if(e.keycode === 82 || e.which == 82){
        this.reset()
    }
    
}



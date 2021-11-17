import {app} from './app.js'

const speedOfPaddle = 50

export let playersKeyCommands = function(e){
    // W
    if(e.keycode === 87 || e.which == 87){
        app.getNode('player-one').y += -speedOfPaddle
    }
    // S
    else if(e.keycode === 83 || e.which == 83){
        app.getNode('player-one').y += speedOfPaddle
    }
    //Up
    else if(e.keycode === 38 || e.which == 38){
        app.getNode('player-two').y += -speedOfPaddle
    }
    //Down
    else if(e.keycode === 40 || e.which == 40){
        app.getNode('player-two').y += speedOfPaddle
    }
    // Space
    else if(e.keycode === 32 || e.which == 32){
        app.pause()
    }
    // Reset [r]
    else if(e.keycode === 82 || e.which == 82){
        app.reset()
    }
    
}



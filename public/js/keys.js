import {app} from './app.js'

const PADDLE_SPEED = 50

export let playersKeyCommands = function(e){
    // W
    if(e.keycode === 87 || e.which == 87){
        app.getNode('player-one').y += -PADDLE_SPEED
    }
    // S
    else if(e.keycode === 83 || e.which == 83){
        app.getNode('player-one').y += PADDLE_SPEED
    }
    //Up
    else if(e.keycode === 38 || e.which == 38){
        app.getNode('player-two').y += -PADDLE_SPEED
    }
    //Down
    else if(e.keycode === 40 || e.which == 40){
        app.getNode('player-two').y += PADDLE_SPEED
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



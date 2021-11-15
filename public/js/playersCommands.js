const speedOfPaddle = 10

let playersMoves = function(e){
    // W
    if(e.keycode === 87 || e.which == 87){
        console.log("W");
        this.getNode('player-one').y += -speedOfPaddle
    }
    // S
    if(e.keycode === 83 || e.which == 83){
        console.log("S");
        this.getNode('player-one').y += speedOfPaddle
    }
    //Up
    if(e.keycode === 38 || e.which == 38){
        console.log("UP");
        this.getNode('player-two').y += -speedOfPaddle

    }
    //Down
    if(e.keycode === 40 || e.which == 40){
        console.log("DOWN");
        this.getNode('player-two').y += speedOfPaddle
    }
}











// function(e){
//     // W
//     if(e.keycode === 87 || e.which == 87){
//         console.log("W");
//         nodeBinding.getNode('player-one').y += .5
//     }
//     // S
//     if(e.keycode === 83 || e.which == 83){
//         console.log("S");
//         nodeBinding.getNode('player-one').y += -.5

//     }
//     //Up
//     if(e.keycode === 38 || e.which == 38){
//         console.log("UP");
//     }
//     //Down
//     if(e.keycode === 40 || e.which == 40){
//         console.log("DOWN");
//     }
// }
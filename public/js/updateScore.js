import {app} from './app.js'

export function updatePlayerAndScore(player, playerScore){
	player.score += 1
    playerScore.text = player.score
}
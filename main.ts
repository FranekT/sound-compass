let deg = 0
let tempo = 0
basic.forever(function () {
    deg = input.compassHeading()
    if (deg > 180) {
        deg = 360 - deg
    }
    tempo = 1140 - deg * 6
    music.playMelody("C5 C C5 C C5 C C5 C ", tempo)
})

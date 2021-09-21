let deg = 0
basic.forever(function () {
    deg = input.compassHeading() + 180
    if (deg > 180) {
        deg = 360 - deg
    }
    music.ringTone(70 + deg * 30)
})

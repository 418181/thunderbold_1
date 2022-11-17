let bright = 0
let y = 0
let a = 0
let x = 2
let dx = 1
basic.forever(function () {
    basic.clearScreen()
    a = 0
    y = 0
    bright = 225
    if (x >= 4) {
        dx = -1
    } else if (x <= 0) {
        dx = 1
    }
    x += dx
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(x - dx * a, y, bright)
        a += 1
        bright += -50
    }
    basic.pause(300)
})

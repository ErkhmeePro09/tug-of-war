input.onButtonPressed(Button.A, function () {
    b += -0.2
})
input.onButtonPressed(Button.B, function () {
    b += 0.2
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let b = 0
let a = 2
basic.forever(function () {
    basic.clearScreen()
    led.plot(Math.round(b), 2)
    if (b < 0) {
        basic.showString("p1 wins")
    } else if (0 > b) {
        basic.clearScreen()
        basic.showString("p2 wins")
    }
})

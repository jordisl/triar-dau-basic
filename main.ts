let valordau = 0
input.onGesture(Gesture.Shake, function () {
    valordau = randint(1, 6)
    if (valordau == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (valordau == 2) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            `)
    }
    if (valordau == 3) {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . .
            `)
    }
    if (valordau == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    }
    if (valordau == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    }
    if (valordau == 6) {
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})

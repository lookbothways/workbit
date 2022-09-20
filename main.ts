input.onButtonPressed(Button.A, function () {
    sleep = 60000
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    for (let index = 0; index < 1; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # . . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # . . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # . .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # . . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # . . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # . .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # .
            `)
        basic.pause(sleep)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(sleep)
    }
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(sleep)
    basic.showNumber(Count)
    Count = Count + 1
})
input.onButtonPressed(Button.B, function () {
    Count = 0
})
let Count = 0
let sleep = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})

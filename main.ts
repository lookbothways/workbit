input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(60000)
        basic.showLeds(`
            # . . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(60000)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.pause(60000)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            . . . . .
            `)
        basic.pause(60000)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
        basic.pause(60000)
    }
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    basic.showNumber(Count)
    Count = Count + 1
})
let Count = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
	
})

input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # # . .
            # # # # .
            # # # # #
            `)
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

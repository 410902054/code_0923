basic.forever(function () {
    basic.showNumber(0)
    basic.pause(200)
    basic.clearScreen()
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showString("tortoise")
    basic.showIcon(IconNames.Heart)
})

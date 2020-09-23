def on_forever():
    basic.show_number(0)
    basic.pause(200)
    basic.clear_screen()
    basic.pause(200)
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
    basic.show_string("tortoise")
basic.forever(on_forever)

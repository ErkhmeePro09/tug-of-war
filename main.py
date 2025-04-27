def on_button_pressed_a():
    basic.show_leds("""
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        # # . # #
        """)
    basic.pause(3000)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

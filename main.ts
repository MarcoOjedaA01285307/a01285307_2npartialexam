let number = 0
let counter_babyboom = 0
let counter_xgeneration = 0
let counter_millenial = 0
let counter_zgeneration = 0
let y = 0
let y_2 = 0
let random_number = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 20; index++) {
        number += randint(1949, 2010)
        basic.showNumber(number)
        if (number <= 1949 && number >= 1968) {
            basic.showString("baby boom")
            counter_babyboom += 1
        } else if (number <= 1969 && number >= 1980) {
            basic.showString("x generation")
            counter_xgeneration += 1
        } else if (number <= 1981 && number >= 1993) {
            basic.showString("millenial")
            counter_millenial += 1
        } else if (number <= 1994 && number >= 2010) {
            basic.showString("z generation ")
            counter_zgeneration += 1
        }
    }
    basic.showString("average year of birth ")
    basic.showNumber(number)
    basic.showString("millenial")
    basic.showNumber(counter_millenial)
    basic.showString("baby boomers ")
    basic.showNumber(counter_babyboom)
})
input.onButtonPressed(Button.B, function () {
    y = 0
    y_2 = 4
    while (y >= 0) {
        led.plot(y, y_2)
        basic.pause(200)
        y += 0
        y_2 += -1
        basic.pause(200)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    for (let i = 0; i <= 5; i++) {
        basic.showNumber(i)
        basic.pause(100)
    }
    basic.clearScreen()
    random_number = randint(0, 6)
    basic.showNumber(random_number)
    if (random_number == 6 || random_number == 3) {
        basic.showString("win")
        music.playMelody("F - - F - F - - ", 120)
    } else if (random_number < 6 && random_number < 3) {
        basic.showString("lose")
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    basic.clearScreen()
})
basic.forever(function () {
	
})

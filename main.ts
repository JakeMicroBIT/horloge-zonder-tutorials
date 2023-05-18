input.onButtonPressed(Button.A, function () {
    basic.showString("" + uur + ":" + min)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
	
})
let min = 0
let uur = 0
uur = 13
min = 2
let sec = 10
let millisec = 0
basic.forever(function () {
    millisec += input.runningTime() + 1
    if (millisec == 1000) {
        sec += 1
        millisec = 0
    }
    if (sec == 60) {
        uur += 1
        sec = 0
    }
    if (uur == 24) {
        uur = 0
    }
})

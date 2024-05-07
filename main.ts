let counter = 0
input.onButtonPressed(Button.A, function () {
    counter += 2
})
input.onButtonPressed(Button.AB, function () {
    counter = 0
})
input.onButtonPressed(Button.B, function () {
    counter += -2
})
basic.forever(function () {
    basic.showNumber(counter)
})

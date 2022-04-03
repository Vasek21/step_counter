input.onButtonPressed(Button.A, function () {
    basic.showNumber(steps)
})
input.onButtonPressed(Button.B, function () {
    steps = 0
})
input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
steps = 0

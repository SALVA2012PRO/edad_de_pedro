let Nace_pedro = 2016
let Edad = 4
let Duracion_año = 365
basic.forever(function () {
    basic.showNumber(Edad)
    basic.clearScreen()
    basic.pause(Duracion_año)
    basic.showNumber(Nace_pedro)
    Edad += 1
    Nace_pedro += 1
})

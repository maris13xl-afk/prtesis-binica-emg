basic.forever(function () {
	// Leer señal EMG en pin P1
    let emg = pins.analogReadPin(AnalogPin.P1)

    // Si la señal es mayor a 500 cerrar el dedo
    if (emg > 500) {
        pins.servoWritePin(AnalogPin.P0, 90)   // mover servo a 90 grados
    } else {
        pins.servoWritePin(AnalogPin.P0, 0)    // mover servo a 0 grados 
    }
})

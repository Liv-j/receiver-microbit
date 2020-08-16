// covert morse code into normal character and show it
function Reciever (recieverstring: string) {
    basic.showString("" + (decodeMorse(recieverstring)))
    radio.sendString(recieverstring)
}
radio.onReceivedString(function (receivedString) {
    Reciever(receivedString)
})
// turn morse code into a letter or number
function decodeMorse (morseCode: string) {
    // morse code array
    Morse_Code = ["-----", ".----", "..---", "...--", "....-", ".....", "-....", "--...", "---..", "----.", ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    // normal characters array
    Morse_Decode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    i = Morse_Code.indexOf(morseCode)
    // checks if message sent is a morse code
    if (i != -1) {
        decodestring = Morse_Decode[i]
        verifiedstring = morseCode
        return decodestring
    } else {
        // if it's not a morse code
        decodestring = "-1"
        return "Not a Morse Code"
    }
}
let verifiedstring = ""
let decodestring = ""
let i = 0
let Morse_Decode: string[] = []
let Morse_Code: string[] = []
let statemachine = 1
radio.setGroup(1)
basic.showString(control.deviceName())

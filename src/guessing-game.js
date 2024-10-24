class GuessingGame {
    constructor() {
        this.minVal = null;
        this.maxVal = null;
        this.currentGuess = null;
    }

    setRange(min, max) {
        this.minVal = min;
        this.maxVal = max;
    }

    guess() {

        this.currentGuess = Math.ceil((this.minVal + this.maxVal) / 2);
        return this.currentGuess;
    }

    lower() {

        this.maxVal = this.currentGuess;
    }

    greater() {

        this.minVal = this.currentGuess;
    }
}

module.exports = GuessingGame;

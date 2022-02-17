
export class BorderTracker {
    constructor() {
        this.index = 0;
    }


    setNextWrong() {
        let icons = document.getElementById('icons').children;
        if (this.index >= 0 && this.index < icons.length) {
            icons[this.index].classList.remove('sm-icon-noguess');
            icons[this.index].classList.add('sm-icon-wrongguess');

            ++this.index;
        }
    }

    setNextRight() {
        let icons = document.getElementById('icons').children;
        if (this.index >= 0 && this.index < icons.length) {
            icons[this.index].classList.remove('sm-icon-noguess');
            icons[this.index].classList.add('sm-icon-correctguess');

            ++this.index;
        }
    }

    setAnswerBoxInvalid() {
        let box = document.getElementById('pGuess');
        box.classList.add('guess-box-incorrect');
    }

    setAnswerBoxValid() {
        let box = document.getElementById('pGuess');
        box.classList.remove('guess-box-incorrect');
    }
}

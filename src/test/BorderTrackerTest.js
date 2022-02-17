import { BorderTracker } from '../frontend/BorderTracker.js';

//set first 4 image borders red, set answer box invalid, set last image green, set answer box valid
let bt = new BorderTracker();
setTimeout(() => { bt.setAnswerBoxInvalid() }, 2000);
setTimeout(() => { bt.setAnswerBoxValid() }, 4000);
setTimeout(() => { bt.setNextWrong() }, 2000);
setTimeout(() => { bt.setNextWrong() }, 3000);
setTimeout(() => { bt.setNextWrong() }, 4000);
setTimeout(() => { bt.setNextWrong() }, 5000);
setTimeout(() => { bt.setNextRight() }, 6000);

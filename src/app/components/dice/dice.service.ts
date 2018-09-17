import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';

@Injectable()
export class DiceService {
  rangeLow = 1;
  rangeHigh = 100;

  diceRoll = new BehaviorSubject<number>(null);
  diceRollList = new BehaviorSubject<number[]>([]);
  diceRollObserve = this.diceRoll.asObservable();
  diceRollListObserve = this.diceRollList.asObservable();


  updateDiceRoll(newDiceRoll) {
    this.diceRoll.next(newDiceRoll);
  }

  updateDiceRollList(newDiceRollList, diceRoll) {
    if (newDiceRollList.length === 5) {
      newDiceRollList.shift();
    }
    newDiceRollList.push(diceRoll);
    this.diceRollList.next(newDiceRollList);
  }

  rollDice(newDiceRollList) {
    const diceRoll = Math.floor(this.rangeLow + Math.random() * (this.rangeHigh + 1 - this.rangeLow));
    this.updateDiceRoll(diceRoll);
    this.updateDiceRollList(newDiceRollList, diceRoll);
  }
}

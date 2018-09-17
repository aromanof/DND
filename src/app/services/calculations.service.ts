import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CalculationsService {
  rangeLow = 1;
  rangeHigh = 100;

  diceRoll = new BehaviorSubject<number>(null);
  diceRollList = new BehaviorSubject<number[]>([]);

  diceRollObserve = this.diceRoll.asObservable();
  diceRollListObserve = this.diceRollList.asObservable();

  constructor() {
  }

  updateDiceRoll(newDiceRoll) {
    this.diceRoll.next(newDiceRoll);
  }


  calculateHit(playerLevel, agility, enemyLevel, distance) {
    const hit = 45 + (4 * enemyLevel + distance * 4) - (agility + (playerLevel * 3));
    return hit >= 95 ? 95 : hit;
  }

  calculateCriticalHit(playerLevel, agility, enemyLevel, distance) {
    const criticalHit = 90 + (4 * enemyLevel + distance * 4) - (agility + (playerLevel * 3));
    return criticalHit >= 100 ? 100 : criticalHit;
  }

  calculateDamage(strength, weaponDamage, diceValue) {
    return (weaponDamage + (strength * diceValue) / 60);
  }

  calculateSpellCast(wisdom, spellLevel) {
    return (20 * spellLevel) - (2 * wisdom);
  }

  calculateSpellCriticalCast(wisdom, spellLevel) {
    return (41 * spellLevel) - (2 * wisdom);
  }

  calculateSpellDamage(intelligence, spellDamage, diceValue) {
    return spellDamage + ((spellDamage / 100) * (intelligence / 3 + ((diceValue + (intelligence * 2)) / 3)));
  }

  calculateCriticalSpellDamage(intelligence, spellDamage, diceValue) {
    return spellDamage + ((spellDamage / 100) * (intelligence / 3 + ((diceValue * 1.9 + (intelligence * 3)) / 3)));
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

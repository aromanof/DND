import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {
  constructor() {
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
}

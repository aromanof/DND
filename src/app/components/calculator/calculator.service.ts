import { Injectable } from '@angular/core';

/**
 * @deprecated since version 2.0
 */
@Injectable()
export class CalculatorService {
  constructor() {
  }

  calculateHitChance(playerLevel, agility, enemyLevel, distance) {
    const hit = 45 + (4 * enemyLevel + distance * 4) - (agility + (playerLevel * 3));
    return hit >= 95 ? 95 : hit;
  }

  calculateCriticalHitChance(playerLevel, agility, enemyLevel, distance) {
    const criticalHit = 90 + (4 * enemyLevel + distance * 4) - (agility + (playerLevel * 3));
    return criticalHit >= 100 ? 100 : criticalHit;
  }

  calculatePhysicalDamage(strength, weaponDamage, diceValue) {
    return (weaponDamage + (strength * diceValue) / 60);
  }

  calculateSpellCastChance(wisdom, spellLevel) {
    return (20 * spellLevel) - (2 * wisdom);
  }

  calculateSpellCriticalCastChance(wisdom, spellLevel) {
    return (41 * spellLevel) - (2 * wisdom);
  }

  calculateSpellDamage(intelligence, spellDamage, diceValue) {
    return spellDamage + ((spellDamage / 100) * (intelligence / 3 + ((diceValue + (intelligence * 2)) / 3)));
  }

  calculateCriticalSpellDamage(intelligence, spellDamage, diceValue) {
    return spellDamage + ((spellDamage / 100) * (intelligence / 3 + ((diceValue * 1.9 + (intelligence * 3)) / 3)));
  }
}

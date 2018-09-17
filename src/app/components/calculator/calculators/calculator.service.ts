import { Injectable } from '@angular/core';
import { PhysicalHitChanceFactors } from './factors/physical-hit-chance-factor.interface';
import { PhysicalDamageFactors } from './factors/physical-damage-factors.interface';
import { SpellCastChance } from './factors/spell-cast-chance.interface';
import { SpellDamageFactors } from './factors/spell-damage-factors.interface';

@Injectable()
export class CalculatorService {
  constructor() {
  }

  calculatePhysicalHitChance(factors: PhysicalHitChanceFactors) {
    const hit = 45 + (4 * factors.enemyLevel + factors.distance * 4) - (factors.agility + (factors.playerLevel * 3));
    return hit >= 95 ? 95 : hit;
  }

  calculateCriticalPhysicalHitChance(factors: PhysicalHitChanceFactors) {
    const criticalHit = 90 + (4 * factors.enemyLevel + factors.distance * 4) - (factors.agility + (factors.playerLevel * 3));
    return criticalHit >= 100 ? 100 : criticalHit;
  }

  calculatePhysicalDamage(factors: PhysicalDamageFactors) {
    return (factors.affectingSpec2 + (factors.affectingSpec * factors.diceValue) / 60);
  }

  calculateSpellCastChance(factors: SpellCastChance) {
    return (20 * factors.spellLevel) - (2 * factors.wisdom);
  }

  calculateSpellCriticalCastChance(factors: SpellCastChance) {
    return (41 * factors.spellLevel) - (2 * factors.wisdom);
  }

  calculateSpellDamage(factors: SpellDamageFactors) {
    return factors.spellDamage + ((factors.spellDamage / 100) * (factors.intelligence / 3 + ((factors.diceValue + (factors.intelligence * 2)) / 3)));
  }

  calculateCriticalSpellDamage(factors: SpellDamageFactors) {
    return factors.spellDamage + ((factors.spellDamage / 100) * (factors.intelligence / 3 + ((factors.diceValue * 1.9 + (factors.intelligence * 3)) / 3)));
  }
}

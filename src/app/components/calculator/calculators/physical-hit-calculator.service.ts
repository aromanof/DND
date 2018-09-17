import { Injectable } from '@angular/core';
import { CalculatorInterface, Mode } from './calculator.interface';
import { PhysicalHitChanceFactors } from './factors/physical-hit-chance-factor.interface';
import { PhysicalDamageFactors } from './factors/physical-damage-factors.interface';

@Injectable()
export class PhysicalHitCalculatorService implements CalculatorInterface<PhysicalHitChanceFactors, PhysicalDamageFactors> {
  readonly chanceConfig = {
    default: {
      hitCoefficient: 45,
      maxDice: 95,
      multiplier: 1,
    },
    critical: {
      hitCoefficient: 90,
      maxDice: 100,
      multiplier: 2,
    }
  };

  getModeSuccessChance(factors: PhysicalHitChanceFactors, mode: Mode) {
    const config = this.chanceConfig[mode];
    const criticalHit = config.hitCoefficient +
      (4 * factors.enemyLevel + factors.distance * 4) -
      (factors.agility + (factors.playerLevel * 3));
    return criticalHit >= config.maxDice ? config.maxDice : criticalHit;
  }

  getModeDamage(factors: PhysicalDamageFactors, mode: Mode) {
    const config = this.chanceConfig[mode];
    return (factors.weaponDamage + (factors.strength * factors.diceValue) / 60) * config.multiplier;
  }

  getSuccessChance(factors: PhysicalHitChanceFactors) { // ugly
    return {
      default: this.getModeSuccessChance(factors, 'default'),
      critical: this.getModeSuccessChance(factors, 'critical')
    };
  }

  getDamage(factors: PhysicalDamageFactors) { // ugly
    return {
      default: this.getModeDamage(factors, 'default'),
      critical: this.getModeDamage(factors, 'critical')
    };
  }
}

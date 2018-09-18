import { Injectable } from '@angular/core';
import { BasicCalculator, Mode } from './basic-calculator';
import { PhysicalHitChanceFactors } from './factors/physical-hit-chance-factor.interface';
import { PhysicalDamageFactors } from './factors/physical-damage-factors.interface';

@Injectable()
export class PhysicalHitCalculatorService extends BasicCalculator<PhysicalHitChanceFactors, PhysicalDamageFactors> {
  protected readonly config = {
    default: {
      chanceMultiplier: 45,
      damageMultiplier: 1,
      maxDice: 95,
    },
    critical: {
      chanceMultiplier: 90,
      damageMultiplier: 2,
      maxDice: 100,
    }
  };

  getModeSuccessChance(factors: PhysicalHitChanceFactors, mode: Mode) {
    const config = this.config[mode];
    const enemyCoefficient = 4 * factors.enemyLevel + factors.distance * 4;
    const heroCoefficient = factors.agility + (factors.playerLevel * 3);
    const criticalHit = config.chanceMultiplier + enemyCoefficient - heroCoefficient;
    return criticalHit >= config.maxDice ? config.maxDice : criticalHit;
  }

  getModeDamage(factors: PhysicalDamageFactors, mode: Mode) {
    const config = this.config[mode];
    return (factors.weaponDamage + (factors.strength * factors.diceValue) / 60) * config.damageMultiplier;
  }
}

import { Injectable } from '@angular/core';
import { CalculatorInterface, Mode } from './calculator.interface';
import { SpellDamageFactors } from './factors/spell-damage-factors.interface';
import { SpellCastChance } from './factors/spell-cast-chance.interface';

@Injectable()
export class SpellCalculatorService implements CalculatorInterface<SpellCastChance, SpellDamageFactors> {
  readonly chanceConfig = {
    default: {
      spellCoefficient: 20,
      multiplier: 1,
    },
    critical: {
      spellCoefficient: 41,
      multiplier: 1.9,
    }
  };

  getModeSuccessChance(factors: SpellCastChance, mode: Mode) {
    const config = this.chanceConfig[mode];
    return config.spellCoefficient * factors.spellLevel - 2 * factors.wisdom;
  }

  getModeDamage(factors: SpellDamageFactors, mode: Mode) {
    const config = this.chanceConfig[mode];
    return factors.spellDamage + ((factors.spellDamage / 100) * (factors.intelligence / 3 +
      ((factors.diceValue * config.multiplier + (factors.intelligence * 2)) / 3)));
  }

  getSuccessChance(factors: SpellCastChance) { // ugly
    return {
      default: this.getModeSuccessChance(factors, 'default'),
      critical: this.getModeSuccessChance(factors, 'critical')
    };
  }

  getDamage(factors: SpellDamageFactors) { // ugly
    return {
      default: this.getModeDamage(factors, 'default'),
      critical: this.getModeDamage(factors, 'critical')
    };
  }
}

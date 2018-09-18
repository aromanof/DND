import { Injectable } from '@angular/core';
import { BasicCalculator, Mode } from './basic-calculator';
import { SpellDamageFactors } from './factors/spell-damage-factors.interface';
import { SpellCastChance } from './factors/spell-cast-chance.interface';

@Injectable()
export class SpellCalculatorService extends BasicCalculator<SpellCastChance, SpellDamageFactors> {
  protected readonly config = {
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
    const config = this.config[mode];
    return config.spellCoefficient * factors.spellLevel - 2 * factors.wisdom;
  }

  getModeDamage(factors: SpellDamageFactors, mode: Mode) {
    const config = this.config[mode];
    return factors.spellDamage + ((factors.spellDamage / 100) * (factors.intelligence / 3 +
      ((factors.diceValue * config.multiplier + (factors.intelligence * 2)) / 3)));
  }
}

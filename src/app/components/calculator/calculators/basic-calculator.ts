export interface CalculationsResult<T = number> {
  default: T;
  critical: T;
}

interface BaseConfig {
  multiplier: number;
}

type CalculatorConfig = CalculationsResult<BaseConfig>;

export type Mode = 'default' | 'critical';

export abstract class BasicCalculator<ChanceFactors, DamageFactors> {
  protected readonly abstract config: CalculatorConfig;

  abstract getModeSuccessChance(factors: ChanceFactors, mode: Mode): number;

  abstract getModeDamage(factors: DamageFactors, mode: Mode): number;

  getSuccessChance(factors: ChanceFactors): CalculationsResult {
    return {
      default: this.getModeSuccessChance(factors, 'default'),
      critical: this.getModeSuccessChance(factors, 'critical')
    };
  }

  getDamage(factors: DamageFactors): CalculationsResult {
    return {
      default: this.getModeDamage(factors, 'default'),
      critical: this.getModeDamage(factors, 'critical')
    };
  }
}

export interface CalculationsResult<T = number> {
  default: T;
  critical: T;
}

interface BaseChanceConfig {
  multiplier: number;
}
type ChanceConfig = CalculationsResult<BaseChanceConfig>;

export type Mode = 'default' | 'critical';

export interface CalculatorInterface<ChanceFactors, DamageFactors> {
  // chanceConfig must be protected in ideal world :(
  // https://github.com/Microsoft/TypeScript/issues/3854
  readonly chanceConfig: ChanceConfig;

  getModeSuccessChance(factors: ChanceFactors, mode: Mode): number;

  getModeDamage(factors: DamageFactors, mode: Mode): number;

  // TODO: refactor to template method pattern
  // https://github.com/gztchan/design-patterns-in-typescript/tree/master/template-method

  getSuccessChance(factors: ChanceFactors): CalculationsResult;

  getDamage(factors: DamageFactors): CalculationsResult;
}

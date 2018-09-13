import { Injectable } from '@angular/core';

@Injectable()
export class CalculationsService {
  phisicalHit: number;
  criticalPhisicalHit: number;
  phisicalDamage: number;
  spellHit: number;
  spellCriticalHit: number;
  spellDamage: number;
  spellCriticalDamage: number;

  constructor() { }

  calculateHit(playerLevel, agility, enemyLevel, distance){
    const hit = 45 + (4 * enemyLevel + distance * 4) - (agility + (playerLevel * 3));
    hit >= 95 ? this.phisicalHit = 95 : this.phisicalHit = hit;
    return this.phisicalHit;
  }

  calculateCriticalHit(playerLevel, agility, enemyLevel, distance){
    const criticalHit = 90 + (4 * enemyLevel + distance * 4) - (agility + (playerLevel * 3));
    criticalHit >= 100 ? this.criticalPhisicalHit = 100 : this.criticalPhisicalHit = criticalHit;
    return this.criticalPhisicalHit;
  }

  calculateDamage(strength, weaponDamage, diceValue){
    this.phisicalDamage = (weaponDamage + (strength * diceValue) / 60);
    return this.phisicalDamage;
  }

  calculateSpellCast(wisdom, spellLevel){
    this.spellHit = (20 * spellLevel) - (2 * wisdom);
    return this.spellHit;
  }

  calculateSpellCriticalCast(wisdom, spellLevel){
    this.spellCriticalHit = (41 * spellLevel) - (2 * wisdom);
    return this.spellCriticalHit;
  }

  calculateSpellDamage(intelligence, spellDamage, diceValue){
    this.spellDamage = spellDamage + ((spellDamage/100)*(intelligence/3 + ((diceValue + (intelligence * 2))/3)));
    return this.spellDamage;
  }

  calculateCriticalSpellDamage(intelligence, spellDamage, diceValue){
    this.spellCriticalDamage = spellDamage + ((spellDamage/100)*(intelligence/3 + ((diceValue * 1.9 + (intelligence * 3))/3)));
    return this.spellCriticalDamage;
  }
}

import { Component, OnInit } from '@angular/core';
import { CalculatorService } from './calculators/calculator.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpellDamageFactors } from './calculators/factors/spell-damage-factors.interface';
import { SpellCastChance } from './calculators/factors/spell-cast-chance.interface';
import { PhysicalDamageFactors } from './calculators/factors/physical-damage-factors.interface';
import { PhysicalHitChanceFactors } from './calculators/factors/physical-hit-chance-factor.interface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {
  // playerLevel: number;
  // agility: number;
  // enemyLevel: number;
  // distance: number;
  // strength: number;
  // weaponDamage: number;
  // phisicalDiceValue: number;
  // wisdom: number;
  // spellLevel: number;
  // intelligence: number;
  // //spellDamage: number;
  // spellDiceValue: number;

  physicalHitForm: FormGroup;
  physicalDamageForm: FormGroup;
  spellHitForm: FormGroup;
  spellDamageForm: FormGroup;


  physicalHit: number;
  physicalCriticalHit: number;
  physicalDamage: number;
  spellCast: number;
  spellCriticalCast: number;
  spellDamage: number;
  spellCriticalDamage: number;

  constructor(private calculator: CalculatorService, private fb: FormBuilder) {
    this.physicalHitForm = fb.group({
      'playerLevel': [null, Validators.required],
      'agility': [null, Validators.required],
      'enemyLevel': [null, Validators.required],
      'distance': [null, Validators.required]
    });
    this.physicalDamageForm = fb.group({
      'strength': [null, Validators.required],
      'weaponDamage': [null, Validators.required],
      'phisicalDiceValue': [null, Validators.required]
    });
    this.spellHitForm = fb.group({
      'wisdom': [null, Validators.required],
      'spellLevel': [null, Validators.required]
    });
    this.spellDamageForm = fb.group({
      'intelligence': [null, Validators.required],
      'spellDamage': [null, Validators.required],
      'spellDiceValue': [null, Validators.required]
    });
  }

  ngOnInit() {

  }

  calculatePhysicalHit(factors: PhysicalHitChanceFactors) {
    this.physicalHit = this.calculator.calculatePhysicalHitChance(factors);
    this.physicalCriticalHit = this.calculator.calculateCriticalPhysicalHitChance(factors);
  }

  calculatePhysicalDamage(factors: PhysicalDamageFactors) {
    this.physicalDamage = this.calculator.calculatePhysicalDamage(factors);
  }

  calculateSpellHit(factors: SpellCastChance) {
    this.spellCast = this.calculator.calculateSpellCastChance(factors);
    this.spellCriticalCast = this.calculator.calculateSpellCriticalCastChance(factors);
  }

  calculateSpellDamage(factors: SpellDamageFactors) {
    this.spellDamage = this.calculator.calculateSpellDamage(factors);
    this.spellCriticalDamage = this.calculator.calculateCriticalSpellDamage(factors);
  }


}

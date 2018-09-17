import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpellDamageFactors } from './calculators/factors/spell-damage-factors.interface';
import { SpellCastChance } from './calculators/factors/spell-cast-chance.interface';
import { PhysicalDamageFactors } from './calculators/factors/physical-damage-factors.interface';
import { PhysicalHitChanceFactors } from './calculators/factors/physical-hit-chance-factor.interface';
import { PhysicalHitCalculatorService } from './calculators/physical-hit-calculator.service';
import { SpellCalculatorService } from './calculators/spell-calculator.service';
import { CalculationsResult } from './calculators/calculator.interface';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent implements OnInit {
  physicalHitForm: FormGroup;
  physicalDamageForm: FormGroup;
  spellHitForm: FormGroup;
  spellDamageForm: FormGroup;


  physicalHitChance: CalculationsResult;
  physicalDamage: CalculationsResult;
  spellCastChance: CalculationsResult;
  spellDamage: CalculationsResult;

  constructor(private fb: FormBuilder,
              private physicalHitCalculatorService: PhysicalHitCalculatorService,
              private spellCalculatorService: SpellCalculatorService) {
    this.physicalHitForm = fb.group({
      'playerLevel': [null, Validators.required],
      'agility': [null, Validators.required],
      'enemyLevel': [null, Validators.required],
      'distance': [null, Validators.required]
    });
    this.physicalDamageForm = fb.group({
      'strength': [null, Validators.required],
      'weaponDamage': [null, Validators.required],
      'diceValue': [null, Validators.required]
    });
    this.spellHitForm = fb.group({
      'wisdom': [null, Validators.required],
      'spellLevel': [null, Validators.required]
    });
    this.spellDamageForm = fb.group({
      'intelligence': [null, Validators.required],
      'spellDamage': [null, Validators.required],
      'diceValue': [null, Validators.required]
    });
  }

  ngOnInit() {

  }

  calculatePhysicalHit(factors: PhysicalHitChanceFactors) {
    this.physicalHitChance = this.physicalHitCalculatorService.getSuccessChance(factors);
  }

  calculatePhysicalDamage(factors: PhysicalDamageFactors) {
    this.physicalDamage = this.physicalHitCalculatorService.getDamage(factors);
  }

  calculateSpellHit(factors: SpellCastChance) {
    this.spellCastChance = this.spellCalculatorService.getSuccessChance(factors);
  }

  calculateSpellDamage(factors: SpellDamageFactors) {
    this.spellDamage = this.spellCalculatorService.getDamage(factors);
  }


}

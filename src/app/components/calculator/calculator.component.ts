import { Component, OnInit } from '@angular/core';
import { CalculationsService } from "../../services/calculations.service";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

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

  phisicalHitForm: FormGroup;
  phisicalDamageForm: FormGroup;
  spellHitForm: FormGroup;
  spellDamageForm: FormGroup;


  phisicalHit: number;
  phisicalCriticalHit: number;
  phisicalDamage: number;
  spellCast: number;
  spellCriticalCast: number;
  spellDamage: number;

  constructor(private calculations: CalculationsService, private fb: FormBuilder) { 
    this.phisicalHitForm = fb.group({
      'playerLevel': [null, Validators.required],
      'agility': [null, Validators.required],
      'enemyLevel': [null, Validators.required],
      'distance': [null, Validators.required]
    });
    this.phisicalDamageForm = fb.group({
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
  calculatePhisicalHit(inputForm){
    this.phisicalHit = this.calculations.calculateHit(parseInt(inputForm.playerLevel), parseInt(inputForm.agility), parseInt(inputForm.enemyLevel), parseInt(inputForm.distance));
    this.phisicalCriticalHit = this.calculations.calculateCriticalHit(parseInt(inputForm.playerLevel), parseInt(inputForm.agility), parseInt(inputForm.enemyLevel), parseInt(inputForm.distance));
  }
  calculatePhisicalDamage(inputForm){
    this.phisicalDamage =  this.calculations.calculateDamage(parseInt(inputForm.strength), parseInt(inputForm.weaponDamage), parseInt(inputForm.phisicalDiceValue));
  }
  calculateSpellHit(inputForm){
    this.spellCast =  this.calculations.calculateSpellCast(parseInt(inputForm.wisdom), parseInt(inputForm.spellLevel));
    this.spellCriticalCast = this.calculations.calculateSpellCriticalCast(parseInt(inputForm.wisdom), parseInt(inputForm.spellLevel));
  }
  calculateSpellDamage(inputForm){
    this.spellDamage = this.calculations.calculateSpellDamage(parseInt(inputForm.intelligence), parseInt(inputForm.spellDamage), parseInt(inputForm.spellDiceValue));
  }


}

import { Component, OnInit } from '@angular/core';
import { CalculationsService } from '../../services/calculations.service';

@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.less']
})
export class DiceComponent implements OnInit {
  diceRoll: number;
  diceRollList: Array<number> = [];

  private diceRollSubscription;
  private diceRollListSubscription;

  constructor(private calculationsService: CalculationsService) {
  }

  ngOnInit() {
    this.diceRollSubscription = this.calculationsService.diceRollObserve
      .subscribe(dice => this.diceRoll = dice);

    this.diceRollListSubscription = this.calculationsService.diceRollListObserve
      .subscribe(diceRollList => this.diceRollList = diceRollList);
  }

  rollDice() {
    this.calculationsService.rollDice(this.diceRollList);
  }

}

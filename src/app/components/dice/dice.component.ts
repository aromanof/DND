import { Component, OnInit } from '@angular/core';
import { DiceService } from './dice.service';

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

  constructor(public diceService: DiceService) {
  }

  ngOnInit() {
    this.diceRollSubscription = this.diceService.diceRollObserve
      .subscribe(dice => this.diceRoll = dice);

    this.diceRollListSubscription = this.diceService.diceRollListObserve
      .subscribe(diceRollList => this.diceRollList = diceRollList);
  }

  rollDice() {
    this.diceService.rollDice(this.diceRollList);
  }

}

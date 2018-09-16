import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './components/calculator/calculator.component';
import { DiceComponent } from './components/dice/dice.component';


const routes: Routes = [
  {path: "", component: CalculatorComponent},
  {path: "dice", component: DiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents = [CalculatorComponent, DiceComponent];

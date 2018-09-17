import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routerComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { DiceService } from './components/dice/dice.service';
import { PhysicalHitCalculatorService } from './components/calculator/calculators/physical-hit-calculator.service';
import { SpellCalculatorService } from './components/calculator/calculators/spell-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routerComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DiceService, PhysicalHitCalculatorService, SpellCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

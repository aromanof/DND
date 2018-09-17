import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule, routerComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { CalculatorService } from './components/calculator/calculator.service';
import { HeaderComponent } from './components/header/header.component';
import { DiceService } from './components/dice/dice.service';

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
  providers: [CalculatorService, DiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

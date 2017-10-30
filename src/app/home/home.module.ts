import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { MatRadioModule } from '@angular/material';
import { WalletCardComponent } from '../components/wallet-card/wallet-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatRadioModule
  ],
  declarations: [
    HomeComponent,
    WalletCardComponent,
  ]
})
export class HomeModule { }
import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { MatRadioModule } from '@angular/material';
import { HomeComponent } from './home.component';
import { WalletCardComponent } from '../components/wallet-card/wallet-card.component';

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterModule, HomeRoutingModule, MatRadioModule ],
      declarations: [
        HomeComponent,
        WalletCardComponent
      ],
    }).compileComponents();
  }));
  it('should create the home', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.debugElement.componentInstance;
    expect(home).toBeTruthy();
  }));
  it('should have mat-radio-group', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const radioGroup = fixture.debugElement.query(By.css('mat-radio-group'));
    expect(radioGroup).toBeTruthy();
  }));
  it('should have ff-wallet-card', async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const walletCard = fixture.debugElement.query(By.css('ff-wallet-card'));
    expect(walletCard).toBeTruthy();
  }));
});

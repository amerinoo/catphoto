import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { DailyComponent } from './components/modes/daily/daily.component';
import { PartyComponent } from './components/modes/party/party.component';
import { SoloComponent } from './components/modes/solo/solo.component';
import { FormsModule } from '@angular/forms';
import { GameReviewComponent } from './components/game-review/game-review.component';
import { RoundComponent } from './components/game-review/round/round.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SoloComponent,
    PartyComponent,
    DailyComponent,
    GameReviewComponent,
    RoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

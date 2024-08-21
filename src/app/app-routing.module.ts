import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DailyComponent } from './components/modes/daily/daily.component';
import { PartyComponent } from './components/modes/party/party.component';
import { SoloComponent } from './components/modes/solo/solo.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'daily', component: DailyComponent },
  { path: 'solo', component: SoloComponent },
  { path: 'party', component: PartyComponent },
  { path: 'results', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

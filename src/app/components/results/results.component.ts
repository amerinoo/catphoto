import { Component } from '@angular/core';
import { Result } from 'src/app/models/result';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  results: Result[] = [];
  totalPoints: number;
  minPoints: number;

  constructor(private resultsService: ResultsService) {
    this.results = this.resultsService.results;
    this.totalPoints = this.resultsService.totalPoints;
    this.minPoints = this.resultsService.minPoints;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { ImagesService } from 'src/app/services/photos.service';
import { ResultsService } from 'src/app/services/results.service';

@Component({
  selector: 'app-solo',
  templateUrl: './solo.component.html',
  styleUrls: ['./solo.component.scss'],
})
export class SoloComponent implements OnInit {
  currentRound = 0;
  numRounds: number = 5;
  currentImage!: Photo;
  selectedDate: string | undefined;
  images: Photo[] = [];
  showPoints = false;
  points = 0;
  totalPoints = 0;

  constructor(
    private imagesService: ImagesService,
    private resultsService: ResultsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.images = this.imagesService.getPhotos(this.numRounds);
    this.resultsService.clear();
    this.nextRound();
  }

  check() {
    if (this.selectedDate && this.currentImage) {
      const days = this.differenceInDays(
        new Date(this.selectedDate),
        new Date(this.currentImage.date)
      );
      console.log(this.currentImage.date, this.selectedDate, days);
      this.points = this.calculateScore(days);
      this.totalPoints += this.points;
      this.resultsService.add(this.points, this.currentImage);
      this.showPoints = true;
    }
  }

  nextRound() {
    this.currentImage = this.images[this.currentRound];
    this.showPoints = false;
    this.selectedDate = undefined;
    this.currentRound += 1;
  }

  differenceInDays(date1: Date, date2: Date): number {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const diffInTime = date2.getTime() - date1.getTime();
    return Math.abs(Math.round(diffInTime / oneDay));
  }

  calculateScore(days: number) {
    return days * 10;
  }

  showResults() {
    this.resultsService.setTotalScore(this.totalPoints);
    this.router.navigate(['/results']);
  }
}

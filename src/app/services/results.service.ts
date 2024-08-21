import { Injectable } from '@angular/core';
import { Photo } from '../models/photo';
import { Result } from '../models/result';
import { ImagesService } from './photos.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  results: Result[] = [];
  totalPoints: number = 0;
  minPoints: number = Number.MAX_SAFE_INTEGER;

  constructor(imagesService: ImagesService) {
    const photos = imagesService.getPhotos(5);
    for (let index = 0; index < photos.length; index++) {
      const photo = photos[index];
      this.add((index + 1) * 10, photo);
    }
  }

  add(points: number, photo: Photo) {
    this.results.push(new Result(points, photo));
  }

  clear() {
    this.results = [];
  }

  setTotalScore(points: number) {
    this.totalPoints = points;
    const bestResult = this.minPoints > points;
    if (bestResult) {
      this.minPoints = points;
    }
    return bestResult;
  }
}

import { Photo } from './photo';

export class Result {
  points: number;
  photo: Photo;

  constructor(points: number, photo: Photo) {
    this.points = points;
    this.photo = photo;
  }
}

export class Photo {
  image: string;
  date: string;

  constructor(image: string, date: string) {
    this.image = `/assets/${image}`;
    this.date = date;
  }
}

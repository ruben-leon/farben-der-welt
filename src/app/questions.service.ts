import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Question } from './question';
import { Colors } from './colors';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _questions: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([
    {
      frage: 'Welche Farben hat die deutsche Flagge?',
      antworten: [
        Colors.Black,
        Colors.Red,
        Colors.Yellow,
      ],
      id: '1',
      bild: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png',
    },
   {
      frage: 'Welche Farben hat die Flagge von Brasilien?',
      antworten: [
        Colors.Green,
        Colors.Yellow,
        Colors.DarkBlue,
        Colors.White,
      ],
      id: '2',
      bild: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png',
    },
  /*    {
      frage: 'Welche Farben hat die Flagge der Vereinigten Arabischen Emiraten?',
      antworten: [
        Colors.Green,
        Colors.Black,
        Colors.Red,
        Colors.White,
      ],
      id: '3',
      bild: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1920px-Flag_of_the_United_Arab_Emirates.svg.png',
    },
    {
      frage: 'Welche Farben hat die Flagge von Südafrika?',
      antworten: [
        Colors.Green,
        Colors.Black,
        Colors.Red,
        Colors.White,
        Colors.DarkBlue,
        Colors.Yellow,
      ],
      id: '4',
      bild: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1280px-Flag_of_South_Africa.svg.png',
    },
    {
      frage: 'Welche Farben hat die indische Flagge?',
      antworten: [
        Colors.Green,
        Colors.Orange,
        Colors.White,
        Colors.DarkBlue,
      ],
      id: '5',
      bild: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1280px-Flag_of_India.svg.png',
    },
    {
      frage: 'Welche Farben hat die Flagge von Kanada?',
      antworten: [
        Colors.White,
        Colors.Red,
      ],
      id: '6',
      bild: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1920px-Flag_of_Canada_%28Pantone%29.svg.png',
    }, */
  ])
  public get questions(): Observable<Question[]> {
    return this._questions.asObservable();
  }
  constructor() {}
}

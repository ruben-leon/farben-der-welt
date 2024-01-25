import { Injectable } from '@angular/core';
import { Colors } from './colors';

export interface QuestionResult {
  selectedColors: string[];
  correctAnswers: Colors[];
  isCorrect: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private correctAnswersCount: number = 0;
  private questionResults: QuestionResult[] = [];

  incrementCorrectAnswers() {
    this.correctAnswersCount++;
  }

  addQuestionResult(selectedColors: string[], correctAnswers: Colors[], isCorrect: boolean) {
    this.questionResults.push({ selectedColors, correctAnswers, isCorrect });
    if (isCorrect) {
      this.incrementCorrectAnswers();
    }
  }

  getCorrectAnswersCount(): number {
    return this.correctAnswersCount;
  }

  getQuestionResults(): QuestionResult[] {
    return this.questionResults;
  }

  resetResults() {
    this.correctAnswersCount = 0;
    this.questionResults = [];
  }

  constructor() { }
}

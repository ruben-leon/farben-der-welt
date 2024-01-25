import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsService } from '../questions.service';
import { QuestionResult } from '../result.service';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-evaluation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evaluation.component.html',
  styleUrl: './evaluation.component.scss'
})
export class EvaluationComponent {
  constructor(private resultService: ResultService, readonly questionsService: QuestionsService) { }

  getCorrectAnswersCount(): number {
    return this.resultService.getCorrectAnswersCount();
  }

  getQuestionResults(): QuestionResult[] {
    return this.resultService.getQuestionResults();
  }

  getCssClass(result: QuestionResult): string {
    return result.isCorrect ? 'correct' : 'incorrect';
  }
}

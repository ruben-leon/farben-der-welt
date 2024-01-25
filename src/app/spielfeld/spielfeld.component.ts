import { Component, inject, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ResultService } from '../result.service';
import { Colors } from '../colors';


@Component({
  selector: 'app-spielfeld',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spielfeld.component.html',
  styleUrl: './spielfeld.component.scss'
})
export class SpielfeldComponent implements OnInit {

  selectedColors: string[] = [];
  richtigeAntworten: Colors[] = [];
  currentQuestionIndex: number = 0;
  isLastQuestion: boolean = false;

  constructor(
    readonly questionsService: QuestionsService,
    private router: Router,
    private resultService: ResultService) { }
  
  ngOnInit(): void {
    this.questionsService.questions.subscribe(questions => {
      if (questions.length > 0) {
        this.richtigeAntworten = questions[this.currentQuestionIndex].antworten;
        console.log('Richtige Antworten:', this.richtigeAntworten);
        this.isLastQuestion = this.currentQuestionIndex === questions.length - 1;
      }
    });
  }

  getColorValues(): string[] {
    return Object.values(Colors);
  }

  onColorClick(color: string): void {
    const index = this.selectedColors.indexOf(color);
    if (index !== -1) {
      this.selectedColors.splice(index, 1);
    } else {
      this.selectedColors.push(color);
    }
    console.log(this.selectedColors);
  }

  isSelected(color: string): boolean {
    return this.selectedColors.includes(color);
  }
  
  compareArrays(): void {
    const auswahl = this.selectedColors;
    const richtig = this.richtigeAntworten;
    const sortedA = auswahl.slice().sort(); 
    const sortedB = richtig.slice().sort();  
  
    const areArraysEqual = JSON.stringify(sortedA) === JSON.stringify(sortedB);
  
    if (areArraysEqual) {
      console.log('Gewonnen');
      this.resultService.addQuestionResult(this.selectedColors, this.richtigeAntworten, true);
    } else {
      console.log('Verloren');
      this.resultService.addQuestionResult(this.selectedColors, this.richtigeAntworten, false);
    }

    if (this.isLastQuestion) {
      console.log('Ende!!!');
      this.router.navigate(['/evaluation']);
      window.scrollTo(0, 0);
    } else {
      this.currentQuestionIndex++;
      this.selectedColors = [];
      window.scrollTo(0, 0);
      this.ngOnInit();
    }
  }    
}

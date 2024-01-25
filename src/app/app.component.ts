import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpielfeldComponent } from './spielfeld/spielfeld.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SpielfeldComponent, EvaluationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Farben';
}

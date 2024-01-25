import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpielfeldComponent } from './spielfeld/spielfeld.component';
import { EvaluationComponent } from './evaluation/evaluation.component';

export const routes: Routes = [
    { path: '', component: SpielfeldComponent },
    { path: 'evaluation', component: EvaluationComponent },
];


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderModule } from './../slider/slider.module';
import { RouterModule } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SliderModule,
    RouterModule.forRoot([
        { path: '', component: SliderComponent },
     ])
  ]
})
export class HomeModule { }

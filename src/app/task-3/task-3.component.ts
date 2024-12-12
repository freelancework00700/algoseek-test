import Swiper from 'swiper';
import { Component, OnInit } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-task-3',
  styleUrl: './task-3.component.scss',
  templateUrl: './task-3.component.html',
})
export class Task3Component implements OnInit {
  swiper!: Swiper;

  ngOnInit() {
    this.swiper = new Swiper('.swiper', {});
  }
}

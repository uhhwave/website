import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import {
  Platform
} from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(700, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = '-website';
  imageUrl = '';

  constructor(public platform: Platform) {}

  ngOnInit(): void {
    let isHidden = true;

    const buttons = document.querySelectorAll('#b');

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        toggleElements();
      });
    });

    const toggleElements = () => {
      isHidden = !isHidden;
      const s = document.getElementById('s')!;
      const b = document.getElementById('b')!;
      s.style.display = 'flex';
      b.style.display = 'none';
    };
  }
}

import { Component, HostBinding, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgOptimizedImage } from '@angular/common';
import { trigger, style, animate, transition } from '@angular/animations';
import { Platform } from '@angular/cdk/platform';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(700, style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  title = '~website';
  imageUrl = '';

  constructor(
    public platform: Platform,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    let isHidden = true;

    if (isPlatformBrowser(this.platformId)) {
      const buttons = document.querySelectorAll('#b');

      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          toggleElements();
        });
      });

      const toggleElements = () => {
        isHidden =!isHidden;
        const s = document.getElementById('s')!;
        const b = document.getElementById('b')!;
        s.style.display = isHidden? 'flex' : 'none';
        b.style.display = isHidden? 'none' : 'block';
      };
    }
  }
}

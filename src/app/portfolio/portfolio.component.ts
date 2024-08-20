import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  isHidden: boolean = true; // hide to model
  // false ---> show to model

  modelImg: string = '';

  imgSrc: string[] = [
    '../../assets/imgs/poert1.png',
    '../../assets/imgs/port2.png',
    '../../assets/imgs/port3.png',
    '../../assets/imgs/port3.png',
    '../../assets/imgs/poert1.png',
    '../../assets/imgs/port2.png',
  ];

  hideModel(eleTarget: EventTarget | null, imgRef: HTMLImageElement): void {
    if (eleTarget == imgRef) {
      return;
    } else {
      this.isHidden = true;
    }
  }
}

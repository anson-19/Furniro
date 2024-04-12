import { Component, Input } from '@angular/core';

export interface Slide{
  imgSrc:string;
  imgAlt:string;
}

@Component({
  selector: 'app-sliderimage',
  templateUrl: './sliderimage.component.html',
  styleUrls: ['./sliderimage.component.scss']
})
export class SliderimageComponent {

  @Input() images:Slide[] =[]; 
  selectedIndex = 0;

  slideNext() {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
  }
}

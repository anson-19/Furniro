import { Component } from '@angular/core';
import 'hammerjs';
import { ProductGridViewModel } from '../../../models/productGridViewModel';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  gridImages: ProductGridViewModel[] = [
    new ProductGridViewModel(1, '../assets/img/image 106.png', 'Image 1', 'Product 1', 'Description 1', '$10', '$8'),
    new ProductGridViewModel(2, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(3, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(4, '../assets/img/image 106.png', 'Image 1', 'Product 1', 'Description 1', '$10', '$8'),
    new ProductGridViewModel(5, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(6, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(5, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(6, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16')
  ];

  images=[
  {
    imgSrc:'../assets/img/image 106.png',
    imgAlt:'Image 1',
  },
  {
    imgSrc:'../assets/img/image 101.png',
    imgAlt:'Image 1',
  },
  {
    imgSrc:'../assets/img/image 100.png',
    imgAlt:'Image 1',
  },
  {
    imgSrc:'../assets/img/image 101.png',
    imgAlt:'Image 1',
  },
  {
    imgSrc:'../assets/img/image 106.png',
    imgAlt:'Image 1',
  },
  {
    imgSrc:'../assets/img/image 100.png',
    imgAlt:'Image 1',
  },
  {
    imgSrc:'../assets/img/image 106.png',
    imgAlt:'Image 1',
  },
]
}

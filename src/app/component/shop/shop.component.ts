import { Component } from '@angular/core';
import { ProductGridViewModel } from '../../../models/productGridViewModel';
import { TitleCardModel } from '../../../models/titleCardModel';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  titleCard: TitleCardModel = new TitleCardModel("Shop","Home>Shop")

  gridImages: ProductGridViewModel[] = [
    new ProductGridViewModel(1, '../assets/img/image 106.png', 'Image 1', 'Product 1', 'Description 1', '$10', '$8'),
    new ProductGridViewModel(2, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(3, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(4, '../assets/img/image 106.png', 'Image 1', 'Product 1', 'Description 1', '$10', '$8'),
    new ProductGridViewModel(5, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(6, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(7, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(8, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(9, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(10, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(11, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(12, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(13, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(14, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16'),
    new ProductGridViewModel(15, '../assets/img/image 100.png', 'Image 2', 'Product 2', 'Description 2', '$15', '$12'),
    new ProductGridViewModel(15, '../assets/img/image 101.png', 'Image 3', 'Product 3', 'Description 3', '$20', '$16')
  ];
}

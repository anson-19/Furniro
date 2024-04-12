import { Component, Input } from '@angular/core';
import { ProductGridViewModel } from '../../../models/productGridViewModel';

@Component({
  selector: 'app-product-grid-list',
  templateUrl: './product-grid-list.component.html',
  styleUrls: ['./product-grid-list.component.scss']
})
export class ProductGridListComponent {
  @Input() gridImages: ProductGridViewModel[] = []; 

}

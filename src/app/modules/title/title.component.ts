import { Component, Input } from '@angular/core';
import { TitleCardModel } from '../../../models/titleCardModel';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

  @Input() titleCard: TitleCardModel | null = null;

}

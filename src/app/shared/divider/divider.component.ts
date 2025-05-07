import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent {

  @Input() orangeDivider: boolean = false;
  @Input() purpleDivider: boolean = false;

}

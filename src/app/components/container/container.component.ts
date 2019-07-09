import { Component } from '@angular/core';
import { XkcdTextService, } from '../../services/xkcdtext.service';
@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  providers: [XkcdTextService]
})
export class ContainerComponent {
  constructor (private xkcdTextService: XkcdTextService, ) {

  }

}

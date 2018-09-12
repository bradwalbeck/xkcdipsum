import { Component } from '@angular/core';
import { xkcdTextService, } from '../services/xkcdtext.service'
@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  providers: [xkcdTextService],
})
export class ContainerComponent {

  constructor (private xkcdTextService: xkcdTextService, ) {}
}

import { Component } from '@angular/core';
import { xkcdTextService, } from '../services/xkcdtext.service'
@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  providers: [xkcdTextService],
})
export class ContainerComponent {
  public finalText: string;
  constructor (private xkcdTextService: xkcdTextService, ) {
    let apiResult = xkcdTextService.getxkcd().subscribe(
      success => console.table (success),
      error => alert(error)
    );
  }

}

import { Component } from '@angular/core';
import { XkcdTextService, } from '../../services/xkcdtext.service';
@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  providers: [XkcdTextService]
})
export class ContainerComponent {
  public finalText: string;
  constructor (private xkcdTextService: XkcdTextService, ) {
    //let apiResult = xkcdTextService.getxkcd()
    //.subscribe(
    //  success => console.table(success),
    //  error => console.error(error)
    //);
    this.finalText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  }

}

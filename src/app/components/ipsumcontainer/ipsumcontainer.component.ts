import { Component, OnInit } from '@angular/core';
import { XkcdTextService } from '../../services/xkcdtext.service';
@Component({
  selector: 'ipsumcontainer',
  templateUrl: './ipsumcontainer.component.html',
  styleUrls: ['./ipsumcontainer.component.css']
})
export class IpsumContainerComponent implements OnInit {
 
  public paragraphs: Array<String> = []
  public linesperparagraph = 2;
  public paragraphsrequested = 2;
  constructor(
    private xkcdTextService: XkcdTextService
    ) 
    { 
    // can do again on button press or whatever
   
  }

  ngOnInit() {
    this.generateParagraphs();
  }

  private generateParagraphs(){
    for (var counter = 0; counter < this.paragraphsrequested; counter++) {
    this.paragraphs.push(this.xkcdTextService.getParagraph(this.linesperparagraph));
    };
  };

}

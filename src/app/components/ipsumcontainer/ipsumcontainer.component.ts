import { Component, OnInit} from '@angular/core';
import { XkcdTextService } from '../../services/xkcdtext.service';
@Component({
  selector: 'ipsumcontainer',
  templateUrl: './ipsumcontainer.component.html',
  styleUrls: ['./ipsumcontainer.component.css']
})
export class IpsumContainerComponent implements OnInit {

  public linesperparagraph: number = 4;
  public paragraphsrequested: number = 5;
  

  public paragraphs: Array<String> = [];
  constructor(
    private xkcdTextService: XkcdTextService
  ) { }

  ngOnInit() {
    this.paragraphs = this.generateParagraphs();
  }
  private reGenerateParagraphs(){
    this.paragraphs = this.generateParagraphs([],this.linesperparagraph,this.paragraphsrequested)
  }
  private generateParagraphs (
    paragraphs: Array<String> = this.paragraphs,
    linesperparagraph: number = this.linesperparagraph,
    paragraphsrequested: number = this.paragraphsrequested,
  ) {

    if (paragraphsrequested < 1) {
      paragraphs.push("Too few.... to few.")
    }
    for (var counter = 0; counter < this.paragraphsrequested; counter++) {
      paragraphs.push(this.xkcdTextService.getParagraph(this.linesperparagraph));
    };
    return paragraphs;
  };
}

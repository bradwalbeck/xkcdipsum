import { Component, OnInit, Input } from '@angular/core';
import { XkcdTextService } from '../../services/xkcdtext.service';
@Component({
  selector: 'ipsumcontainer',
  templateUrl: './ipsumcontainer.component.html',
  styleUrls: ['./ipsumcontainer.component.css']
})
export class IpsumContainerComponent implements OnInit {

  public linesperparagraph: number = 8;
  public paragraphsrequested: number = 3;
  public paragraphs: Array<String> = [];
  public showToast: boolean = false;

  constructor(
    private xkcdTextService: XkcdTextService
  ) { }

  ngOnInit() {
    this.paragraphs = this.generateParagraphs();
  }
  private reGenerateParagraphs() {
    this.paragraphs = this.generateParagraphs([], this.linesperparagraph, this.paragraphsrequested)
  }
  private generateParagraphs(
    paragraphs: Array<String> = this.paragraphs,
    linesperparagraph: number = this.linesperparagraph,
    paragraphsrequested: number = this.paragraphsrequested,
  ) {
    if (paragraphsrequested < 1) {
      paragraphs.push("Too few paragraphs.... too few.")
    }
    for (var counter = 0; counter < this.paragraphsrequested; counter++) {
      paragraphs.push(this.xkcdTextService.getParagraph(this.linesperparagraph));
    };
    return paragraphs;
  };


  incarmentParagraphsRequested() {
    if (this.linesperparagraph < 99) {
      this.linesperparagraph++;
    }
    this.reGenerateParagraphs();
  }
  decramentParagraphsRequested() {
    if (this.linesperparagraph >= 0) {
      this.linesperparagraph--;
    }
    this.reGenerateParagraphs();
  }
  incarmentLinesPerParagraph() {
    if (this.paragraphsrequested < 99) {
      this.paragraphsrequested++;
    }
    this.reGenerateParagraphs();
  }
  decramentLinesPerParagraph() {
    if (this.paragraphsrequested >= 0) {
      this.paragraphsrequested--;
    }
    this.reGenerateParagraphs();
  }

  //just re-assemble the paragraphs array much more doable.
  copyMessage(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = this.paragraphs.join("\n");
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.displayCopyButtonUserFeedback(2000);
  }

  async displayCopyButtonUserFeedback(ms: number) {
    this.toggleShowToast()
    await new Promise(
      resolve => setTimeout(
        () => resolve(), ms))
      .then(
        () => this.toggleShowToast()
      );

  }

  toggleShowToast() {
    this.showToast = !this.showToast;
  }

}

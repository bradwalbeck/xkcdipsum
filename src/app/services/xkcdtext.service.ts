import { NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AltText } from './alttext.data'


// needs to accept user input to form correct, screen ready, returned text
@Injectable()
export class XkcdTextService {

  private linesperparagraph = 2;
  private paragraphs = 2;
  private ipsum = "";

  constructor(
    private altText: AltText
  ) { }

  //public getxkcd(): string {
  //
  //    this.ipsum = this.getIpsum(this.altText, this.ipsum, this.paragraphs, this.linesperparagraph);
  //  return this.ipsum;
  // }

  // ngOnInit() {
  //
  //  }

  private getIpsum(altText: AltText, ipsum: string, paragraphs: number, linesperparagraph: number): string {

    if (paragraphs < 1) {
      // return emoticons
    }
    if (linesperparagraph < 1) {
      // return emoticons
      // return this.altText.[Math.floor(Math.random() * this.emoticons.length)];
    }

    var ipsumresult: string = ipsum;
    for (var counter = 0; counter < paragraphs; counter++) {
      ipsumresult += this.getParagraph(this.linesperparagraph);
    }
    return ipsumresult;
  }

  public getParagraph(altTextsPerParagraph: number, altText: AltText = this.altText): string {
    if (altTextsPerParagraph < 1) {
      return this.getEmoticon();
    }
    const alttextstringcount = altText.Atltextstrings.length;
    var paragraph: string = "";
    for (var counter = 0; counter < altTextsPerParagraph; counter++) {
      paragraph += altText.Atltextstrings[Math.floor(Math.random() * alttextstringcount)];
    }
    return paragraph;
  }

  private getEmoticon(altText: AltText = this.altText): string {
    var random: number = Math.floor(Math.random() * altText.Emoticons.length);
    var randomInt: number = Math.floor(random);
    return altText.Emoticons[random];
  }
}

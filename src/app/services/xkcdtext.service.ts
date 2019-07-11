import { Injectable } from '@angular/core';
import { AltText } from './alttext.data'

@Injectable()
export class XkcdTextService {

  constructor(
    private altText: AltText
  ) { }

  public getParagraph(altTextsPerParagraph: number, altText: AltText = this.altText): string {
    if (altTextsPerParagraph < 1) {
      return this.getEmoticon();
    }
    const alttextstringcount = altText.Atltextstrings.length;
    var paragraph: string = "";
    for (var counter = 0; counter < altTextsPerParagraph; counter++) {
      paragraph += altText.Atltextstrings[Math.floor(Math.random() * alttextstringcount)];
      paragraph += " "
    }
    return paragraph;
  }

  private getEmoticon(altText: AltText = this.altText): string {
    var random: number = Math.floor(Math.random() * altText.Emoticons.length);
    var randomInt: number = Math.floor(random);
    return altText.Emoticons[random];
  }
}

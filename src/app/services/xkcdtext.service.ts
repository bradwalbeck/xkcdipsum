import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class xkcdTextService {

    constructor(
      private httpClient: HttpClient
    ) {}


    public getxkcd() {
      return this.httpClient.get('https://xkcd.com/614/info.0.json'); //(comic #614)
      //return this.httpClient.get('http://xkcd.com/info.0.json'); // (current comic)
    }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  private mapit(res: Response) {
    const body = res.json();
    return body;
  }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map(this.mapit);
  }
}

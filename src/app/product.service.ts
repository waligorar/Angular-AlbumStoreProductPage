import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  private mapit(res: Response) {
    const body = res.json();
    return <Album>body;
  }

  getAlbum(id: number): Observable<Album> {
    return <Album>this._http.get(this._albumUrl).map(this.mapit);
  }
}

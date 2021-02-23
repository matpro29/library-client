import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Title} from '../../model/model.title';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  private TITLE_API = 'http://localhost:8080/title';

  constructor(private http: HttpClient) {}

  find(title: Title): Observable<any> {
    return this.http.post(this.TITLE_API + '/find', title);
  }
}

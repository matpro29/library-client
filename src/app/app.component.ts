import { Component } from '@angular/core';
import {Title} from './model/model.title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library-client';

  findResults: Title[];

  public setFindResult(results: Title[]): void {
    this.findResults = results;
  }
}

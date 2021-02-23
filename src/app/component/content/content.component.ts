import { Component, OnInit } from '@angular/core';
import {Title} from '../../model/model.title';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  findResults: Title[];

  constructor() { }

  ngOnInit(): void {
  }

  public setFindResult(results: Title[]): void {
    this.findResults = results;
  }
}

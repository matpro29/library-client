import { Component, OnInit } from '@angular/core';
import {Find} from '../../model/model.find';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  find: Find;

  constructor() { }

  ngOnInit(): void {
  }

  public setFindResult(find: Find): void {
    this.find = find;
  }
}

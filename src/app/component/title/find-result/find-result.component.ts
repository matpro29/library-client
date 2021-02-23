import {Component, Input, OnInit} from '@angular/core';
import {Title} from '../../../model/model.title';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {

  @Input() results: Title[];

  constructor() { }

  ngOnInit(): void {
  }
}

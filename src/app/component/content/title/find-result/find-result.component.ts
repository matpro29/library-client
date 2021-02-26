import {Component, Input, OnInit} from '@angular/core';
import {Find} from '../../../../model/model.find';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {

  @Input() find: Find;

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';
import {Title} from '../../../model/model.title';
import {Find} from '../../../model/model.find';
import {TitleService} from '../../../service/title.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  title: Title;

  constructor(private titleService: TitleService) {
    this.title = new Title();
  }

  ngOnInit(): void {
  }

  public find(): void {
    console.log(this.title);
    this.titleService.find(this.title).subscribe((find: Find) => {
      console.log(find);
    });
  }
}

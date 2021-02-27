import {Component, Input, OnInit} from '@angular/core';
import {Find} from '../../../../model/model.find';
import {Title} from '../../../../model/model.title';
import {TitleService} from '../../../../service/title/title.service';

@Component({
  selector: 'app-find-result',
  templateUrl: './find-result.component.html',
  styleUrls: ['./find-result.component.css']
})
export class FindResultComponent implements OnInit {

  @Input() find: Find;

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
  }

  public add(title: Title): void {
    this.titleService.add(title).subscribe((userTitle: any) => {
      console.log(userTitle);
    });
  }
}

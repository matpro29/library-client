import {Component, OnInit, Output, EventEmitter} from '@angular/core';
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
  @Output() results = new EventEmitter();

  constructor(private titleService: TitleService) {
    this.title = new Title();
  }

  ngOnInit(): void {
  }

  public find(): void {
    this.titleService.find(this.title).subscribe((find: Find) => {
      this.results.emit(find.results);
    });
  }
}

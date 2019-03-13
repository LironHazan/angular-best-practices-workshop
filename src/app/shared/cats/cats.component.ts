import { Component, OnInit } from '@angular/core';
import { CatsService } from './cats.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent implements OnInit {
  public catPath: Observable<any>;
  constructor(private cats: CatsService) { }

  ngOnInit() {
    this.catPath = this.cats.getCat();
  }

}

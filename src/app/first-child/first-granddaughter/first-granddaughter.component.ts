import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-first-granddaughter',
  templateUrl: './first-granddaughter.component.html',
  styleUrls: ['./first-granddaughter.component.scss']
})
export class FirstGranddaughterComponent implements OnInit {

  @Input() pocketMoney: any;

  constructor() { }

  ngOnInit() {
  }

}

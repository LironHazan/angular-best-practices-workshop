import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  public pocketMoney = { regularWeek: 2, holiday: 4 };
  public helpWithRent = 500;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.pocketMoney.regularWeek = 3;
      // this.pocketMoney = { regularWeek: 3, holiday: 4 };
      this.helpWithRent = 300;
    }, 3000);
  }

  onClick(evt) {
    console.log('clicked');
    this.pocketMoney.regularWeek += 1;
    // this.pocketMoney = { regularWeek: this.pocketMoney.regularWeek + 1, holiday: 4 };
  }

}

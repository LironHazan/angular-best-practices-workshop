import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-grandchild',
  templateUrl: './first-grandchild.component.html',
  styleUrls: ['./first-grandchild.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstGrandchildComponent implements OnInit {

  @Input() pocketMoney: any;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nice-input',
  template: `<input class="nice-input" placeholder="start typing . . ."/>`,
  styleUrls: ['./nice-input.component.scss']
})
export class NiceInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

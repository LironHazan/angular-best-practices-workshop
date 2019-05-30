import {Component, OnDestroy} from '@angular/core';

@Component({
  template: `<div>{{msg}}</div> <p> list size is: {{ list | size}}</p>`
})
export class ByeComponent implements OnDestroy {
  public msg = 'Bye Component is here!!! 🙃';
  public list = [1, 2, 3];
  constructor() {}

  ngOnDestroy() {
    console.log('bye');
  }
}

import { Component } from '@angular/core';

@Component({
  template: `<div>{{msg}}!</div>
  <app-nice-input></app-nice-input>
  `,
})
export class HelloComponent  {
  public msg = 'Hello Component is here 🙂';

  constructor() {}
}

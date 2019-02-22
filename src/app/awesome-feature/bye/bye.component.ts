import { Component } from '@angular/core';

@Component({
  template: `<div>{{msg}}</div>`
})
export class ByeComponent {
  public msg = 'Bye Component is here!!! 🙃';

  constructor() {
  }
}

import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SharedModule} from './shared.module';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private activeThem = new BehaviorSubject('oceanBlueThemProps');

  constructor() { }

  public getActiveTheme() {
    return this.activeThem.asObservable();
  }

  public setActiveThem(name) {
    this.activeThem.next(name);
  }
}

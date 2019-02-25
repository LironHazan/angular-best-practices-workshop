import {Directive, ElementRef, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/common';
import {ThemeService} from './theme.service';

export const themes = {
  oceanBlueThemProps : {
    '--background' : 'aliceblue',
    '--text-color': '#0F0F0F',
  },
  deepPurpleThemProps: {
    '--background' : 'purple',
    '--text-color': 'whitesmoke',
  }
};

@Directive({
  selector: '[appTheme]'
})
export class ThemeDirective implements OnInit, OnDestroy {

  private themeName = 'oceanBlueThemProps';
  private themServiceSubscription: Subscription;

  constructor( private elementRef: ElementRef,
               private renderer: Renderer2,
               @Inject(DOCUMENT) private document: any,
               private themService: ThemeService) { }

  ngOnInit() {
    this.updateTheme(this.themeName);
    this.themService.getActiveTheme()
      .subscribe(themeName => {
        this.themeName = themeName ;
        this.updateTheme(this.themeName);

      });
  }

  updateTheme(themeName) {
    const element = this.elementRef.nativeElement;
    const theme = themes[themeName];
    for (const key of Object.keys(theme)) {
      element.style.setProperty(key, theme[key]);
      this.renderer.setProperty(this.document.body, key, theme[key]);
    }
  }

  ngOnDestroy() {
    if (this.themServiceSubscription) this.themServiceSubscription.unsubscribe();
  }

}

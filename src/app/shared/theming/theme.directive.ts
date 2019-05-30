import {Directive, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from './theme.service';

export const themes = {
  oceanBlueThemProps : {
    'background-color' : 'aliceblue',
     color: '#0F0F0F',
  },
  deepPurpleThemProps: {
    'background-color' : 'purple',
     color: 'whitesmoke',
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
    const theme = themes[themeName];
    for (const key of Object.keys(theme)) {
       this.renderer.setStyle(this.elementRef.nativeElement, key, theme[key]);
    }
  }

  ngOnDestroy() {
    this.themServiceSubscription && this.themServiceSubscription.unsubscribe();
  }

}

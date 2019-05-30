import { Component, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';
import {CdkPortal, DomPortalOutlet} from '@angular/cdk/portal';

@Component({
  selector: 'app-tab-view-portal',
  templateUrl: './tab-view-portal.component.html',
  styleUrls: ['./tab-view-portal.component.css']
})
export class TabViewPortalComponent implements AfterViewInit, OnDestroy {

  @ViewChild(CdkPortal)
  private portal: CdkPortal;

  private host: DomPortalOutlet;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) { }



  ngAfterViewInit() {
    this.host = new DomPortalOutlet(
      document.querySelector('#nav-view-slot'),
      this.componentFactoryResolver,
      this.applicationRef,
      this.injector)
      this.host.attach(this.portal);
  }

   ngOnDestroy() {
     this.host.detach();
  }

}

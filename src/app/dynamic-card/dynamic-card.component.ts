import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  Input
} from '@angular/core';
import {TestComponent} from '../test/test.component';
import {DynamicModel} from './dynamic.model';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements OnInit, AfterContentInit, AfterViewInit {


  @ViewChildren('container', {read: ViewContainerRef}) containers_;
  @Input() models: Array<DynamicModel>;

  containers: Array<any> = [];

  constructor(private resolver: ComponentFactoryResolver) {
  }

  ngOnInit() {

  }

  ngAfterContentInit() {
    // let i = 0;
    // for (let entry of this.models) {
    //   const singlePostFactory = this.resolver.resolveComponentFactory(TestComponent);
    //   this.containers[i].createComponent(singlePostFactory);
    //   i = i + 1;
    // }

  }

  ngAfterViewInit() {

    console.log('containers', this.containers_);
    this.containers_.forEach(container => {
      const singlePostFactory = this.resolver.resolveComponentFactory(TestComponent);
      container.createComponent(singlePostFactory);
    });
  }


}

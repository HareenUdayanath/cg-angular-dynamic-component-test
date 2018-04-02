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
import {DynamicElementModel} from './dynamic.element.model';
import {DynamicInputComponent} from './dynamic-input/dynamic-input.component';
import {DynamicLabelComponent} from './dynamic-label/dynamic-label.component';
import {InputModel} from "./dynamic-input/input.model";

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements OnInit, AfterContentInit, AfterViewInit {


  @ViewChildren('container', {read: ViewContainerRef}) containers_;
  @Input() models: Array<DynamicElementModel>;

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
      console.log(container);
      const model: DynamicElementModel = this.getModel(container.element.nativeElement.id);
      console.log('model', model, container.element.nativeElement.id);
      if (model.model.modelName === 'Input') {
        console.log('AA', model);
        const singlePostFactory = this.resolver.resolveComponentFactory(DynamicInputComponent);
        const singlePostRef = container.createComponent(singlePostFactory);
        singlePostRef.instance.inputModel = model.model;
      }
      if (model.model.modelName === 'Lable') {
        console.log('AA', model);
        const singlePostFactory = this.resolver.resolveComponentFactory(DynamicLabelComponent);
        const singlePostRef = container.createComponent(singlePostFactory);
        singlePostRef.instance.labelModel = model.model;
      }

    });
  }

  getModel(id: string): DynamicElementModel {
    let model_ = null;
    this.models.forEach(model => {
      console.log('id', model.id, id);
      if (model.id === id) {
        model_ = model;
      }
    });
    return model_;
  }

}

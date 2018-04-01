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
import { TestComponent } from '../test/test.component';
import { DynamicModel } from '../dynamic.model';

@Component({
  selector: 'app-dynamic-card',
  templateUrl: './dynamic-card.component.html',
  styleUrls: ['./dynamic-card.component.css']
})
export class DynamicCardComponent implements OnInit, AfterContentInit, AfterViewInit {

  @ViewChild('container_0', {read: ViewContainerRef}) container_0;
  @ViewChild('container_1', {read: ViewContainerRef}) container_1;
  @ViewChild('container_2', {read: ViewContainerRef}) container_2;
  @ViewChildren('container',{read: ViewContainerRef}) containers_;
  @ViewChildren('linkRef') linkRefs;
  @Input() models: Array<DynamicModel>;

  containers: Array<any> = [];
  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.containers.push(this.container_0);
    this.containers.push(this.container_1);
    this.containers.push(this.container_2);

    console.log('ids',this.linkRefs);
  }

   ngAfterContentInit() {
      let i = 0;
      for (let entry of this.models) {
        const singlePostFactory = this.resolver.resolveComponentFactory(TestComponent);
        this.containers[i].createComponent(singlePostFactory);
        i = i+1;
      }   
      
   }

   ngAfterViewInit(){
      console.log('idst',this.linkRefs);
      console.log('containers',this.containers_);
      this.containers_.forEach(container=>{
        const singlePostFactory = this.resolver.resolveComponentFactory(TestComponent);
        container.createComponent(singlePostFactory);
      })
   }
    


}

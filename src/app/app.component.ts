import {Component, OnInit} from '@angular/core';
import {DynamicElementModel} from './dynamic-card/dynamic.element.model';
import {InputModel} from './dynamic-card/dynamic-input/input.model';
import {LabalModel} from './dynamic-card/dynamic-label/labal.model';
import {DynamicModel} from './dynamic-card/dynamic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  models: Array<DynamicElementModel> = [];

  ngOnInit() {
    // let model = new DynamicModel();
    // model.style = "col-sm-4";
    // model.component = "Test";
    // this.models.push(model);
    // this.models.push(model);
    // this.models.push(model);

    let model = new DynamicElementModel();
    model.id = 'a';
    model.style = 'col-sm-4';
    model.component = 'Test Input';
    let dm = new InputModel();
    dm.modelName = 'Input';
    dm.placeHolder = 'Test Place holder';
    dm.value = '';
    model.model = dm;

    this.models.push(model);

    model = new DynamicElementModel();
    model.id = 'b';
    model.style = 'col-sm-4';
    model.component = 'Test Lable';
    let dml = new LabalModel();
    dml.modelName = 'Lable';
    dml.value = 'Test Lable';
    model.model = dml;

    this.models.push(model);
    this.models.push(model);


  }
}

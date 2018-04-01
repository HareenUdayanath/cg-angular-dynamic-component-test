import { Component, OnInit } from '@angular/core';
import { DynamicModel } from './dynamic.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  models: Array<DynamicModel> = [];
  ngOnInit() {
    let model = new DynamicModel();
    model.style = "col-sm-4";
    model.component = "Test";
     this.models.push(model);
     this.models.push(model);
     this.models.push(model);

  }
}

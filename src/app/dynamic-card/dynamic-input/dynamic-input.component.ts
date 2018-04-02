import {Component, Input, OnInit} from '@angular/core';
import {InputModel} from './input.model';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  styleUrls: ['./dynamic-input.component.css']
})
export class DynamicInputComponent implements OnInit {

  @Input() inputModel: InputModel;

  constructor() {
  }

  ngOnInit() {
  }

  onKey(event) {
    console.log('key', event);
    this.inputModel.value = event;
  }

}

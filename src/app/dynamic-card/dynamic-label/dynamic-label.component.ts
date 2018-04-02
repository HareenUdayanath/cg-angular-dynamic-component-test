import {Component, Input, OnInit} from '@angular/core';
import {LabalModel} from './labal.model';

@Component({
  selector: 'app-dynamic-label',
  templateUrl: './dynamic-label.component.html',
  styleUrls: ['./dynamic-label.component.css']
})
export class DynamicLabelComponent implements OnInit {

  @Input() labelModel: LabalModel;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BpmnEditorComponent } from 'ng-bpmn';
import { HttpClient } from '@angular/common/http';
import EmployeesJson from '../../../assets/employees.json';
//import Test from '../../../assets/default.bpmn';

// import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';
// import EmployeesJson from '/assets/employees.json';
interface EMPLOYEE {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
@Component({
  selector: 'pm-bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.css'],
})
export class BpmnComponent implements OnInit {
  @ViewChild('ucBpmn') ucBpmn: BpmnEditorComponent | undefined;
  public data: any;
  Employees: EMPLOYEE[] = EmployeesJson;
  // Graph: any = Test;

  constructor(public fb: FormBuilder, private http: HttpClient) {}
  ngOnInit() {
    console.log(this.Employees);
    //console.log(this.Graph);
    //   .get(url, {
    //     // headers: { observe: 'response' },
    //     responseType: 'text',
    //   })
    //   .subscribe((data) => {
    //     console.log('------------------------------------');
    //     console.log(data);
    //     //  this.ucBpmn.loadXml(x);
    //   }, console.log);
  }
}

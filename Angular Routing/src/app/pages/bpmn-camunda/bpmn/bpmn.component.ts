import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import BpmnModeler from 'bpmn-js/lib/Modeler';
// import propertiesPanelModule from 'bpmn-js-properties-panel';
// import propertiesProviderModule from 'bpmn-js-properties-panel/lib/provider/camunda';
//https://github.com/bpmn-io/bpmn-js-examples/tree/master/properties-panel
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
} from 'bpmn-js-properties-panel';
import CamundaBpmnModdle from 'camunda-bpmn-moddle/resources/camunda.json';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import * as camundaModdleDescriptor from 'camunda-bpmn-moddle/resources/camunda.json';
import * as BpmnJS from 'bpmn-js/dist/bpmn-modeler.production.min.js';

@Component({
  selector: 'pm-bpmn',
  templateUrl: './bpmn.component.html',
  styleUrls: ['./bpmn.component.css'],
})
export class BpmnComponent implements OnInit {
  // title = 'bpmn-js-angular';
  // diagramUrl =
  //   'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  // importError?: Error;
  title = 'Workflow Modeler';

  @ViewChild('canvas')
  private canvesRef: ElementRef;
  bpmnModeler: BpmnModeler;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.bpmnModeler = new BpmnModeler({
      container: '#canvas',
      width: '100%',
      height: '600px',
      propertiesPanel: {
        parent: '#properties',
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        CamundaPlatformPropertiesProviderModule,
      ],
      moddleExtensions: {
        camunda: CamundaBpmnModdle,
      },
    });
    this.load();
  }
  load(): void {
    this.getExample().subscribe(async (data) => {
      // this.modeler.importXML(data, (value) => this.handleError(value));
      await this.bpmnModeler.importXML(data);
    });
  }

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }
  public getExample(): Observable<string> {
    const url = 'assets/bpmn/diagram.bpmn'; // local
    return this.http.get(url, { responseType: 'text' });
  }
}

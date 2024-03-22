import { Component } from '@angular/core';
import {StudentDataService} from '../student-data.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  title = 'Output';
 tipData:any
  public constructor(public dataService: StudentDataService) {
    this.tipData = this.dataService.autoCompleteFromLocalStorage('tipData')

    console.log("hello",this.tipData);
    
  }
}

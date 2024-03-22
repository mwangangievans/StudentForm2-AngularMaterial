import {Component, OnInit} from '@angular/core';
import {StudentDataService} from '../student-data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { Tip } from '../student';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  public title = 'Tip Calculator';
  public programNames = [
    'Computer Programmer', 'Systems Technology',
    'Engineering Technician', 'Systems Technician'];
  public form: FormGroup;
  private router: Router;
  rounded_dollar:any;
  rounded_cent:any;
  public constructor(dataService: StudentDataService, router: Router) {
    this.router = router;

    this.form = new FormGroup({
      tip: new FormControl('', Validators.required),
      tipRate: new FormControl('', Validators.required),
      roundTip: new FormControl(false),
    
    });
  }

 

  ngOnInit(): void {

  }

  public calculate(data: Tip) {
    let tipRate = Number(data.tipRate);
    let tipAmount = 0
  
    tipAmount =  tipRate/100 * data.tip
    let totalTip = tipAmount + data.tip

  
let tipData = {
  estimated_tip: tipAmount,
  Total_amount_including_tip : totalTip,
  tipRate :data.tipRate,
  tip:data.tip
}
localStorage.setItem('tipData', JSON.stringify(tipData));
this.router.navigate(['output'])



}

}

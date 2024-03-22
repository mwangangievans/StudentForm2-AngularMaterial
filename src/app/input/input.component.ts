import {Component, OnInit} from '@angular/core';
import {Student} from '../student';
import {StudentDataService} from '../student-data.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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
  public student: Student;
  private router: Router;
  public constructor(dataService: StudentDataService, router: Router) {
    this.student = dataService.student;
    this.router = router;

    this.form = new FormGroup({
      tip: new FormControl('', Validators.required),
      tipRate: new FormControl('', Validators.required),
      roundTip: new FormControl(false),
    
    });
  }

  public calculate(data: Student) {
    console.log({data});
  }

  ngOnInit(): void {

  }

}

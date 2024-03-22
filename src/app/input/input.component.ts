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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      programId: new FormControl('', Validators.required),
      programYear: new FormControl('', Validators.required),
      programCoop: new FormControl(false),
      programInternship: new FormControl(false)
    });
  }

  public send(data: Student) {
    this.student.firstName = data.firstName;
    this.student.lastName = data.lastName;
    this.student.programId = data.programId;
    this.student.programYear = data.programYear;
    this.student.programCoop = data.programCoop;
    this.student.programInternship = data.programInternship;
    this.router.navigate(['output']).then(() => {
      console.log('showing the output data');
      console.log(data);
    });
  }

  ngOnInit(): void {

  }

}

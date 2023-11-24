import { Injectable } from '@angular/core';
import {Student} from "./student";

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  student: Student = new Student();
}

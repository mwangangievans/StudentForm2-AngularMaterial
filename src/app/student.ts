export class Student {
  firstName: string;
  lastName: string;
  programId: number;
  programYear: number;
  programCoop: boolean;
  programInternship: boolean;
  public constructor() {
    this.firstName = '';
    this.lastName = '';
    this.programId = 0;
    this.programYear = 0;
    this.programCoop = false;
    this.programInternship = false;
  }
}

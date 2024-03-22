import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  autoCompleteFromLocalStorage(key: string) {
    const cachedData = localStorage.getItem(key)
    let response = null;
    if (cachedData !== null) response = JSON.parse(cachedData)
    return response
  }
}

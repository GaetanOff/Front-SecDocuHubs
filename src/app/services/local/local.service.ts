import {Injectable} from '@angular/core';

function getLocalStorage(): Storage {
  return localStorage;
}

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() {
  }

  get getLocalStorage(): Storage {
    return getLocalStorage();
  }
}

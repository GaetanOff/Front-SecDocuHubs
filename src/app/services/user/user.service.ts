import { Injectable } from '@angular/core';
import {LocalService} from "../local/local.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private isLogged: boolean = false;

  constructor(private localStorage: LocalService) {
    this.isLogged = this.localStorage.getLocalStorage.getItem('isLogged') === 'true';
  }

  login(): void {
    this.isLogged = true;
    this.localStorage.getLocalStorage.setItem('isLogged', 'true');
  }

  async logout(): Promise<void> {
    this.isLogged = false;
    this.localStorage.getLocalStorage.setItem('isLogged', 'false');
  }

  isUserLogged(): boolean {
    return this.isLogged;
  }
}

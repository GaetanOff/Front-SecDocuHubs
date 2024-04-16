import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private currentPage: string = 'home';

  constructor() { }

  setCurrentPage(page: string): void {
    this.currentPage = page;
  }

  getCurrentPage(): string {
    return this.currentPage;
  }

}

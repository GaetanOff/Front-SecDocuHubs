import {Injectable} from '@angular/core';
import {LocalService} from "../local/local.service";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private readonly documentsList: any[] = [] // Array of documents

  constructor(private localService: LocalService) {
    if (!this.localService.getLocalStorage.getItem('documentsList')) {
      this.documentsList.push({id: 1, name: 'Example1.pdf', content: 'Content of document 1'});
      this.localService.getLocalStorage.setItem('documentsList', JSON.stringify(this.documentsList));
      return;
    }
    if (this.localService.getLocalStorage.getItem('documentsList') != null) {
      // @ts-ignore
      const save: string = this.localService.getLocalStorage.getItem('documentsList');
      this.documentsList = JSON.parse(save);
    }
  }

  getDocuments() {
    return this.documentsList;
  }

  addDocument(document: any) {
    this.documentsList.push(document);
    this.localService.getLocalStorage.setItem('documentsList', JSON.stringify(this.documentsList));
  }

  removeDocument(document: any) {
    const index = this.documentsList.indexOf(document);
    this.documentsList.splice(index, 1);
    this.localService.getLocalStorage.setItem('documentsList', JSON.stringify(this.documentsList));
  }
}

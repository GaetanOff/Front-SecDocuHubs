import {Component} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {NavService} from "../../../../services/nav/nav.service";
import {DocumentService} from "../../../../services/document/document.service";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    ReactiveFormsModule
  ],
  templateUrl: './documents.component.html'
})
export class DocumentsComponent {
  showModal = false;
  addDocForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });


  constructor(private userService: UserService, private router: Router, private navService: NavService,
              public documentService: DocumentService) {
    if (!this.userService.isUserLogged()) {
      this.router.navigate(['/auth/login']);
      return;
    }

    this.navService.setCurrentPage('documents');
  }

  async toggleModal(): Promise<void> {
    this.showModal = !this.showModal;
  }

  async addDocument(): Promise<void> {
    if (this.addDocForm.value.name === '' || this.addDocForm.value.description === '') {
      return;
    }
    this.documentService.addDocument({id: this.documentService.getDocuments().length + 1, name: this.addDocForm.value.name, content: this.addDocForm.value.description});
    this.addDocForm.reset();
    await this.toggleModal();
  }

  async deleteDocument(id: number): Promise<void> {
    this.documentService.removeDocument(this.documentService.getDocuments().find(doc => doc.id === id));
  }

  protected readonly document = document;
}

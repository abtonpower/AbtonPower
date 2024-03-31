import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contactForm!: FormGroup;
  selectedFileName= 'Picture of current setup';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      contactNumber: ['', Validators.required],
      email: [''],
      requirement: [''],
      picture: ['']
    });
  }

  onSubmit() {
    this.contactForm.reset();
    this.selectedFileName= 'Picture of current setup';
  }
  onFileSelected(event: any): void {
    const selectedFile: File = event.target.files[0];
    if (selectedFile) {
      this.selectedFileName = selectedFile.name;
    } 
  }
}




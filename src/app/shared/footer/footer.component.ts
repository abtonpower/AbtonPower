import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contactForm!: FormGroup;
  selectedFileName= 'Picture of current setup';

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

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
    this.openSnackBar();
    this.contactForm.reset();
    this.selectedFileName= 'Picture of current setup';
  }
  onFileSelected(event: any): void {
    const selectedFile: File = event.target.files[0];
    if (selectedFile) {
      this.selectedFileName = selectedFile.name;
    } 
  }

  openSnackBar() {
    this._snackBar.open("Form submitted successfully!", 'OK', {
      duration: 5000,
    });
  }
}




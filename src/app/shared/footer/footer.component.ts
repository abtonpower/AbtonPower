import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BatteryService } from '../service/battery.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  formData: FormData = new FormData();
  contactForm!: FormGroup;
  selectedFile: any;
  selectedFileName= 'Picture of current setup';

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private http: HttpClient,
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

  onSubmit(evt: any) {
    evt.preventDefault();

    const formData = this.contactForm.value;

    formData['form-name'] = 'contact';
    const headers = new HttpHeaders({
      Accept: 'text/html',
      'Content-Type': 'multipart/form-data',
    });

    this.http
      .post('/', new URLSearchParams(formData).toString(), { headers, responseType: 'text' })
      .subscribe(() => {
        setTimeout(()=> {
          this.openSnackBar();
          this.contactForm.reset();
          this.selectedFileName= 'Picture of current setup';
        },1000);
      });
   
  }
  onFileSelected(event: any): void {
     this.selectedFile = event.target.files[0] as File;
    if (this.selectedFile) {
      this.selectedFileName = this.selectedFile.name;
    } 
  }

  openSnackBar() {
    this._snackBar.open("Form submitted successfully!", 'OK', {
      duration: 5000,
    });
  }
}




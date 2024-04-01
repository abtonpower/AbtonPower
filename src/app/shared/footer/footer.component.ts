import { HttpClient } from '@angular/common/http';
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
    private batteryService: BatteryService
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
    if(this.contactForm.valid){
      // this.formData.append('picture', this.contactForm.get('name')?.value)
      // this.formData.append('name', this.contactForm.get('name')?.value)
      // this.formData.append('email', this.contactForm.get('email')?.value)
      // this.formData.append('contact', this.contactForm.get('contactNumber')?.value)
      // this.formData.append('requirement', this.contactForm.get('requirement')?.value)
      
      this.batteryService.postForm(this.contactForm).subscribe(res=>{
    
      })
    }
    setTimeout(()=> {
      this.openSnackBar();
      this.contactForm.reset();
      this.selectedFileName= 'Picture of current setup';
    },1000);
   
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




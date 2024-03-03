import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  siteKey:string="6LeNE4gpAAAAAOKfxYHi6d3gDyZ4VjOQbHtmXOF5";

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-zA-Z].*")]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      recaptcha: ['', Validators.required],

    });
    
  }

  get UserName() {
    return this.registerForm.get("username");
  }

  get Email() {
    return this.registerForm.get("email");
  }

  get PWD() {
    return this.registerForm.get("pwd");
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      // Submit the form data to the server for further processing
      console.log("Form submitted:", formData);
      // After successful submission, you may want to reset the form
      this.registerForm.reset();
    } else {
      // Form is invalid, mark all fields as touched to display error messages
      this.registerForm.markAllAsTouched();
    }
  }
}

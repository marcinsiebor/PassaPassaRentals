import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  get Name() {
    return this.contactForm.get('name');
  }

  get Email() {
    return this.contactForm.get('email');
  }

  get Message() {
    return this.contactForm.get('message');
  }

  contactSubmitted() {
    if (this.contactForm.valid) {
      
      console.log(this.contactForm.value);
      this.contactForm.reset();
    }
  }
}

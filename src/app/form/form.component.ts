import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  contactForm =  new FormGroup({
    email: new FormControl('', Validators.compose([Validators.email, Validators.required])),
    body: new FormControl('', Validators.required)
  })

  get email(){
    return this.contactForm.get('email')
  }

  get body(){
    return this.contactForm.get('body')
  }

  submit() {
    let power = this.contactForm.get('body')
    if (power == null) {
      return;
    }

    window.location.href = "mailto:benyebai4@gmail.com?body=" + power.value
  }

  ngOnInit(): void {
  }

}

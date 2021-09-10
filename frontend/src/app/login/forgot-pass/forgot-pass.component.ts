import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css'],
})
export class ForgotPassComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('form not valid!!');
      return;
    }
    try {
    } catch (err: any) {}
  }
}

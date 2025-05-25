import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  form: FormGroup;

  services = ['Diseño UX/UI', 'Logo y Branding', 'Diseño Gráfico', 'Desarrollo Web'];
  budget = ['$300 - $500', '$600 - $1.000', '+ $1.100'];
  references = ['Instagram', 'Google', 'Recomendación', 'X (Twitter)', 'LinkedIn'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      services: [[], Validators.required],
      budget: ['', Validators.required],
      projectName: [''],
      description: ['', Validators.required],
      references: [[], Validators.required]
    });
  }

  toggleArrayValue(controlName: string, value: string) {
    const control = this.form.get(controlName);
    const current = control?.value || [];
    if (current.includes(value)) {
      control?.setValue(current.filter((v: string) => v !== value));
    } else {
      control?.setValue([...current, value]);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}

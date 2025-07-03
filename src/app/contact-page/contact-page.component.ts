import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {

  form: FormGroup;
  showOtherReference = false;

  services = ['Diseño UX/UI', 'Logo y Branding', 'Diseño Gráfico', 'Desarrollo Web'];
  budget = ['$300 - $500', '$600 - $1.000', '+ $1.100'];
  references = ['Instagram', 'Google', 'Recomendación', 'X (Twitter)', 'LinkedIn', 'Otro'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      services: [[], Validators.required],
      budget: ['', Validators.required],
      projectName: [''],
      description: ['', Validators.required],
      references: [[], Validators.required],
      otherReference: ['']
    });
  }

  toggleArrayValue(controlName: string, value: string) {
    const control = this.form.get(controlName);
    const current = control?.value || [];

    if (value === 'Otro') {
      this.showOtherReference = !current.includes('Otro');
    }

    if (current.includes(value)) {
      control?.setValue(current.filter((v: string) => v !== value));
    } else {
      control?.setValue([...current, value]);
    }
  }

  onSubmit() {
    const formValue = {...this.form.value};

    if (formValue.references.includes('Otro') && formValue.otherReference) {
      // Remover "Otro" y agregar el texto ingresado
      formValue.references = formValue.references
        .filter((ref: string) => ref !== 'Otro')
        .concat(formValue.otherReference);
    }

    if (this.form.valid) {
      console.log(this.form.value);
    }
  }

}

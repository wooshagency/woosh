import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactFormRestService} from "../services/rest-services/contact-form-rest.service";

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

  constructor(private fb: FormBuilder,
              private contactService: ContactFormRestService) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      services: [[], Validators.required],
      budget: ['', Validators.required],
      projectName: [''],
      description: ['', Validators.required],
      references: [[], Validators.required],
      otherReference: [''],
      recaptchaToken: ['', Validators.required]
    });
  }

  onCaptchaResolved(token: string) {
    this.form.get('recaptchaToken')?.setValue(token);
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
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = { ...this.form.value };

    if (formValue.references.includes('Otro') && formValue.otherReference) {
      formValue.references = formValue.references
        .filter((ref: string) => ref !== 'Otro')
        .concat(formValue.otherReference);
    }

    if (this.form.valid) {
      this.contactService.sendContactForm(formValue).subscribe({
        next: (response) => {
          console.log('Formulario enviado con éxito:', response);
          this.form.reset();
          this.showOtherReference = false;
        },
        error: (error) => {
          console.error('Error al enviar formulario:', error);
        }
      });
    }
  }

  copyEmail(emailElement: HTMLElement): void {
    const email = emailElement.textContent?.trim() || '';

    navigator.clipboard.writeText(email).then(() => {
      console.log('Correo copiado al portapapeles:', email);
    }).catch(err => {
      console.error('Error al copiar:', err);
    });
  }

}

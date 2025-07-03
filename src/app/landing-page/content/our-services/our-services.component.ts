import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.scss']
})
export class OurServicesComponent {

  constructor(private router: Router) { }

  handleContactBtn() {
    this.router.navigate(['/contact-page']).then(() => {
        window.scrollTo({top: 0, behavior: 'instant'});
    })
  }

}

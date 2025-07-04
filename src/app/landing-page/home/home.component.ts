import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private router: Router) { }

  handleContactBtn() {
    this.router.navigate(['/contact-page']).then(() => {
      window.scrollTo({top: 0, behavior: 'instant'});
    })
  }

}

import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-next-level',
  templateUrl: './next-level.component.html',
  styleUrls: ['./next-level.component.scss']
})
export class NextLevelComponent {

  constructor(private router: Router) { }

  handleContactBtn() {
    this.router.navigate(['/contact-page']).then(() => {
      window.scrollTo({top: 0, behavior: 'instant'});
    })
  }

}

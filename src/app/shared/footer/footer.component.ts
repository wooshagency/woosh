import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) { }

  handleLogoClick() {
    if (this.router.url === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.router.navigate(['/']).then(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
    }
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  openLink() {
    window.open('https://www.behance.net/wooshagency', '_blank');
  }

}

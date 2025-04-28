import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  scrolled = false; // Para manejar el estado de scroll
  isMenuOpen = false; // Estado del menú (abierto o cerrado)
  bgBlack = false; // Cambia el color del background

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll es mayor a 50px, cambiamos el estado a true
    this.scrolled = window.scrollY > 600;
  }

  toggleMenu() {
    if (!this.isMenuOpen) {
      // Abrir: primero cambiar color, después abrir menú
      this.bgBlack = true;
      setTimeout(() => {
        this.isMenuOpen = true;
      }, 300); // Espera lo que dure la transición del background
    } else {
      // Cerrar: primero esconder menú, después cambiar color
      this.isMenuOpen = false;
      setTimeout(() => {
        this.bgBlack = false;
      }, 300);
    }
  }
}

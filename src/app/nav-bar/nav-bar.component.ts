import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  scrolled = false; // Para manejar el estado de scroll
  isMenuOpen = false; // Estado del menú (abierto o cerrado)
  bgMidnight = false; // Controla el color del background

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el scroll es mayor a 50px, cambiamos el estado a true
    this.scrolled = window.scrollY > 500;
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      // Si el menú está abierto y lo vamos a cerrar
      this.isMenuOpen = false;
      if (this.bgMidnight) {
        // Agrega un delay antes de cambiar la clase para el fondo de la barra de navegación
        setTimeout(() => {
          this.bgMidnight = false;
        }, 300); // Retraso que coincide con la duración de la transición
      }
    } else {
      // Si el menú está cerrado, lo abrimos y cambiamos el fondo inmediatamente
      if (!this.scrolled){
        setTimeout( () => {
          this.isMenuOpen = true;
        }, 300);
      } else {
        this.isMenuOpen = true;
      }
      this.bgMidnight = true;
    }
  }
}

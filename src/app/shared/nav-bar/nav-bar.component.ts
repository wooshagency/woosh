import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  isLandingPage = false;
  scrolled = false; // Para manejar el estado de scroll
  isMenuOpen = false; // Estado del menú (abierto o cerrado)
  bgBlack = false; // Cambia el color del background

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkRoute();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.checkRoute();
      });

    window.addEventListener('scroll', this.onScroll, true);
  }

  checkRoute(): void {
    const currentUrl = this.router.url;
    this.isLandingPage = currentUrl === '/' || currentUrl.includes('landing-page');
  }

  onScroll = (): void => {
    if (!this.isLandingPage) return;
    this.scrolled = window.scrollY > 0;
  };

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

  handleLogoClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}

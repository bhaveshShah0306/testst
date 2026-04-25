import { Component, HostListener, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMenuCollapsed = true;
  isRegistrationMenuOpen  = false;  
  isMobileView = false;
  private globalClickListener: any;
  private routerSub: Subscription | null = null;
  private mediaQueryListener: any;

  constructor(private router : Router, private el: ElementRef){}

  ngOnInit(): void {
    this.globalClickListener = (event: Event) => {
      const clickedInside = this.el.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.isRegistrationMenuOpen = false;
        this.isMenuCollapsed = true;
      }
    };
    window.addEventListener('click', this.globalClickListener, true);
    window.addEventListener('touchstart', this.globalClickListener, true);

    // Close menu on any navigation start to ensure submenu does not remain open
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isRegistrationMenuOpen = false;
        this.isMenuCollapsed = true;
      }
    });

    // Monitor viewport changes for mobile detection
    const mobileMediaQuery = window.matchMedia('(max-width: 992px)');
    this.updateMobileView(mobileMediaQuery.matches);
    
    // Listen for media query changes (e.g., device rotation)
    this.mediaQueryListener = (e: MediaQueryListEvent) => {
      this.updateMobileView(e.matches);
    };
    mobileMediaQuery.addListener(this.mediaQueryListener);
  }

  private updateMobileView(isMobile: boolean): void {
    this.isMobileView = isMobile;
    // Ensure menu is collapsed when switching to desktop view
    if (!isMobile) {
      this.isMenuCollapsed = true;
      this.isRegistrationMenuOpen = false;
    }
  }
login(){
  this.router.navigateByUrl('/login')
}
onclicklogo(){
  this.router.navigateByUrl('/Home')
}
  toggleRegistrationMenu(event: Event) {
    event.stopPropagation(); 
    this.isRegistrationMenuOpen = !this.isRegistrationMenuOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const clickedInside = this.el.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.isRegistrationMenuOpen = false;
      this.isMenuCollapsed = true;
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent) {
    this.isRegistrationMenuOpen = false;
    this.isMenuCollapsed = true;
  }

  closeMenu() {
    this.isMenuCollapsed = true;
    this.isRegistrationMenuOpen = false;
  }

  ngOnDestroy(): void {
    if (this.globalClickListener) {
      window.removeEventListener('click', this.globalClickListener, true);
      window.removeEventListener('touchstart', this.globalClickListener, true);
    }
    if (this.mediaQueryListener) {
      const mobileMediaQuery = window.matchMedia('(max-width: 992px)');
      mobileMediaQuery.removeListener(this.mediaQueryListener);
    }
    if (this.routerSub) {
      this.routerSub.unsubscribe();
      this.routerSub = null;
    }
  }

navigateToMenteeForm(){
  this.closeMenu();
  this.router.navigateByUrl('/mentee-registration');
}
navigateToMentorForm(){
  this.closeMenu();
  this.router.navigateByUrl('/mentor-registration');
}
openRegistrationMenu() {
  this.isRegistrationMenuOpen = true;
}
closeRegistrationMenu() {
  this.isRegistrationMenuOpen = false;
}

}

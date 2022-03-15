import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
} from '@angular/router';
import { AuthService } from './user/auth.service';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';
@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }
  get isDispalyed(): boolean {
    return this.messageService.isDisplayed;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    router.events.subscribe((routeEvent: Event) => {
      this.checkRouterEvent(routeEvent);
    });
  }
  checkRouterEvent(routeEvent: Event): void {
    if (routeEvent instanceof NavigationStart) {
      this.loading = true;
    }
    if (
      routeEvent instanceof NavigationEnd ||
      routeEvent instanceof NavigationCancel ||
      routeEvent instanceof NavigationError
    ) {
      this.loading = false;
    }
  }
  displayMessages(): void {
    this.router.navigate([{ outlets: { popup: ['messages'] } }]);
    this.messageService.isDisplayed = true;
  }
  hideMessages(): void {
    this.messageService.isDisplayed = false;
    this.router.navigate([{ outlets: { popup: null } }]);
  }
  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/welcome');
    console.log('Log out');
  }
}

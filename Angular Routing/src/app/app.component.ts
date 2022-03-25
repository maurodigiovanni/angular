import { Component } from '@angular/core';
import {
  Router,
  Event,
  NavigationStart,
  NavigationEnd,
  NavigationError,
  NavigationCancel,
} from '@angular/router';
import { AuthService } from './pages/user/auth.service';
import { slideInAnimation } from './app.animation';
import { MessageService } from './pages/messages/message.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [slideInAnimation],
})
export class AppComponent {
  pageTitle = 'Acme Product Management';
  loading = true;

  title = 'bpmn-js-angular';
  diagramUrl =
    'https://cdn.staticaly.com/gh/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn';
  importError?: Error;

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
  handleImported(event) {
    const { type, error, warnings } = event;

    if (type === 'success') {
      console.log(`Rendered diagram (%s warnings)`, warnings.length);
    }

    if (type === 'error') {
      console.error('Failed to render diagram', error);
    }

    this.importError = error;
  }
}

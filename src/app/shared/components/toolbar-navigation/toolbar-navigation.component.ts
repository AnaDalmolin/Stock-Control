import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: []
})
export class ToolbarNavigationComponent {

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  handleLogout(): void {
    this.cookieService.delete('USER_INFO');
    this.router.navigate(['/home']);
  }
}

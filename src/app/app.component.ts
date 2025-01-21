import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'stock-control';

  constructor(
    private primeNgConfig: PrimeNGConfig,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }
}

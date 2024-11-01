import { ShoppingCart } from './../models/shopping-cart';
import { Observable } from 'rxjs/Observable';
import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { AppUser } from './../models/app-user';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-navbar',
  templateUrl: './bootstrap-navbar.component.html',
  styleUrls: ['./bootstrap-navbar.component.css']
})
export class BootstrapNavbarComponent implements OnInit{
	appUser: AppUser;
  shoppingCartItemCount: number; 
  cart$: Observable<ShoppingCart>;
  
  constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) {
  	};
  
  async ngOnInit() { 
    this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    this.cart$ = await this.shoppingCartService.getCart();
  }
    
  logout() {
  	this.auth.logout();
  }

}

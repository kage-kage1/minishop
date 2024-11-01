import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Order } from './../models/order';
import { AuthService } from './../auth/auth.service';
import { OrderService } from './../order/order.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from './../models/shopping-cart';
import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit{ 
  cart$: Observable<ShoppingCart>;
  
  constructor(private shoppingCartService: ShoppingCartService) {}
  
  async ngOnInit() { 
    this.cart$ = await this.shoppingCartService.getCart();
  }
}

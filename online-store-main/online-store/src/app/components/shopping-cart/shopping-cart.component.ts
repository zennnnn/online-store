import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-items';
import { ShoppingCart } from '../models/shopping-cart';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items: CartItem[] = new Array<CartItem>();
  grossTotal: number = 0;
  itemsTotal: number = 0;

  public updateFrom(src: ShoppingCart) {
    this.items = src.items;
  }
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService['items'].subscribe(data => {
      this.items=data;
    })
  }

}

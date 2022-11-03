import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
import { CartItem } from './components/models/cart-items';
import { ShoppingCart } from './components/models/shopping-cart';
import { CartService } from './components/services/cart.service';
import { Product } from './components/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'online-store';

  public cart: Observable<ShoppingCart>;
  public cartItems: CartItem[];
  private _cartSubscription: Subscription;
  public itemCount: number;
  public routeFound: boolean = false;
  private _event$: Subscription;
  private _routes: any[];
  

  constructor(private _router: Router, private _cartService: CartService) {

    this._routes = this._router.config
      .map((route) => route.path)
      .filter((route) => route != '**');
    console.log(this._routes);
    this._event$ = this._router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
        let url = event.url.split('/')[1];
        console.log(url);
        this._routes.filter((route: string) => {
          if (route.split('/')[0] == url) {
            this.routeFound = true;
          }
        });
      }
    });
  }
  public ngOnInit(): void {
    this.cart = this._cartService.get();
    this._cartSubscription = this.cart.subscribe((cart) => {
      this.itemCount = cart.items
        .map((x) => x.quantity)
        .reduce((p, n) => p + n, 0);
    });
  }

  public ngOnDestroy(): void {
    if (this._cartSubscription) {
      this._cartSubscription.unsubscribe();
    }
  }
}

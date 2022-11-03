import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/about-us', pathMatch: 'full'},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'product/:productId', component: ProductDetailsComponent },
  { path: 'about-us/product', redirectTo: '/product' },
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent, ProductListComponent, ProductDetailsComponent, ShoppingCartComponent, ProductComponent, PageNotFoundComponent, ContactUsComponent];

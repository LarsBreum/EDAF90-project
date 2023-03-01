import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewBookComponent } from './view-book/view-book.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cart', component: CartComponent },
  { path: 'view-book', component: ViewBookComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

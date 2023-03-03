import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewBookComponent } from './view-book/view-book.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      book_ids: [
        '0596007124',
        '0321992784',
        //'0321204667',
        '0321125215',
        '0321334876',
        '0321751043',
        '0321712943',
        '0321832051',
        //'0321842684',
        //'0321701275',
      ],
    },
  },
  { path: 'cart', component: CartComponent },
  { path: 'view-book', component: ViewBookComponent },
  { path: 'order-confirmation', component: OrderConfirmationComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}

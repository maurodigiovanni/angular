import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
 import { AuthGuard } from './user/auth.guard';
 import { SelectiveStrategy } from './selective-strategy.service';


@NgModule({
 // imports: [RouterModule.forRoot(ROUTES, { enableTracing: true })],
  imports: [
    RouterModule.forRoot([
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'products',
    canActivate: [AuthGuard],
    //https://app.pluralsight.com/course-player?clipId=40eb0ee9-4330-4e98-af47-c429fd760174
    data: { preload: false },
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductModule)
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
  ], {preloadingStrategy: SelectiveStrategy })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
// enableTracing: true

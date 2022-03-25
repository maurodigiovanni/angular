import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './pages/products/product-data';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
/* Feature Modules */
// import { BpmnCamundaModule } from './bpmn-camunda/bpmn-camunda.module.ts.back';
import { UserModule } from './pages/user/user.module';
import { MessageModule } from './pages/messages/message.module';
import { CustomerComponent } from './pages/form-demo/customer.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(ProductData, {
      // rootPath: '/api/',
      passThruUnknownUrl: true,
      delay: 1000,
    }),
    UserModule,
    MessageModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

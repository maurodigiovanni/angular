import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppData } from './app-data';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
/* Feature Modules */
// import { BpmnCamundaModule } from './bpmn-camunda/bpmn-camunda.module.ts.back';
import { UserModule } from './pages/user/user.module';
import { MessageModule } from './pages/messages/message.module';
import { CustomerComponent } from './pages/form-demo/customer.component';
import { ModalContainerComponent } from './pages/home/modal-container.component';
import { PhotoDetailComponent } from './pages/photo-detail/photo-detail.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ModalContainerComponent,
    PhotoDetailComponent,
    PageNotFoundComponent,
    CustomerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AppData, {
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

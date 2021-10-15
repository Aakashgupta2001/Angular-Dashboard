import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IgxIconModule, IgxNavbarModule } from 'igniteui-angular';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { HttpClientModule } from '@angular/common/http';
import { GlobalServicesService } from './services/global-services.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ButtonComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    IgxIconModule,
    IgxNavbarModule,
    HttpClientModule,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

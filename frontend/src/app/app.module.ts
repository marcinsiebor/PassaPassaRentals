import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MyAvailableCarsComponent } from './my-available-cars/my-available-cars.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { ContactsComponent } from './contacts/contacts.component';
import { PassaAiComponent } from './passa-ai/passa-ai.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MyAvailableCarsComponent,
    MyReservationsComponent,
    AboutUsComponent,
    LoginComponent,
    SignUpComponent,
    CarInfoComponent,
    ContactsComponent,
    PassaAiComponent
  ],
  imports: [
    BrowserModule,
    NgbDropdownModule,
    RouterModule.forRoot([
      { path: 'my-reservations', component: MyReservationsComponent},
      { path: 'my-available-cars', component: MyAvailableCarsComponent},
      { path: 'about-us', component: AboutUsComponent},
      { path: 'sign-up', component: SignUpComponent},
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent},
      { path: 'contact', component: ContactsComponent},
      { path: 'passa-ai', component: PassaAiComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ]),
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: "toast-top-right",
      preventDuplicates: true,
      timeOut: 2000,
    }),
    ToastModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RegisterComponent} from './registration/register.component';
import {PageNotFoundComponent} from './pageNotFound/pagenotfound.component';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {RouterModule} from '@angular/router';
import {AppRoutes} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
    RouterModule.forRoot(AppRoutes),ReactiveFormsModule,HttpClientModule
   ],
  declarations: [ AppComponent, HelloComponent,RegisterComponent,PageNotFoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

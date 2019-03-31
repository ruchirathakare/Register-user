 import {Routes} from '@angular/router';
 import {AppComponent} from './app.component';
 import {RegisterComponent} from './registration/register.component';
 import {PageNotFoundComponent} from './pageNotFound/pagenotfound.component';


 export const AppRoutes : Routes = [
   { path:' ', redirectTo:'register', pathMatch:'full'},
   { path:'register', component:RegisterComponent},
  //  { path:'**', component:PageNotFoundComponent}
 ]
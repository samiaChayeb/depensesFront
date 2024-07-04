import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RevenuComponent } from './components/revenu/revenu.component';
import { UpdateDepenseComponent } from './components/update-depense/update-depense.component';
import { UpdateRevenuComponent } from './components/update-revenu/update-revenu.component';
import { DepenseComponent } from './components/depense/depense.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'dashboard' , canActivate: [AuthGuard] , component:DashboardComponent},
  { path: 'register', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {path:"depense", canActivate: [AuthGuard] , component:DepenseComponent},
  {path:"depense/all" , canActivate: [AuthGuard] , component:DepenseComponent},
  
  { path:'',redirectTo:'dashboard', canActivate: [AuthGuard] ,pathMatch:'full'},
  {path:"revenu", canActivate: [AuthGuard] , component:RevenuComponent},
  
/*   
  
  {path:"revenu/:id/edit", component:UpdateRevenuComponent},
  {path:"depense/:id/edit", component:UpdateDepenseComponent},
   { path: 'signup', component: DashboardComponent ,
    children:[{ path:'',component:SignupComponent}]
  },
  { path: 'login', component: DashboardComponent ,
    children:[{ path:'',component:LoginComponent}]
  },
  { path:'',redirectTo:'/login',pathMatch:'full'},
  
  {path:"depense", component:DepenseComponent},
  {path:"", component:DashboardComponent},
  {path:"revenu", component:RevenuComponent},
  {path:"revenu/:id/edit", component:UpdateRevenuComponent},
  {path:"depense/:id/edit", component:UpdateDepenseComponent}
   */
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

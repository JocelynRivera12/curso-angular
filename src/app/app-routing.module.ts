import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColoresComponent } from './colores/colores.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {​​
    path: 'login',

    component: LoginComponent
  }​​,
  {​​
    path: 'home',
    component: HomeComponent
  },
  {​​
    path: 'colores',
    component: ColoresComponent
  },
  {​​
    path: 'colores/:id',
    component: ColoresComponent
  },
  {
    path: 'list',
    component: ListComponent
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

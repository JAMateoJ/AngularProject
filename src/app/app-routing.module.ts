import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [

{
  //Aplicacion de lazzyloading
  path: 'unicorns',
  loadChildren: () => import('./entities/unicorns/unicorns.module').then(m => m.UnicornsModule), //m de Module
  canActivate:[AuthenticationGuard]
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
},
{
  //Para cuando accedamos a la URL BASE
  path: '',
  redirectTo: 'welcome',
  pathMatch: 'full' //Es necesario 
},
{
  path: 'welcome',
  loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
  canActivate:[AuthenticationGuard]
},
{
  path: '**', //Comodin o Wildcard en caso de que no se encuentre ninguna ruta redireccionara al login
  redirectTo: 'welcome'
}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      scrollPositionRestoration: 'enabled' //Si tenemos un componente largo nos manda a la parte superior
    }) 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

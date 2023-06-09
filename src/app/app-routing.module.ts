import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ProdutoinfoComponent } from './pages/produtoinfo/produtoinfo.component';

const routes: Routes = [
  {
    path:"",
    pathMatch: "full",
    redirectTo: "home" //home = pagina de login
  },
  {path:"home", component: HomeComponent},
  {path:"menu", component: MenuComponent},
  {path:"produto/:id", component: ProdutoinfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

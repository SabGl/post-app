import { NgModule } from '@angular/core';
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {PostPageComponent} from "./post-page/post-page.component";
import {AuthGuard} from "./guards/auth.guard";
import {AdminLayoutComponent} from "./admin/shared/components/admin-layout/admin-layout.component";
import {LoginPageComponent} from "./admin/login-page/login-page.component";

const routes: Routes = [
  {
    path: 'main', loadChildren: () => import("./admin/admin.module").then(x => x.AdminModule),canActivate: [AuthGuard]
  },
  {
    path: '', component: AdminLayoutComponent, children: [
      {path: '', redirectTo: '/login', pathMatch: "full"},
      {path: 'login', component: LoginPageComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

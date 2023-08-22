import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MainLayoutComponent} from "../shared/components/main-layout/main-layout.component";
import {HomePageComponent} from "../home-page/home-page.component";
import {AuthGuard} from "../guards/auth.guard";
import {PostPageComponent} from "../post-page/post-page.component";


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path:'', component: MainLayoutComponent, children: [
          {path: '', redirectTo: 'main/posts', pathMatch: "full"},
          {path: 'posts', component: HomePageComponent, canActivate: [AuthGuard]},
          {path: 'post/:id', component: PostPageComponent, canActivate: [AuthGuard]},
        ]
      }
    ]),
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminLayoutComponent,
    LoginPageComponent,
  ]
})

export class AdminModule {

}

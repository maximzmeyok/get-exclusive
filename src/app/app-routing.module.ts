import { MainPageComponent } from './pages/main-page/main-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: WelcomePageComponent },
  {
    path: 'main', component: MainLayoutComponent, children: [
      { path: 'feed', component: MainPageComponent },
      { path: 'post/:id', component: PostPageComponent },
    ]
  },
  {
    path: 'admin', loadChildren: () => import('../admin/admin.module').then(module => module.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* const routes: Routes = [
  {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'main', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    {path: 'selection', component: SelectionComponent},
    {path: 'user', component: UserInfoPageComponent},
    {path: 'hero/:id', component: HeroInfoPageComponent},
    {path: 'battle', component: BattlePageComponent, canActivate: [BattleGuard]},
  ]},
]; */
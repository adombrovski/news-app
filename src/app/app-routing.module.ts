import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewStoryComponent } from './home/viewStory/view-story/view-story.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "story/:id", component: ViewStoryComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

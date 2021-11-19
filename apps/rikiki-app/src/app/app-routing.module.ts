import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { HomeComponent } from 'libs/ui/src/lib/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
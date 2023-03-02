import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlmapperComponent } from './urlmapper/urlmapper.component';

const routes: Routes = [{
  path: 'book-club', component: UrlmapperComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

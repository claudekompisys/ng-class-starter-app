import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Route[] = [
{
  path: '',
  component: IndexComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'contact',
  component: ContactComponent
}];

@NgModule({
  declarations: [
    IndexComponent, 
    AboutComponent, 
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class HomeModule { }

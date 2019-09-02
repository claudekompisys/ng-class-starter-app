import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { Four0fourComponent } from './four0four/four0four.component';

const routes: Route[] = [{
  path: '404',
  component: Four0fourComponent
}];

@NgModule({
  declarations: [
    Four0fourComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ErrorModule { }

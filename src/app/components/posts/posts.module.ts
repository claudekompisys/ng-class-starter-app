import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [AddComponent, EditComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }

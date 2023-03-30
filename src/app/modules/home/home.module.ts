import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//components
import { ComponentsComponent } from './components/components.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoButtonDeleteAllComponent } from './components/todo-botton-delete-all/todo-botton-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//pages
import { HomeComponent } from './pages/home/home.component';
import { TodoButtonSaveComponent } from './components/todo-botton-save/todo-botton-save.component';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    TodoButtonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent,
    TodoButtonSaveComponent,
    TodoFooterComponent,  
   
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }

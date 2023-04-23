
import { Component, DoCheck, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { TaskList } from '../../model/task-list';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[ ]');


  constructor() { }

  ngDoCheck(): void {
    this.setLocalStorate();
  }


  public setEmitTaskList(event: string): void {

    this.taskList.push({ task: event, checked: false })
  }

  public deleteItemTaskList(event: number): void {
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(): void {
    const confirmDelete = window.confirm("Deseja realmente excluir todas as tarefas?");
    if (confirmDelete) {
      this.taskList = [];
    }
  }

  public validationInput(event: string, index: number): void {
    if (!event.length) {
      const confirm = window.confirm("Deseja deletar a tarefa?");
      if (confirm) {
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorate(): void {
    if (this.taskList) {
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

  exportarPDF() {
    const doc = new jsPDF();

    doc.text('ESSA É SUA LISTA DE TAREFAS ', 50, 10);
    doc.text('---------------------------------------------------------------------------------', 20, 20);

    let y = 30;
    this.taskList.forEach((taskList) => {
      doc.text(taskList.task, 20, y);
      y += 10;
    });
    doc.save('lista-de-tarefas.pdf');
  }

}




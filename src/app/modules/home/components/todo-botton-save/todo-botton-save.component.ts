import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
selector: 'app-todo-button-save',
templateUrl: './todo-botton-save.component.html',
styleUrls: ['./todo-botton-save.component.scss']
})

export class TodoButtonSaveComponent implements OnInit, AfterViewInit {

@ViewChild('content', { static: true }) private contentElement!: ElementRef;

constructor() { }

ngOnInit(): void {
}

ngAfterViewInit(): void {
this.printPDF();
}

public printPDF(): void {
const content = this.contentElement.nativeElement;
html2canvas(content).then(canvas => {
const pdf = new jsPDF('p', 'pt', 'a4');
const imgWidth = 595.28; // 210mm (A4 width) converted to pt
const imgHeight = canvas.height * imgWidth / canvas.width;
const imageData = canvas.toDataURL('image/png');
pdf.addImage(imageData, 'PNG', 0, 0, imgWidth, imgHeight);
pdf.save('Lista de tarefas.pdf');
});
}
}
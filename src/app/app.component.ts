import { Component, OnInit } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-root',
  template: `
    <h1>AppComponent displays</h1>
    <button (click)="download()">download PDF</button>
  `,
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  documentDefinition = {
    content: [
      {
        table: {
          widths: [100, '*', 200, '*'],
          body: [
            ['width=100', 'star-sized', 'width=200', 'star-sized'],
            [
              'fixed-width cells have exactly the specified width',
              { text: 'nothing interesting here', italics: true, color: 'gray' },
              { text: 'nothing interesting here', italics: true, color: 'gray' },
              { text: 'nothing interesting here', italics: true, color: 'gray' },
            ],
          ],
        },
      },
    ],
    pageSize: 'A4',
    pageOrientation: 'landscape',
    pageMargins: [20, 30, 20, 30],
  };
  download() {
    pdfMake.createPdf(this.documentDefinition).download(`myPDF.pdf`);
  }
}

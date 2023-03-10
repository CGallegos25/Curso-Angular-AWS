import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import * as XLSX from 'xlsx';

declare var require: any;

const pdfMake = require('pdfmake/build/pdfmake.js');
const pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { OptionsExport } from '../../interfaces/options-export';

@Component({
  selector: 'amb-descargar',
  templateUrl: './descargar.component.html',
  styleUrls: ['./descargar.component.css'],
})
export class DescargarComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: OptionsExport,
    private readonly reference: MatBottomSheetRef<DescargarComponent>
  ) {

  }

  ngOnInit(): void {}

  export(event: any, option: string, action: string = '') {
    event.preventDefault();
    switch(option) {
      case 'pdf':
        this.exportToPDF(action);
        break;
      case 'excel':
        this.exportToExcel();
        break;
    }
  }

  exportToPDF(action: string) {
    const dataToExport = this.data.content;
    const informationFormatted = this.getInformationFormatted(dataToExport);
    const docGenerated = pdfMake.createPdf(informationFormatted);
    switch(action){
      case 'open':
        docGenerated.open();
        break;
      case 'download':
        docGenerated.download();
        break;
      case 'print':
        docGenerated.print();
        break;
    }
  }

  exportToExcel() {
    const dataToExport = this.data.content;
    const sheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const book: XLSX.WorkBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(book, sheet, this.data.title);
    XLSX.writeFile(book, this.data.fileName + '.xlsx');

    this.reference.dismiss();

  }

  getInformationFormatted(dataToExport: any) {
    const dataFormatted = {
      content: [
        { text: this.data.title, bold: true, fontSize: 20, alignment: 'center', margin: [0,0,0,20] }
      ],
    };

    this.addHeadersToPDF(dataFormatted, dataToExport[0]);
    this.addItemsToPDF(dataFormatted, dataToExport);
    return dataFormatted;
  }

  addHeadersToPDF(dataFormatted: any, headerData: any) {
    const headersColumn = [];
    for(const prop in headerData) {
      headersColumn.push({text: prop, style: 'header'});
    }

    dataFormatted.content.push({columns: headersColumn});
  }

  addItemsToPDF(dataFormatted: any, contentData: any) {
    contentData.forEach((item: any) => {
      const items = [];
      for(const prop in item){
        items.push(item[prop]);
      }

      dataFormatted.content.push({columns: items});
    });
  }
}

import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class Paginator extends MatPaginatorIntl {
  itemsPerPageLabel = 'Items por página';
  nextPageLabel = 'Siguiente'
  previousPageLabel = 'Anterior';
  firstPageLabel = 'Primera Página';
  lastPageLabel = 'Última Página';
  constructor(){
    super();
  }

  getRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 de ' + length;
    }

    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIdex = startIndex < length ? Math.min(startIndex+pageSize, length) : startIndex + pageSize;
    return startIndex + 1 + ' - ' + endIdex + ' de ' + length;
  }
}

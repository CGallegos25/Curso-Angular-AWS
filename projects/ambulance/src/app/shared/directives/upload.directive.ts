
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ambUpload]'
})
export class UploadDirective {

  @Output() onHover: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onUpload: EventEmitter<File> = new EventEmitter<File>();

  @HostListener('dragover', ['$event']) dragover(evt: any): void {
   evt.preventDefault();
   this.onHover.emit(true);
  }

  @HostListener('dragleave', ['$event']) dragleave(evt: any): void {
    evt.preventDefault();
    this.onHover.emit(false);
  }

  @HostListener('drop', ['$event']) drop(evt: any): void {
    evt.preventDefault();
    this.onHover.emit(false);
    // Una ves que suelte el archivo o la imagen se va a guardar el archivo en esta constante
    const file: File = evt.dataTransfer.files[0];
    this.onUpload.emit(file);
  }

  constructor() { }

}

import { environment } from './../../../../environments/environment';
import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'amb-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit {
  @Input() photoByDefault = '';

  @ViewChild('photo') photo!: ElementRef;
  @ViewChild('file') file!: ElementRef;

  statusHover = false;
  isUsingWebCam = false;
  triggerSnapshot = new Subject();
  checkedWebCam = false;
  value !: File;
  onChange = (_: any) => {}
  onTouch = () => {}
  isDisabeld = false;

  constructor() {}

  ngOnInit(): void {}

  // Metodo de reactiveFormModule
  writeValue(file: File) {
    if (file){
      this.value = file;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  setDisabledState(state: boolean) {
    this.isDisabeld = state;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  changeHover(status: boolean) {
    this.statusHover = status;
  }

  fileUpload(file: File) {
    if (!file.type.startsWith('image/')) {
      return;
    }

    this.onTouch();
    this.onChange(file);

    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.photo.nativeElement.style.backgroundImage = `url(${dataBase64})`;
    };

    fr.readAsDataURL(file);
  }

  selectImage(evt: any) {
    const file: File = evt.target.files[0];
    this.fileUpload(file);
  }

  executeLoadImage() {
    this.file.nativeElement.click();
    return false;
  }

  changeOriginPhoto(evt: MatSlideToggleChange) {
    this.isUsingWebCam = !this.isUsingWebCam;
    this.checkedWebCam = !this.checkedWebCam;
  }

  takePhoto() {
    this.triggerSnapshot.next();
  }

  triggerAsObservable(): Observable<any> {
    return this.triggerSnapshot.asObservable();
  }

  capturePhotoFrontWebCam(webcamImage: WebcamImage) {
    fetch(webcamImage.imageAsDataUrl)
      .then((res) => res.arrayBuffer())
      .then((buffer) => new File([buffer], 'avatar', { type: 'image/jpg' }))
      .then((file) => this.fileUpload(file));

    this.isUsingWebCam = false;
    this.checkedWebCam = !this.checkedWebCam;
  }

  loadingPhoto(image: string) {
    this.photo.nativeElement.style.backgroundImage = `url(${image})`;
  }

  ngAfterViewInit(): void {
    if(this.photoByDefault){
      this.loadingPhoto(`${environment.pathPhotos}/${this.photoByDefault}`);
    }
  }
}

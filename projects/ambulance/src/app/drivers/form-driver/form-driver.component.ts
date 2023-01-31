import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Driver } from '../domain/driver';

@Component({
  selector: 'amb-form-driver',
  templateUrl: './form-driver.component.html',
  styleUrls: ['./form-driver.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormDriverComponent implements OnInit {
  title!: string;
  group!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) private data: Driver, private readonly reference: MatDialogRef<FormDriverComponent>) {
    this.title = data ? 'Edición' : 'Nuevo';
  }

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data?.id),
      nombre: new FormControl(this.data?.nombre, Validators.required),
    });
  }

  save() {
    const record = this.group.getRawValue();
    this.reference.close(record);
  }
}

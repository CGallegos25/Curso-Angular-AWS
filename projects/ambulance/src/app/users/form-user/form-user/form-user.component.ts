import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User, UserNode } from '../../domain/user';

@Component({
  selector: 'amb-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormUserComponent implements OnInit {
  title!: string;
  group!: FormGroup;
  roles = [
    { name: 'ADMIN_ROLE' },
    { name: 'USER_ROLE' }
  ];

  constructor(
    private readonly reference: MatDialogRef<FormUserComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: UserNode
  ) {
    this.title = data ? 'EDICIÓN' : 'NUEVO';
  }

  ngOnInit(): void {
    this.loadForm();

  }

  loadForm() {
    console.log(this.data);
    this.group = new FormGroup({
      id: new FormControl(this.data?.uid),
      nombre: new FormControl(this.data?.nombre, Validators.required),
      correo: new FormControl(this.data?.correo, [
        Validators.required,
        Validators.email,
      ]),
      roles: new FormControl([this.data?.rol]),
    });
    console.log(this.data?.rol);
    console.log(this.group.value);
    if (this.data) {
      this.group.addControl('password', new FormControl(''));
    } else {
      this.group.addControl(
        'password',
        new FormControl('', Validators.required)
      );
    }
  }

  save() {
    const record = this.group.value;
    this.reference.close(record);
  }
}

import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

export interface ModalData {
  id: string,
  title: string,
  text: string
}

const initialData: ModalData = {
  id: '',
  title: '',
  text: ''
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})

export class ModalComponent implements OnInit {
  data;

  constructor(
    @Inject(MAT_DIALOG_DATA) public _data: ModalData = initialData
  ) { }

  ngOnInit(): void {
    this.data = this._data;
  }

}

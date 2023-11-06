import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formulir-pemasukan',
  templateUrl: './formulir-pemasukan.component.html',
  styleUrls: ['./formulir-pemasukan.component.scss']
})
export class FormulirPemasukanComponent implements OnInit{
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-formulir-pengeluaran',
  templateUrl: './formulir-pengeluaran.component.html',
  styleUrls: ['./formulir-pengeluaran.component.scss']
})
export class FormulirPengeluaranComponent implements OnInit{
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      text: new FormControl<string | null>(null)
    });
  }


  onFileSelected($event: Event) {
    console.log(event)
  }
}

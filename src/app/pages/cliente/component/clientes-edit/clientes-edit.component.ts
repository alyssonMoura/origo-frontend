import { ClienteService } from './../../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup,FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css']
})
export class ClientesEditComponent implements OnInit {
  form: any = {
    name: null,
    email: null,
    data_nascimento: null,
    municipio_id:null
  };
  estados:any;
  municipios:any;
  planos:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  cliente: any;

  constructor(private router: Router,
    private route: ActivatedRoute, private clienteService: ClienteService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clienteService.get(id).subscribe((cliente) => {
      console.log(cliente);
      this.form=cliente;
      this.form.estado_id = cliente.estados.id;
      this.getEstados();
      this.getMunicipios();
    })
  }
  onSubmit(): void {
    const data : any = this.form;
    const id : any = data.id;
    console.log(data);
    this.clienteService.update(id, data).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
  getEstados(){
    this.clienteService.getEstados()
    .subscribe(
      data => {
        this.estados = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  getMunicipios(){
    let id = this.form.estado_id;
    this.clienteService.getMunicipios(id)
    .subscribe(
      data => {
        this.municipios = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  getPlanos(){
    this.clienteService.getPlanos()
    .subscribe(
      data => {
        this.planos = [data];
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}

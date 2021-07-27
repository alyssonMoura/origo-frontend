import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente.service';

@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {
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
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getEstados();
    this.getPlanos();
  }

  onSubmit(): void {
    const data : any = this.form;
    console.log(data);
    this.clienteService.create(data).subscribe(
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

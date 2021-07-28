import { Router } from '@angular/router';
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
    municipio_id:null,
    plano:[]
  };
  estados:any;
  municipios:any;
  planos:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private router: Router, private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.getEstados();
    this.getPlanos();
  }

  onChecked(e:any){
    if (e.target.checked) {
      this.form.plano.push(e.target.value);
      } else {
        this.form.plano = this.form.plano.filter((item: any) => {
          return item != e.target.value;
        });
      }
      console.log(this.form.plano);
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
        this.planos = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
  onReturn():void{
    this.router.navigate(["/cliente"]);
  }
}

import { ClienteService } from './../../cliente.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
  plano:any = [];
  estados:any;
  municipios:any;
  planos:any;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  cliente: any;

  constructor(private router: Router,
    private route: ActivatedRoute, private clienteService: ClienteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clienteService.get(id).subscribe((cliente) => {
      console.log(cliente);
      this.form=cliente;
      this.form.plano = this.plano;
      this.form.estado_id = cliente.estados.id;
      this.getEstados();
      this.getMunicipios();
      this.getPlanos();
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
  onChecked(e:any){
    if (e.target.checked) {
      console.log(e.target.value);
      this.form.plano.push(e.target.value);
      } else {
        this.form.plano = this.form.plano.filter((item: any) => {
          return item != e.target.value;
        });
      }
      console.log(this.form.plano);
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
        data.forEach((plano:any) => {
          plano.check=false;
          this.form.planos.forEach((item:any) => {
            if(plano.id ===item.id){
              this.form.plano.push(item.id);
              plano.check=true;
            }
            console.log(plano);
          });
        });
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

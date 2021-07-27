import { ClienteService } from './../../cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-show',
  templateUrl: './clientes-show.component.html',
  styleUrls: ['./clientes-show.component.css']
})
export class ClientesShowComponent implements OnInit {

  cliente: any;
  isFailed: boolean = false;
  errorMessage: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.clienteService.get(id).subscribe((cliente) => {
    this.cliente=cliente;
    })

  }
  onDelete(id: any) {
    this.clienteService.delete(id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/cliente']);
      },
      error => {
        console.log(error);
        this.isFailed = true;
        this.errorMessage = error.error.message;
      });
  }
  onReturn(): void{
    this.router.navigate(['/cliente']);
  }

}

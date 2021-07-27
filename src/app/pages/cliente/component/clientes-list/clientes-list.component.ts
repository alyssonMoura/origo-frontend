import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  clientes: any;
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.clienteService.getAll()
      .subscribe(
        data => {
          this.clientes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

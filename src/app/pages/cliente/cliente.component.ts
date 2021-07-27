import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: any;
  constructor(private router: Router) { }

  ngOnInit(): void {}

  navigateClienteCreate(): void {
    this.router.navigate(["cliente/create"]);
  }
}

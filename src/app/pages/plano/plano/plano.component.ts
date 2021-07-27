import { Component, OnInit } from '@angular/core';
import { PlanoService } from '../plano.service';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.component.html',
  styleUrls: ['./plano.component.css']
})
export class PlanoComponent implements OnInit {

  planos: any;
  constructor(private planoService: PlanoService) { }

  ngOnInit(): void {
    this.getPlanos();
  }

  getPlanos(){
    this.planoService.getPlanos()
    .subscribe(
      data => {
        this.planos = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }
}

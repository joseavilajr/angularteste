import { iproduto } from './../../produto';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import MenuService from 'src/app/service/produto.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

produto!: iproduto[];

constructor(private service : MenuService, private router: Router) {}

  ngOnInit(): void {
    this.service.getProdutos().subscribe(dados => {
      this.produto = dados;
    })
  }

  fazerPedido(produtoId: number){
    //alert(produtoNome);
    this.router.navigate(['/produto/'+produtoId]);
  }

}

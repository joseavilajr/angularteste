import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { iproduto } from 'src/app/produto';
import MenuService from 'src/app/service/produto.service';

@Component({
  selector: 'app-produtoinfo',
  templateUrl: './produtoinfo.component.html',
  styleUrls: ['./produtoinfo.component.scss']
})
export class ProdutoinfoComponent implements OnInit {

  id!: number;
  produto!: iproduto;

  constructor(private service : MenuService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit(): void {
   this.service.getProdutoId(this.id).subscribe(dados =>{
    this.produto = dados;
   })
  }

  comprarProduto(element: iproduto){
      alert("Você acabou de comprar "+this.produto.produto+" por "+this.produto.preco+"R$. Volte Sempre!")
      this.router.navigate(['/menu']);
  }

}

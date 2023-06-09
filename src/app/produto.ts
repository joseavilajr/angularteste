export class iproduto {
   id: number;
   produto: string;
   preco: number;
   imagem: string;
   produtora: string;
   quantidade: string;

  constructor(id:number, produto:string, preco:number, imagem:string, produtora:string, quantidade:string){
    this.id = id;
    this.produto = produto;
    this.preco = preco;
    this.imagem = imagem;
    this.produtora = produtora;
    this.quantidade = quantidade;
  }
}

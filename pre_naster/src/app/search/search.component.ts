import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Welcome3 } from '../conternito_module';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})
export class SearchComponent {
  prodotto !: string;
  obsprod !: Observable <Welcome3>;
  ris : Product [] = []
Product: any;

  constructor(public http : HttpClient){

  }
  cerca(prodotti:HTMLInputElement):void{
    this.prodotto = prodotti.value;
    this.obsprod = this.searchprod((this.prodotto));
    this.obsprod.subscribe((data:Welcome3) => {this.ris=data.products})
  }

  searchprod(query:string){
    const url=`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${query}&page_size=2&json=true`
    let obsprod = this.http.get<Welcome3>(url);
      return obsprod;
  }
}

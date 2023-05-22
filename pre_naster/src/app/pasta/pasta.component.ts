import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Welcome3 } from '../conternito_module';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Welcome4 } from '../contenuto1.model';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.component.html',
  styleUrls: ['./pasta.component.css']
})
export class PastaComponent {
  prodotto !: string;
  obsprod !: Observable <Welcome4>;
  ris !: Product 
Product: any;
  
  constructor(public http : HttpClient, private route: ActivatedRoute){
    this.route.paramMap.subscribe(this.getrouteParam)
  }
  getrouteParam = (params:ParamMap) =>
  {
    //@ts-ignore
    this.prodotto = params.get('_id');
    this.obsprod = this.Getprod(this.prodotto);
    this.obsprod.subscribe((data:Welcome4) => {this.ris=data.product})

  }
  Getprod(id:string ){
    const url=` https://world.openfoodfacts.org/api/v0/product/${id}`
    return this.http.get<Welcome4>(url)
  }
}

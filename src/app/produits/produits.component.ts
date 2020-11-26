import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:String[];
  constructor() { 
    this.produits = ["PC Asus", "Imprimante Epson", "Tablette Samsung"];
  }

  ngOnInit(): void {
  }

}

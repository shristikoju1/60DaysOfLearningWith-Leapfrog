import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

// public products: any;

export class ProductComponent {


  public products = [
    {
      id: 1001,
      title: "Iphone",
      content: 'This is apple product'
    },
    {
      id: 1002,
      title: "Samsung Galaxy",
      content: 'This is samsung product'
    },
    {
      id: 1003,
      title: "Oppo Pro 2",
      content: 'This is Oppo product'
    }
  ]
}

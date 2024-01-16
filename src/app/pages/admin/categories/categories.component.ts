import { Component } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent {

  product$:Observable<any>;

  constructor(private prodycrSrv: ProductService) {
    this.product$ = this.prodycrSrv.getCategory().pipe(
      map((item: any) => {
        return item.data;
      })
    );
  }

  getAllCategory() {

  }
}

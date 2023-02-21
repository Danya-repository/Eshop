import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductInterface} from "../../../shared/models/product.interface";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  products: ProductInterface[] = [];
  $productsSub!: Subscription;

  constructor(private activateRouted: ActivatedRoute) { }

  ngOnInit(): void {
    this.$productsSub = this.activateRouted.data.subscribe(productsPayload => {
      this.products = productsPayload['products'];
    })
  }

  ngOnDestroy(): void {
    this.$productsSub.unsubscribe();
  }
}

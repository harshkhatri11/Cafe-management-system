import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-bill-products',
  templateUrl: './view-bill-products.component.html',
  styleUrls: ['./view-bill-products.component.scss']
})
export class ViewBillProductsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'category', 'price', 'quantity', 'total'];
  dataSource: any;
  data: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogdata: any,
    public dialogRef: MatDialogRef<ViewBillProductsComponent>
  ) { }

  ngOnInit() {
    this.data = this.dialogdata.data;
    this.dataSource = JSON.parse(this.dialogdata.data.productDetails)
  }
}

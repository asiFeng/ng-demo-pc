import { Component, OnInit } from '@angular/core';
import { products } from '../../common/product.js';


@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
	products = products;

	shareProductInfo ={
		name: '',
		description: '',
		price: 0
	};
	isVisible = false;

	isNotifyVisible = false;

	constructor() { }

	ngOnInit(): void {
	}

	share( info ){
		this.shareProductInfo = info;
		this.isVisible = true;	
	}

	handleCancel( prop ){
		console.log( prop);
		
		this[prop] = false;
	}
	handleOk( prop ){
		this[prop] = false;
	}

	onNotify(){
		this.isNotifyVisible = true;
	}

}

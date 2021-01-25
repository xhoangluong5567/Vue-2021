<template>
<div class="container">
<div class="row">
      <div class="col-3" v-for="product in products" :key="product.id">
        <div class="product-item col-md-3 col-sm-6 col-xs-12" style="max-width:100%">
          <a href=""
            ><img
              :src="'http://127.0.0.1:8000/upload/' + product.images"
              height="200"
        width="200"
        alt=""
        srcset=""
      /></a>

          <p>
            <a href="#">{{ product.name }}</a>
          </p>
          <p class="price">{{(product.price)}} VND</p>
			<a style="color:white;" href="" class="btn btn-warning">Mua Hàng</a>
			<a style="color:white;" href="" class="btn btn-danger">Xem chi tiết</a>
        </div>
      </div>
</div>
</div>
</template>


<script>
import { productService } from "../services";

export default {
  props: {
    id: null
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    productService
      .getProductByBrand(this.id)
      .then(result => {
        this.products = result.data;
      })
      .catch();
  }
};
</script>

<style>
.products h3{
	margin-top: 15px;
	font-size: 18px;
	color: #ff9600;
	text-transform: uppercase;
}

.product-list{
	margin: 0;
}

.product-item{
	border: 1px solid #ddd;
	text-align: center;
	padding: 15px;
	position: relative;		
}
.product-item img{
	border: none;
	padding: 0;
	border-radius: 0;
	height: 200px;
}
.product-item:hover .marsk{
	display: block;
}
.product-item img{
	margin-bottom: 15px;
}
.product-item a{
	color: #666;
}
.price{
	font-weight: bold;
	color: #D60000;
}
.marsk{
	background: #000;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0.75;
	display: none;		
}
.marsk a{
	color: #fff;
	position: absolute;
	top: 50%;
	/* left: 0;right:0; margin: auto;width: 100%; cho width de thanh block, vi width là block, a la inline */				
	margin-left:-37px;
}
.btn:not(:disabled):not(.disabled) {
    cursor: pointer;
    margin-left: 6px;
}
a {
    font-size: 18px;
    
}
p {
    font-size: 18px;
}
</style>
<template>
  <header id="header">
        <div class="container-fluid">
            <div class="row">
                <div id="logo" class="col-md-6 col-sm-12 col-xs-12">
                    <h1>
                        <a href=""><img src="https://i0.wp.com/s1.uphinh.org/2021/01/24/oklogo.png" style="width: 300px;margin-bottom: 20px;"></a>
                        <!-- <nav><a id="pull" class="btn btn-danger" href="#"> -->
                                <i class="fa fa-bars"></i>
                            <!-- </a> -->
                            <!-- </nav> -->
                    </h1>
                </div>
                <div class="col-md-6 col-sm-12 col-xs-12" style="margin-top:10px;">
                    <a class="" href=""><img src="https://i0.wp.com/s1.uphinh.org/2021/01/24/carts.png"></a>
                    <!-- <a style="color:white; font-weight: bold;" href="{{url('cart/show')}}">{{Cart::count()}}</a> -->
                </div>
            </div>
			
        </div>  
  </header>


        
</template>

<script>
import { productService } from "../../services/index";

export default {
	name: "Header",
	data() {
		return {
			categories: [],
			brands: [],
		};
	},
	methods: {},
	created() {
		// productService
		// 	.getCategories()
		// 	.then((result) => {
		// 		this.categories = result.data.data;
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		productService
			.getBrands()
			.then((result) => {
				this.brands = result.data;
			})
			.catch((err) => {
				console.log(err);
			});
	},
	mounted() {},
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
	padding: 0;
	margin: 0;
}
body{
	font-family: arial;
	font-size: 14px;
	color: #666;
}
#header{
	background: #e93a5d;		
}
#logo, #search, #cart{
	height: 98px;
}
#logo h1{	
	line-height: 98px;
}
</style>

<template>
  <div id="wrap-inner">
    <div class="products">
      <a><h1
          style="text-align:center; margin-top:30px; margin-bottom:30px; color:black; border:2px solid orange; "
    
          v-for="product in brands"
          :key="product.id"
        >
          {{ product.name }}
          <ListProductInBrand :id="product.id" />
        </h1>
		
      </a>
    </div>
  </div>
</template>
<script>
import ListProductInBrand from "../components/ListProductInBrand";
import { productService } from "../services";

export default {
  data() {
    return { brands: [], products: [] };
  },
  components: {
    ListProductInBrand
  },
  created() {
    productService
      .getBrands()
      .then(result => {
        this.brands = result.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style>

</style>
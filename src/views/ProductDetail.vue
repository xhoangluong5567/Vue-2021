<template>
  <div class="row">
    <div class="col-3" v-for="product in products" :key="product.id">
      <img
        :src="'http://127.0.0.1:8000/upload/' + product.images"
        height="80"
        width="80"
        alt=""
        srcset=""
      />
      {{ product.name }}
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
</style>
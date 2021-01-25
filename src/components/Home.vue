<template>
	<div>
		<Header />
        <Slider />
        <ProductDetail />
		<Footer />
	</div>
</template>

<script>
import Header from "../components/commons/Header.vue";
import Slider from "../components/Slider.vue";
import ProductDetail from "../views/ProductDetail";
import Footer from "../components/commons/Footer.vue";
export default {
    
	components: { Header,Slider, ProductDetail, Footer },
};
</script>

<style>
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

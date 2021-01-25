<template>
	<div>
		<Header />
        <Slider />
        <Brand />
		<Footer />
	</div>
</template>

<script>
import Header from "../components/commons/Header.vue";
import Slider from "../components/Slider.vue";
import Brand from "../views/Brand";
import Footer from "../components/commons/Footer.vue";
export default {
    
	components: { Header,Slider, Brand, Footer },
};
</script>

<style>
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
    <footer id="footer">
            <div id="footer-t">
                <div class="container">
                    <div class="row">
                        <div id="about" class="col-md-4 col-sm-12 col-xs-12">
                            <h3>About us</h3>
                            <p class="text-justify">Đồ án môn PHP nâng cao 2020 Hueic.</p>
                        </div>
                        <div id="hotline" class="col-md-4 col-sm-12 col-xs-12">
                            <h3>Hotline</h3>
                            <p>Phone: (+84) 0963600036</p>
                            <p>Email: xhoangluong@gmail.com</p>
                        </div>
                        <div id="contact" class="col-md-4 col-sm-12 col-xs-12">
                            <h3>Contact Us</h3>
                            <p>Address: Hueic - 70 Nguyễn Huệ - Thừa Thiên Huế</p>
                        </div>
                    </div>
                </div>
                <div id="footer-b">
                    <div class="container">
                        <div id="footer-b-r" class="col-md-12 col-sm-12 col-xs-12 text-center">
                            <p style="text-align:center;">© 2020 Hueic</p>
                        </div>
                </div>
            </div>
            </div>
        </footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
#footer{
	margin-top: 15px;
}
#footer-t{
	background: #FF9600;
	color: rgb(12, 11, 11);
	padding: 15px 0 0 0;		
}

#footer-t h3{
	font-size: 18px;
	text-transform: capitalize;
}

#footer-b{
	background: #FF6700;
	color: #fff;
	font-size: 13px;
	position: relative;
}
#footer-b p{
	margin: 0;
	height: 100px;
	line-height: 100px;
}	
.scroll{
	position: absolute;
	top: 0;
	right: 0;
}
</style>
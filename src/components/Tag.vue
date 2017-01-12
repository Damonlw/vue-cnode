<template lang="html">
	<div>
		<div class="home-inner">
			<div class="home-inner-title">友情社区</div>
			<div class="home-inner-content show-img">
				<a href="https://ruby-china.org/" target="_blank">
          <img src="../assets/ruby-china.png">
        </a>
				<a href="http://golangtc.com/" target="_blank">
          <img src="../assets/golangtc.png">
        </a>
				<a href="http://phphub.org/" target="_blank">
          	<img src="../assets/phphub.png">
        </a>
				<a href="https://testerhome.com/" target="_blank">
          <img src="../assets/testhome.png">
        </a>
			</div>
		</div>
		<div class="home-inner">
			<div class="home-inner-title">客户端二维码</div>
			<div class="home-inner-content two-code">
				<img src="../assets/code.png">
				<p><a href="#">客户端源码地址</a></p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.show-img {
	a {
		display: block;
		margin-bottom: 7px;
		cursor: pointer;

		img {
			width: 150px;
			height: 50px;
		}
	}
	a:last-child {
		margin-bottom: 0;
	}
}
.two-code {
	img {
		display: block;
		width: 200px;
		height: 200px;
		margin: 0 auto;
	}
	p {
		text-align: center;
		margin:0;

		a {
			color: #778087;
			text-decoration: none;
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}
}
</style>

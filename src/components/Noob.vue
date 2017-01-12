<template lang="html">
	<div class="main-container">
		<div class="container-panel cancel-margin-right">
			<div class="home-inner inner-marigin-top">
				<div class="home-inner-title home"><span @click="jumpHome">主页</span>/&nbsp;&nbsp;<span class="title-color">Node.js 新手入门</span></div>
				<div class="home-inner-content">
					<div class="markdown-text">
						<h2 class="black-color">Node.js 入门</h2>
						<p class="black-color">《<strong>快速搭建 Node.js 开发环境以及加速 npm</strong>》</p>
						<p><a href="http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html" target="_blank">http://fengmk2.com/blog/2014/03/node-env-and-faster-npm.html</a></p>
						<p class="black-color">《<strong>Node.js 包教不包会</strong>》</p>
						<p><a href="https://github.com/alsotang/node-lessons" target="_blank">https://github.com/alsotang/node-lessons</a></p>
						<p class="black-color">《<strong>ECMAScript 6入门</strong>》</p>
						<p><a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
						<p class="black-color">《<strong>七天学会NodeJS</strong>》</p>
						<p><a href="https://github.com/nqdeng/7-days-nodejs" target="_blank">https://github.com/nqdeng/7-days-nodejs</a></p>
						<h2 class="black-color">Node.js 资源</h2>
						<p class="black-color">《<strong>前端资源教程</strong>》</p>
						<p><a href="https://cnodejs.org/topic/56ef3edd532839c33a99d00e" target="_blank">https://cnodejs.org/topic/56ef3edd532839c33a99d00e</a></p>
						<p class="black-color">《<strong>国内的 npm 镜像源</strong>》</p>
						<p><a href="http://cnpmjs.org/" target="_blank">http://cnpmjs.org/</a></p>
						<p class="black-color">《<strong>node weekly</strong>》</p>
						<p><a href="http://nodeweekly.com/issues" target="_blank">http://nodeweekly.com/issues</a></p>
						<p class="black-color">《<strong>node123-<em>node.js中文资料导航</em></strong>》</p>
						<p><a href="https://github.com/youyudehexie/node123" target="_blank">https://github.com/youyudehexie/node123</a></p>
						<p class="black-color">《<strong>A curated list of delightful Node.js packages and resources</strong>》</p>
						<p><a href="https://github.com/sindresorhus/awesome-nodejs" target="_blank">https://github.com/sindresorhus/awesome-nodejs</a></p>
						<p class="black-color">《<strong>Node.js Books</strong>》</p>
						<p><a href="https://github.com/pana/node-books" target="_blank">https://github.com/pana/node-books</a></p>
						<h2 class="black-color">Node.js 名人</h2>
						<p class="black-color">《<strong>名人堂</strong>》</p>
						<p><a href="https://github.com/cnodejs/nodeclub/wiki/%E5%90%8D%E4%BA%BA%E5%A0%82" target="_blank">https://github.com/cnodejs/nodeclub/wiki/名人堂</a></p>
						<h2 class="black-color">Node.js 服务器</h2>
						<p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a></p>
					</div>
				</div>
			</div>
		</div>
		<div class="container-sildebar hide">
			<github></github>
			<tag></tag>
		</div>
	</div>
</template>

<script>
import github from './Github'
import tag from './Tag'

export default {
	components: {
		github, tag
	},
	methods: {
		jumpHome() {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="less" scoped>
.markdown-text {
	margin: 0 10px;

	h2 {
		margin: 0;
		font-size: 26px;
		border-bottom: 1px solid #eee;
		padding: 5px 0 10px 0;
	}
}

</style>

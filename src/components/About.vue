<template lang="html">
	<div class="main-container">
		<div class="container-panel cancel-margin-right">
			<div class="home-inner inner-marigin-top">
				<div class="home-inner-title home"><span @click="jumpHome">主页</span>/&nbsp;&nbsp;<span class="title-color">关于</span></div>
				<div class="home-inner-content">
					<div class="markdown-text black-color"><h3>关于</h3>
						<p>CNode 社区为国内最大最具影响力的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
						<p>CNode 社区由一批热爱 Node.js 技术的工程师发起，目前已经吸引了互联网各个公司的专业技术人员加入，我们非常欢迎更多对 Node.js 感兴趣的朋友。</p>
						<p>CNode 的 SLA 保证是，一个9，即 90.000000%。</p>
						<p>社区目前由 <a href="http://cnodejs.org/user/alsotang" target="_blank">@alsotang</a> 在维护，有问题请联系：<a href="https://github.com/alsotang" target="_blank">https://github.com/alsotang</a></p>
						<p>请关注我们的官方微博：<a href="http://weibo.com/cnodejs" target="_blank">http://weibo.com/cnodejs</a></p>
						<h3>移动客户端</h3>
						<p>客户端由 <a href="https://cnodejs.org/user/soliury" target="_blank">@soliury</a> 开发维护。</p>
						<p>源码地址： <a href="https://github.com/soliury/noder-react-native" target="_blank">https://github.com/soliury/noder-react-native</a> 。</p>
						<p>立即体验 CNode 客户端，直接扫描页面右侧二维码。</p>
						<p>另，安卓用户同时可选择：<a href="https://github.com/TakWolf/CNode-Material-Design" target="_blank">https://github.com/TakWolf/CNode-Material-Design</a> ，这是 Java 原生开发的安卓客户端。</p>
						<h3 class="black-color">LOGO</h3>
						<p>白底： <a href="/public/images/cnodejs.svg" target="_blank">/public/images/cnodejs.svg</a></p>
						<p>黑底： <a href="/public/images/cnodejs_light.svg" target="_blank">/public/images/cnodejs_light.svg</a></p>
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

	h3 {
		margin: 0;
		font-size: 26px;
		border-bottom: 1px solid #eee;
		padding: 5px 0 10px 0;
	}
}


</style>

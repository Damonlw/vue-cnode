<template lang="html">
	<div class="main-container">
		<div class="container-panel cancel-margin-right">
			<div class="home-inner inner-marigin-top">
				<div class="home-inner-title home"><span @click="jumpHome">主页</span>/&nbsp;&nbsp;<span class="title-color">API</span></div>
				<div class="home-inner-content">
					<div class="markdown-text">
						<p>以下 api 路径均以 <strong><a href="https://cnodejs.org/api/v1" target="_blank">https://cnodejs.org/api/v1</a></strong> 为前缀</p>
						<h3>主题</h3>
						<h4>get /topics 主题首页</h4>
						<p>接收 get 参数</p>
						<ul>
							<li>page <code>Number</code> 页数</li>
							<li>tab <code>String</code> 主题分类。目前有 <code>ask</code> <code>share</code> <code>job</code> <code>good</code></li>
							<li>limit <code>Number</code> 每一页的主题数量</li>
							<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
						</ul>
						<p>示例：<a href="/api/v1/topics" target="_blank">/api/v1/topics</a></p>
						<h4>get /topic/:id 主题详情</h4>
						<p>接收 get 参数</p>
						<ul>
							<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
							<li>accesstoken <code>String</code> 当需要知道一个主题是否被特定用户收藏时，才需要带此参数。会影响返回值中的 <code>is_collect</code> 值。</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
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
	color: #333;

	h3 {
		margin: 0;
		font-size: 24px;
		border-bottom: 1px solid #eee;
		padding: 5px 0 10px 0;
		margin: 30px 0 15px;
		border-bottom: 1px solid #eee;
	}
	h4 {
		font-size: 17.5px;
		border-bottom: 1px solid #eee;
	}
	ul{
		margin: 0 0 10px 25px;

		li{
			list-style-type: disc;
		}
	}
}

</style>

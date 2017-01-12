<template lang="html">
	<div class="footer hide">
		<div class="footer-main">
			<div>RSS | <a href="https://github.com/cnodejs/nodeclub/">源码地址</a> </div>
			<p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
			<p class="support">服务器赞助商为&nbsp;<a href="http://www.ucloud.cn" target="_blank"><img class="img-position" src="../assets/ucloud.png"></a>，存储赞助商为<a href="http://www.qiniu.com/" target="_blank"><img src="../assets/seven-ox.png"></a>，由&nbsp;<a href="https://alinode.aliyun.com" target="_blank"><img src="../assets/alinone.png"></a>&nbsp;提供应用性能服务</p>
			<p>新手搭建 Node.js 服务器，推荐使用无需备案的&nbsp;<a class="server" href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
		</div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="less">
.footer {
	width: 100%;
	background-color: #fff;

	.footer-main {
		width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
    color: #ababab;
    padding: 20px 0;
    line-height: 2em;

		p {
			margin: 0;

			a {
				cursor: pointer;
			}
		}
		.support {
			display: flex;
			align-items: center;
		}
		div {
			color: #666;
			font-size: 13px;
			a {
				color: #666;
				text-decoration: none;
				cursor: pointer;
				&:hover {
					color: #08c;
				}
			}
		}
	}
}
.img-position {
	position: relative;
	top: 2px;
}
.server {
	color: #08c;
  text-decoration: none;

	&:hover {
		color: #004000;
		text-decoration: underline;
	}
}

</style>

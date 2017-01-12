<template lang="html">
	<div class="inner">
		<p>CNode：Node.js专业中文社区</p>
		<div class="inner-info">您可以<span>登录</span>或<span>注册</span>, 也可以</div>
		<a href="https://github.com/" class="inner-login">通过 GitHub 登录</a>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.inner {
	padding: 10px;
	background: #fff;
	border-radius: 0 0 3px 3px;

	p {
		margin-top: 3px;
	}
	.inner-info {
		font-size: 13px;

		span {
			padding: 0 5px;
			color: #778087;
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}
	.inner-login {
		display: block;
		width: 152px;
		height: 34px;
		line-height: 34px;
		text-align: center;
		color: #fff;
    background-color: #5bc0de;
		border: none;
		letter-spacing: 2px;
		text-decoration: none;
		transition: all .2s ease-in-out;
		cursor: pointer;
		border-radius: 3px;
		margin-top: 4px;

		&:hover {
			background-color: #2f96b4;
		}
	}
}
</style>

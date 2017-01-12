<template lang="html">
	<div class="main-container">
		<div class="container-panel cancel-margin-right">
			<div class="home-inner inner-marigin-top">
				<div class="home-inner-title home"><span @click="jumpHome">主页</span>/&nbsp;&nbsp;<span class="title-color">找回密码</span></div>
				<div class="home-inner-content">
					<form class="form-style" action="" method="post">
						<div class="form-group">
							<label class="label-style black-color" for="">电子邮箱</label>
							<input class="input-style" type="text" name="" value="">
						</div>
						<p class="help-block email">请输入您注册帐户时使用的电子邮箱</p>
						<div class="form-footer">
							<div class="login">提交</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="container-sildebar hide">
			<div class="home-inner inner-marigin-top">
				<div class="home-inner-title">关于</div>
				<div class="home-inner-content">
					<p class="black-color inner-marigin-top">CNode：Node.js专业中文社区</p>
					<p class="black-color">在这里你可以：</p>
					<ul class="content-ul">
		        <li>向别人提出你遇到的问题</li>
		        <li>帮助遇到问题的人</li>
		        <li>分享自己的知识</li>
		        <li>和其它人一起进步</li>
      		</ul>
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
		},
		forgetPassword(){
			this.router.push('/search_pass')
		}
	}
}
</script>

<style lang="less" scoped>
.content-ul {
	margin: 0 0 10px 25px;

	li {
		color: #333;
		height: 26px;
		line-height: 26px;
		list-style-type: disc;
	}
}
.form-style {
	margin-top: 40px;

	.email {
		padding-left: 180px;
	}
	.form-group {
		margin-bottom: 20px;

		.label-style {
			display: inline-block;
			width: 160px;
			padding-top: 5px;
			text-align: right;
			margin-right: 15px;
		}

		.input-style {
			width: 270px;
			height: 20px;
			padding: 4px 6px;
			border-radius: 4px;
			outline: 0;
		  border: 1px solid #ccc;
			box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
			transition: box-shadow linear .2s;

			&:focus {
				box-shadow: 0 0 2px rgba(45, 204, 250, 1);
			}
		}
	}
}

.form-footer {
	width: 320px;
	display: flex;
	align-items: center;
	margin: 40px 0 46px 180px;

	.login {
		color: #fff;
		border-radius: 3px;
		background-color: #08c;
		border: none;
		padding: 3px 10px;
		letter-spacing: 2px;
		transition: all .2s ease-in-out;
		line-height: 28px;
		cursor: pointer;

		&:hover {
			background-color: #0055cc;
		}
	}
}

</style>

<template lang="html">
	<div class="main-container">
		<div class="container-panel cancel-margin-right">
			<div class="home-inner inner-marigin-top">
				<div class="home-inner-title home"><span @click="goToHome">主页</span>/</div>
				<div class="home-inner-content">
					<div class="author-content">
						<img :src="userData.avatar_url" >
						<span v-text="userData.loginname"></span>
					</div>
					<p class="black-color">积分：{{ userData.score }}</p>
					<p class="register">注册时间 {{ userData.create_at }}</p>
				</div>
				<div class="home-inner">
					<div class="home-inner-title font-size-title">最近创建的话题</div>
					<div class="home-inner-content cancel-padding">
						<div class="overflow-div">
							<div class="div-li " v-for="title in userData.recent_topics">
								<div class="li-left">
									<img class="headtrait" :src="title.author.avatar_url" :title="title.author.loginname" @click="jumpToUser(title.author.loginname)">
									<span :class="['title', {titleActive: title.isActive}]" v-text="title.title" @click="jumpToThemeDetails(title.id, title)"></span>
								</div>
							</div>
						</div>
						<div class="check-more"><span>查看更多»</span></div>
					</div>
				</div>
				<div class="home-inner">
					<div class="home-inner-title font-size-title">最近参与的话题</div>
					<div class="home-inner-content cancel-padding">
						<div class="overflow-div">
							<div class="div-li " v-for="title in userData.recent_replies">
								<div class="li-left">
									<img class="headtrait" :src="title.author.avatar_url" :title="title.author.loginname" @click="jumpToUser(title.author.loginname)">
									<span :class="['title', {titleActive: title.isActive}]" v-text="title.title" @click="jumpToThemeDetails(title.id, title)"></span>
								</div>
							</div>
						</div>
						<div class="check-more"><span>查看更多»</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-sildebar hide">
			<div class="home-inner inner-margin-top">
				<div class="home-inner-title">个人信息</div>
				<div class="home-inner-content">
					<div class="author-content">
						<img :src="userData.avatar_url" >
						<span v-text="userData.loginname"></span>
					</div>
					<p class="black-color cancel-marigin">积分：{{ userData.score }}</p>
					<p class="black-color cancel-marigin">“ 这家伙很懒，什么个性签名都没有留下。”</p>
				</div>
			</div>
			<tag></tag>
		</div>
	</div>
</template>

<script>
import tag from './Tag.vue'
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			userData: state => state.userData
		})
	},
	methods: {
		goToHome() {
			this.$router.push('/')
		},
		jumpToThemeDetails(id, title) {
			this.$store.dispatch('getThemeDetails', id);
			this.$router.push(`/topic/${id}`);
			title.isActive = true
		},
		jumpToUser(loginname) {
			this.$store.dispatch('getUserData', loginname);
			this.$router.push(`/user/${loginname}`);
			document.body.scrollTop = 0;
		}
	},
	components: {
		tag
	}
}
</script>

<style lang="less" scoped>
.register {
	color: #ababab
}

.home-inner-content {
	.overflow-div {
		overflow: hidden;
		max-height: 200px;

		.div-li {
			padding:10px;
			border-top: 1px solid #f0f0f0;
			position: relative;

			.li-left {
				display: flex;
				align-items: center;

				.headtrait {
					width: 30px;
					height: 30px;
					border-radius: 3px;
					cursor: pointer;
				}
				.status {
					height: 18px;
					line-height: 18px;
					padding: 0 3px;
					font-size: 12px;
					border-radius: 3px;
				}
				.status.top{
					color: #fff;
					background: #80bd01;
				}
				.title {
					margin-left: 10px;
					font-size: 16px;
					cursor: pointer;
					text-overflow: ellipsis;
					white-space: nowrap;
					overflow: hidden;
					max-width: 670px;
					color: #08c;
					&:hover {
						text-decoration: underline;
						color: #666
					}
				}
			}
		}
		.div-li:first-child {
			border-top: none;
		}
	}
	.check-more {
		padding: 10px;
		border-top: 1px solid #f0f0f0;

		span {
			color: #666;
			cursor: pointer;
		}
	}
}


</style>

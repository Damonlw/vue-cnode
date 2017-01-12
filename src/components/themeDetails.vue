<template lang="html">
	<div class="main-container">
		<div class="container-panel cancel-margin-right">
			<div class="panel-top-content">
				<div class="topic-title">
					<span class="title"><span v-show="themeDetails.status">{{ themeDetails.status }}</span>{{ themeDetails.title }}</span>
					<div class="changes-data">
	        	<span class="span-content"> 发布于 {{ themeDetails.create_at }}</span>
	        	<span class="span-content"> 作者 {{ themeDetails.loginname }}</span>
						<span class="span-content"> {{ themeDetails.visit_count }} 次浏览</span>
	          <span class="span-content"> 来自 {{ themeDetails.tab }}</span>
      		</div>
				</div>
				<div class="topic-content" v-html="themeDetails.content"></div>
			</div>
			<div class="home-inner">
				<div class="home-inner-title font-size-title">{{ themeDetails.reply_count }} 回复</div>
				<div class="home-inner-content cancel-padding">
					<div class="reply-content" v-for="(reply, index) in themeDetails.replies">
						<div class="reply-header">
							<img class="rely-img" :src="reply.author.avatar_url"  @click="jumpToUser(reply.author.loginname)">
							<span class="author-name" @click="jumpToUser(reply.author.loginname)">{{ reply.author.loginname }} </span>
							<span  class="title-color">&nbsp;{{ index + 1 }}楼•</span>
							<span class="title-color">{{ reply.create_at }}</span>
						</div>
						<div class="reply" v-html="reply.content"></div>
					</div>
				</div>
			</div>
		</div>
		<div class="container-sildebar hide">
			<div class="home-inner inner-margin-top">
				<div class="home-inner-title">作者</div>
				<div class="home-inner-content">
					<div class="author-content">
						<img :src="themeDetails.avatar_url" >
						<span v-text="themeDetails.loginname"></span>
					</div>
					<p>积分：<span>15</span></p>
					<p>“ 这家伙很懒，什么个性签名都没有留下。”</p>
				</div>
			</div>
			<div class="home-inner">
				<div class="home-inner-title">作者其他话题</div>
				<div class="home-inner-content">
					<p>无</p>
				</div>
			</div>
			<div class="home-inner">
				<div class="home-inner-title">无人回复的话题</div>
				<div class="home-inner-content nobody">
					<p>使用startssl证书创建https服务器时遇到的问题</p>
					<p>node中response在触发end()的时候才会发数据到客户端吗？</p>
					<p>mongo集群中主库的local数据库丢失了，从库中的local数据还在</p>
					<p>在Redis中进行分页排序查询</p>
					<p>使用按键button标签实现 链接<a>跳转界面失效问题</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
	methods:{
		jumpToUser(loginname) {
			this.$store.dispatch('getUserData', loginname);
			this.$router.push(`/user/${loginname}`);
		}
	},
	computed:{
		...mapState({
			themeDetails: state => state.themeDetails
		})
	}
}
</script>

<style lang="less">
.panel-top-content {
	background-color: #fff;
	border-radius: 3px;

	.topic-title {
		padding: 10px;

		.title {
			font-size: 22px;
	    font-weight: 700;
	    margin: 8px 0;
	    display: inline-block;
	    vertical-align: bottom;
	    width: 75%;
	    line-height: 30px;

			span {
				background: #80bd01;
				padding: 2px 4px;
				width: 24px;
				height: 15px;
				border-radius: 3px;
				color: #fff;
				font-size: 12px;
				margin-right: 5px;
			}
		}
		.changes-data {
			font-size: 12px;
    	color: #838383;
		}
	}
	.topic-content {
		padding: 10px;
		margin: 0 10px;
		border-top: 1px solid #e5e5e5;
	}
}

.home-inner-content {
	.nobody {
		p {
			margin: 0;
			height: 27px;
			line-height: 27px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.author-content {
		display: flex;
		align-items: center;

		img {
			width: 48px;
			height: 48px;
			border-radius: 3px;
		}
		span {
			margin-left: 10px;
		}
		margin-bottom: 10px;
	}
}
.reply-content {
	padding: 10px;
  border-top: 1px solid #f0f0f0;

	.reply-header {
		display: flex;
		align-items: flex-start;

		.rely-img {
			cursor: pointer;
		}
		.author-name {
			font-size: 12px;
			color: #666;
			font-weight: 700;
			padding-left: 10px;
			height: 20px;
			line-height: 20px;
			cursor: pointer;
		}
		.title-color {
		  color: #08c;
			font-size: 11px;
		}
		img {
			width: 30px;
			height: 30px;
			border-radius: 3px;
		}
	}
	.reply {
		padding-left: 50px;
	}
}
.markdown-text {
	font-size: 15px;
	line-height: 1.7em;

	p:first-child {
		margin-top: 0;
	}
	p {
		img {
			max-width: 100%;
			cursor: pointer;
		}
	}
	a {
		color: #08c;
		text-decoration: none;
	}
	a:hover {
		text-decoration: underline;
	}
	pre {
		font-size: 14px;
    border-radius: 0;
    padding: 0 15px;
    border: none;
    margin: 20px -10px;
    border-width: 1px 0;
    background: #f7f7f7;
    -o-tab-size: 4;
    -moz-tab-size: 4;
    tab-size: 4;

		code {
			color: inherit;
	    white-space: pre-wrap;
	    // background-color: transparent;
		}
	}
	ol {
		li {
			img {
				width: 100%;
			}
		}
	}
}




</style>

<template lang="html">
	<div class="content">
		<div class="panel cancel-margin-right">
			<div class="panel-header">
				<ul>
					<li v-for="li in liItems"
							v-text="li.text"
							:class="['nav-li', { status: li.isChecked }]"
							@click="changeChecked(li.text)">
					</li>
				</ul>
			</div>
			<div class="panel-content">
				<div class="div-li" v-for="title in homeData">
					<div class="li-left">
						<img class="headtrait img-margin-right" :src="title.author.avatar_url" :title="title.author.loginname" @click="jumpToUser(title.author.loginname)">
						<span class="count hide">
							<span v-text="title.reply_count"></span>/<span v-text="title.visit_count"></span>
						</span>
						<span :class="['status', `${title.status}`]" v-text="title.text"></span>
						<span :class="['title', 'media-font-size', {titleActive: title.isActive}]" v-text="title.title" @click="jumpToThemeDetails(title.id, title)"></span>

					</div>
					<div class="media-count">
						<span v-text="title.reply_count"></span>/<span v-text="title.visit_count"></span>
					</div>
					<div class="li-right flex-end">
						<img class="hide" :src="title.author.avatar_url">
						<span v-text="title.reply"></span>
					</div>
				</div>
			</div>
			<div class="footer-ul">
				<ul class="pagination">
					<li @click="goFirstPage" :class="{ firstLi: isFirstHover}">«</li>
					<li v-show="firstEllipsis" class="mouse-status">...</li>
					<li v-for="p in paginateItems"
							v-text="p.text"
							:class="[p.isChecked ? 'defaults' : 'hovers', { actives: p.isActive}]"
							@click="paginateChecked(p.text)">
					</li>
					<li v-show="lastEllipsis" class="mouse-status">...</li>
					<li @click="goLastPage" :class="['lastLi', { lastHover: isLastHover}]">»</li>
				</ul>
			</div>
		</div>
		<div class="sidebar hide">
			<github></github>
			<div class="home-inner">
				<div class="home-inner-title">无人回复的话题</div>
				<div class="home-inner-content">
					<p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
					<p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
					<p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
					<p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
					<p class="inner-content-p">在Redis中进行分页排序查询在Redis中进行分页排序查询在Redis中进行分页排序查询</p>
				</div>
			</div>
			<div class="home-inner">
				<div class="home-inner-title">积分榜&nbsp;&nbsp;<span class="rank">TOP 100 >></span></div>
				<div class="home-inner-content">
					<ul class="rank-ul">
        		<li>
						  <span class="top-score">16385</span>
						  <span class="user-name"><a href="/user/i5ting">i5ting</a></span>
						</li>
						<li>
						  <span class="top-score">14120</span>
						  <span class="user-name"><a href="/user/alsotang">alsotang</a></span>
						</li>
						<li>
						  <span class="top-score">9310</span>
						  <span class="user-name"><a href="/user/leapon">leapon</a></span>
						</li>
						<li>
						  <span class="top-score">8680</span>
						  <span class="user-name"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
						</li>
					</ul>
				</div>
			</div>
			<tag></tag>
		</div>
	</div>
</template>

<script>
import github from './Github'
import tag from './Tag'

export default {
	data () {
		return {
			firstEllipsis: false,
			lastEllipsis: true,
			isFirstHover: false,
			isLastHover: true,
			nowPageNum: 1,
			tabType: 'all',
			maxPage: 450,
			liItems: [
				{ text: '全部', isChecked: true, tab: 'all' },
				{ text: '精华', isChecked: false, tab: 'good' },
				{ text: '分享', isChecked: false, tab: 'share' },
				{ text: '问答', isChecked: false, tab: 'ask' },
				{ text: '招聘', isChecked: false, tab: 'job' }
			],
			paginateItems: [
				{ text: 1, isActive: true, isChecked: true },
				{ text: 2, isActive: false, isChecked: false },
				{ text: 3, isActive: false, isChecked: false },
				{ text: 4, isActive: false, isChecked: false },
				{ text: 5, isActive: false, isChecked: false }
			],
			paginateItemsCopy: [
				{ text: 1, isActive: true, isChecked: true },
				{ text: 2, isActive: false, isChecked: false },
				{ text: 3, isActive: false, isChecked: false },
				{ text: 4, isActive: false, isChecked: false },
				{ text: 5, isActive: false, isChecked: false }
			]
		}
	},
	methods: {
		changeChecked(checkedText) {
			this.tabType = this.$store.state.askType;
			this.firstEllipsis = false;
			this.liItems.map((li) =>{
				checkedText === li.text ? li.isChecked = true : li.isChecked = false
			})
			if(checkedText === '全部') {
				this.$store.dispatch('clearData');
				this.maxPage = 450;
				this.$store.dispatch('getHomeData', {
					page: 1,
					tab: 'all'
				});
			}else if (checkedText === '精华') {
				this.$store.dispatch('clearData');
				this.maxPage = 13;
				this.$store.dispatch('getHomeData', {
					page: 1,
					tab: 'good'
				});
			}else if (checkedText === '分享') {
				this.$store.dispatch('clearData');
				this.maxPage = 81;
				this.$store.dispatch('getHomeData', {
					page: 1,
					tab: 'share'
				});
			}else if (checkedText === '问答') {
				this.$store.dispatch('clearData');
				this.maxPage = 157;
				this.$store.dispatch('getHomeData', {
					page: 1,
					tab: 'ask'
				});
			}else if (checkedText === '招聘') {
				this.$store.dispatch('clearData');
				this.maxPage = 24;
				this.$store.dispatch('getHomeData', {
					page: 1,
					tab: 'job'
				});
			}
			this.paginateItems = [
				{ text: 1, isActive: true, isChecked: true },
				{ text: 2, isActive: false, isChecked: false },
				{ text: 3, isActive: false, isChecked: false },
				{ text: 4, isActive: false, isChecked: false },
				{ text: 5, isActive: false, isChecked: false }
			];
			this.liItems.map((li) =>{
				if(li.isChecked === true){
					this.tabType = li.tab
				}
			})
			this.nowPageNum = 1;
			this.paginateItems[0].isActive = true;
		},
		paginateChecked(checkedPage) {
			if(checkedPage === this.nowPageNum){
				return null;
			}else {
				this.nowPageNum = checkedPage
			}
			document.body.scrollTop = 0;
			this.$store.dispatch('clearData');
			this.$store.dispatch('getHomeData', {
				page: checkedPage,
				tab: this.tabType
			});
			this.paginateItems.map((page) =>{
				checkedPage === page.text ? page.isActive = true : page.isActive = false
			})
			if(checkedPage >= 4 && checkedPage <= this.maxPage - 2) {
				this.firstEllipsis = true;
				this.paginateItems.splice(2, 1, { text: checkedPage, isActive: true, isChecked: true });
				this.paginateItems.splice(0, 1, { text: checkedPage - 2, isActive: false, isChecked: false });
				this.paginateItems.splice(1, 1, { text: checkedPage - 1, isActive: false, isChecked: false });
				this.paginateItems.splice(3, 1, { text: checkedPage + 1, isActive: false, isChecked: false });
				this.paginateItems.splice(4, 1, { text: checkedPage + 2, isActive: false, isChecked: false });
			}
			if(checkedPage < 4){
				this.firstEllipsis = false;
				this.paginateItems = this.paginateItemsCopy;
				this.paginateItems.map((page) =>{
					if(checkedPage === page.text){
						page.isActive = true;
						page.isChecked = true
					}else {
						page.isActive = false;
						page.isChecked = false
					}
				})
			}
			if(checkedPage > 1) {
				this.isFirstHover = true;
			}else {
				this.isFirstHover = false;
			}
			if(checkedPage === this.maxPage - 2){
				this.lastEllipsis = true;
				this.isLastHover = true;
			}
			if(checkedPage > this.maxPage - 2){
				this.isLastHover = true;
				this.lastEllipsis = false;
				this.paginateItems = [
					{ text: this.maxPage - 2, isActive: false, isChecked: false },
					{ text: this.maxPage - 1, isActive: false, isChecked: false },
					{ text: this.maxPage, isActive: false, isChecked: false },
				]
				this.paginateItems.map((page) =>{
					if(checkedPage === page.text){
						page.isActive = true;
						page.isChecked = true
					}else {
						page.isActive = false;
						page.isChecked = false
					}
				})
			}
		},
		goFirstPage() {
			if(this.paginateItems[0].isActive === true ){
				return null;
			}
			this.$store.dispatch('clearData');
			this.$store.dispatch('getHomeData', {
				page: 1,
				tab: this.tabType
			});
			this.lastEllipsis = true;
			this.firstEllipsis = false;
			this.isLastHover = true;
			this.isFirstHover = false;
			this.paginateItems = this.paginateItemsCopy;
		},
		goLastPage() {
			if(this.paginateItems[2].isActive === true && this.paginateItems[2].text === this.maxPage){
				return null;
			}
			this.$store.dispatch('clearData');
			this.$store.dispatch('getHomeData', {
				page: this.maxPage,
				tab: this.tabType
			});
			this.firstEllipsis = true;
			this.isLastHover = false;
			this.isFirstHover = true;
			this.lastEllipsis = false;
			this.paginateItems = [
				{ text: this.maxPage - 2, isActive: false, isChecked: false },
				{ text: this.maxPage - 1, isActive: false, isChecked: false },
				{ text: this.maxPage, isActive: true, isChecked: true }
			]
		},
		jumpToThemeDetails(id, title) {
			this.$store.dispatch('getThemeDetails', id);
			this.$router.push(`/topic/${id}`);
			title.isActive = true
		},
		jumpToUser(loginname) {
			this.$store.dispatch('getUserData', loginname);
			this.$router.push(`/user/${loginname}`)
		}
	},
	computed: {
		homeData() {
			return this.$store.state.homeData
		}
	},
	mounted() {
		this.$store.dispatch('getHomeData',{
			page:1,
			tab: 'all'
		});
	},
	components: {
		github, tag
	}
}
</script>

<style lang="less" scoped>
.content {
	position: relative;

	.panel {
		margin-right: 305px;

		.panel-header {
			padding-left: 10px;
			background-color: #f6f6f6;
    	border-radius: 3px 3px 0 0;

			ul{
				height: 40px;
				display: flex;
				align-items: center;

				.nav-li {
					color: #80bd01;
					padding: 1px 4px 0 4px;
					border-radius: 3px;
					margin: 0 10px;
					cursor: pointer;
				}
				.nav-li.status {
					background: #80bd01;
					color: #fff;
				}
			}
		}
		.panel-content {
			background: #fff;

			.div-li {
				padding:10px;
				border-top: 1px solid #f0f0f0;
				position: relative;

				&:hover {
					background-color: #f6f6f6;
				}

				.li-left {
					display: flex;
					align-items: center;

					.headtrait {
						width: 30px;
						height: 30px;
						border-radius: 3px;
						cursor: pointer;
					}

					.count {
						width: 70px;
						text-align: center;

						span:first-child {
							color: #9e78c0;
						}
						span:last-child {
							color: #b4b4b4;
							font-size: 10px;
						}
					}
					.status {
						height: 18px;
						line-height: 18px;
						padding: 0 3px;
						font-size: 12px;
						border-radius: 3px;
						white-space: nowrap;
					}
					.status.top{
						color: #fff;
						background: #80bd01;
					}
					.status.share{
						background-color: #e5e5e5;
						color: #999;
					}
					.title {
						margin-left: 4px;
						font-size: 16px;
						cursor: pointer;
						text-overflow: ellipsis;
						white-space: nowrap;
						overflow: hidden;
						max-width: 70%;
						margin-right: 65px;

						&:hover {
							text-decoration: underline;
						}
					}
				}
				.li-right {
					width: 78px;
					display: flex;
					align-items: center;
					position: absolute;
					right: 10px;
					top: 50%;
					transform: translateY(-50%);

					img {
						height: 18px;
						width: 18px;
						margin-right: 7px;
						border-radius: 3px;
					}
					span {
						color: #778087;
						text-align: right;
						min-width: 50px;
						white-space: nowrap;
						font-size: 11px;
					}
				}
			}
			.div-li:first-child {
				border-top: none;
			}
		}
		.footer-ul {
		  background: #fff;
			height: 40px;
			padding: 10px 0 0 10px;
			border-radius: 0 0 3px 3px;

			.pagination {
			  width: 265px;
			  height: 30px;
			  display: flex;
			  background: #fff;

				li {
					padding: 4px 12px;
					line-height: 20px;
					border: 1px solid #ddd;
					border-right: 0;

					&:first-child {
						border-radius: 4px 0 0 4px;
						cursor: default;
					}
				}
				li.hovers:hover {
					background-color: #f5f5f5;
					cursor: pointer;
				}
				li.defaults:hover {
					cursor: default;
				}
				li.actives {
					color: #80bd01;
				}
				.firstLi:hover {
					background-color: #f5f5f5;
					cursor: pointer;
				}
				.lastLi {
					border-right: 1px solid #ddd;
					border-radius: 0 4px 4px 0;
					cursor: default;
				}
				.lastHover:hover {
					background-color: #f5f5f5;
					cursor: pointer;
				}
				.mouse-status {
					cursor: auto;
				}
			}
		}
	}

	.sidebar {
		width: 290px;
		position: absolute;;
		right:0;
		top: 0;
	}
}
.inner-content-p {
	color: #778087;
	margin:0;
	height: 30px;
	line-height: 30px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.rank {
	cursor: pointer;
}
.rank-ul {
	li {
		height: 27px;
		line-height: 27px;

		span:first-child {
			margin-right: 10px
		}
	}
}
.media-count {
	width: 80px;
	display: none;
	position: relative;
	left: 72px;
	top: -8px;

	span:first-child {
		color: #9e78c0;
	}
	span:last-child {
		color: #b4b4b4;
		font-size: 10px;
	}
}

/*窗口响应*/
@media screen and (max-width: 979px) {
	.flex-end {
		justify-content: flex-end;
	}
	.media-font-size {
		font-size: 14px !important;
	}
	.media-count {
		display: block;
		font-size: 10px;
	}
	.img-margin-right {
		margin-right: 10px;
	}
}

</style>

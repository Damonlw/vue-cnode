import * as v from './mutation-types.js'

export default {
	[v.GET_HOME_DATA](state, data) {
		data.data.map((item) =>{
			let onStatus, text;
			if(data.type === 'all'){
				if(item.top){
					text = '置顶';
					onStatus = 'top'
				}else if (item.good) {
					text = '精华';
					onStatus = 'top'
				}else if (item.tab === 'share') {
					text = '分享';
					onStatus = 'share'
				}else if (item.tab === 'ask') {
					text = '问答';
					onStatus = 'share'
				}else if (item.tab === 'job'){
					text = '';
					onStatus = 'job'
				}
			}
			if(data.type === 'good' && item.good){
				text = '精华';
				onStatus = 'top'
			}
			if(data.type === 'share'){
				if(item.top){
					text = '置顶';
					onStatus = 'top'
				}else if (item.good) {
					text = '精华';
					onStatus = 'top'
				}else{
					text = '';
					onStatus = 'x'
				}
			}

			state.homeData.push({
				id: item.id,
				author_id: item.author_id,
				tab: item.tab,
				content: item.content,
				title: item.title,
				good: item.good,
				top: item.top,
				reply_count: item.reply_count,
				visit_count: item.visit_count,
				author: item.author,
				reply: countDate(item.last_reply_at),
				status: onStatus,
				text: text,
				isActive: false
			})
		})
	},

	[v.CLEAR_DATA](state) {
		state.homeData = []
	},
	[v.CHANGE_TIME](state) {
		state.isFirst = false
	},
	[v.GET_THEME_DETAILS](state, data){
		const replyArry = [];
		data.replies.map((item) =>{
			replyArry.push({
				author: item.author,
        content: item.content,
				create_at: countDate(item.create_at)
			})
		})
		state.themeDetails = {
			id: data.id,
		 	author_id: data.author_id,
		 	tab: getTab(data.tab),
		 	content: data.content,
			title: data.title,
		 	last_reply_at: countDate(data.last_reply_at),
		 	good: false,
		 	top: false,
		 	reply_count: data.reply_count,
		 	visit_count: data.visit_count,
		 	create_at: countDate(data.create_at),
		 	loginname: data.author.loginname,
		 	avatar_url: data.author.avatar_url,
			replies: replyArry,
			status: getStatus(data.good, data.top),
		}
	},
	[v.GET_USER_DATA](state, data){
		state.userData = {
			loginname: data.loginname,
		 	avatar_url: data.avatar_url,
			create_at: countDate(data.create_at),
			score: data.score,
			recent_topics: data.recent_topics,
			recent_replies: data.recent_replies,
			isActive: false
		}
	}
}

function getStatus(good, top){
	if(top === true){
		return '置顶'
	}else if (good === true) {
		return '精华'
	}else {
		return ''
	}
}

function getTab(tab){
	if(tab === 'share'){
		return '分享'
	}else if (tab === 'ask') {
		return '问答'
	}else if (tab === 'job') {
		return '招聘'
	}
}

function countDate(last_reply_at) {
	const nowYear = new Date().getFullYear(),
	 			nowDate = new Date().getTime(),
	 			timeDistance = (nowDate - new Date(last_reply_at).getTime()) / 60000,
	 			dayNum = timeDistance / 1400,
	 			replyYear = new Date(last_reply_at).getFullYear();
	let replyTime;
	if(timeDistance < 1){
		replyTime = '1 分钟前'
	}else if(1 <= timeDistance && timeDistance < 60){
		replyTime = Math.floor(timeDistance) + ' 分钟前'
	}else if (timeDistance < 1440) {
		replyTime = Math.floor(timeDistance/60) + ' 小时前'
	}else if (dayNum < 31){
		replyTime = Math.floor(dayNum) + ' 天前'
	}else if ( 31 <= dayNum && dayNum <= 58 ) {
		replyTime = '1 个月前'
	}else if (dayNum <= 59) {
		if(nowYear % 4 === 0 && nowYear % 100 !== 0 || nowYear % 400 === 0){
			replyTime = '28 天前'
		}else {
			replyTime = '2 个月前'
		}
	}else if (dayNum <= 60) {
		replyTime = '2 个月前'
	}else if (dayNum <= 91) {
		replyTime = '3 个月前'
	}else if (dayNum <= 121) {
		replyTime = '4 个月前'
	}else if (dayNum <= 152) {
		replyTime = '5 个月前'
	}else if (dayNum <= 182) {
		replyTime = '6 个月前'
	}else if (dayNum <= 213) {
		replyTime = '7 个月前'
	}else if (dayNum <= 243) {
		replyTime = '8 个月前'
	}else if (dayNum <= 274) {
		replyTime = '9 个月前'
	}else if (dayNum <= 304) {
		replyTime = '10 个月前'
	}else if (dayNum <= 335) {
		replyTime = '11 个月前'
	}else if (dayNum <= 365) {
		if(nowYear % 4 === 0 && nowYear % 100 !== 0 || nowYear % 400 === 0){
			replyTime = '11 个月前'
		}else {
			replyTime = '1 年前'
		}
	}else if(dayNum > 365) {
		replyTime = (nowYear - replyYear) + ' 年前'
	}
	return replyTime
}
